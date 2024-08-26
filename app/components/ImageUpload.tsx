'use client'

import { useState, useRef } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faCamera } from '@fortawesome/free-solid-svg-icons'

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('API Key is missing. Please check your .env file.');
}

const genAI = new GoogleGenerativeAI(apiKey);

function extractJSON(str: string) {
  // First, try to parse the entire string as JSON
  try {
    return JSON.parse(str);
  } catch (e) {
    // console.log("Failed to parse entire string as JSON, attempting to extract JSON object");
  }

  // If that fails, try to find a JSON object within the string
  try {
    const match = str.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }
  } catch (e) {
    // console.error("Failed to extract and parse JSON object:", e);
  }

  // If all else fails, attempt to create a JSON object from key-value pairs
  try {
    const lines = str.split('\n');
    const obj = {};
    lines.forEach(line => {
      const [key, value] = line.split(':').map(s => s.trim());
      if (key && value) {
        obj[key] = value;
      }
    });
    return obj;
  } catch (e) {
    // console.error("Failed to create JSON object from key-value pairs:", e);
  }

  console.error("Could not extract any valid JSON or key-value pairs from the response");
  return null;
}


export default function ImageUpload({ setPlantInfo, setUploadedImage }) {
  const [loading, setLoading] = useState(false)


  const handleImageInput = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setLoading(true)

    try {
      const base64Image = await readFileAsDataURL(file)
      setUploadedImage(base64Image)
      await processImage(base64Image)
    } catch (error) {
      console.error('Error identifying plant:', error)
      handleProcessingError()
    } finally {
      setLoading(false)
    }
  }

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const processImage = async (base64Image) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Identify this plant and provide the following information: common name, scientific name, brief description, origin, sunlight requirements, water needs, soil type, and growth rate. Format the response as JSON with keys: commonName, scientificName, description, origin, sunlight, water, soil, growthRate.";
  
    try {
      const result = await model.generateContent([
        prompt, 
        { inlineData: { data: base64Image.split(',')[1], mimeType: "image/jpeg" } }
      ]);
      const response = await result.response;
      const text = response.text();
  
      // console.log("Raw response:", text); // Log the entire response
  
      const parsedInfo = extractJSON(text);
      if (parsedInfo) {
        setPlantInfo(parsedInfo);
      } else {
        console.error("Failed to parse plant information. Raw text:", text);
        throw new Error("Failed to parse plant information");
      }
    } catch (error) {
      console.error("Error in processImage:", error);
      handleProcessingError();
    }
  };
  

  const handleProcessingError = () => {
    setPlantInfo({
      commonName: "Unknown",
      scientificName: "N/A",
      description: "Unable to extract plant information. Please try again.",
      origin: "N/A",
      sunlight: "N/A",
      water: "N/A",
      soil: "N/A",
      growthRate: "N/A"
    })
  }

return (
  <div className="w-full max-w-md mx-auto flex gap-7">
    <label
      htmlFor="upload-input"
      className="flex items-center justify-center w-full p-4 bg-white text-[#008a05] rounded-lg cursor-pointer hover:bg-green-100 transition-colors"
    >
      <FontAwesomeIcon icon={faUpload} className="mr-2" />
      {loading ? 'Processing image...' : 'Upload Image'}
    </label>
    <input
      id="upload-input"
      type="file"
      accept="image/*"
      onChange={handleImageInput}
      className="hidden"
    />

    <label
      htmlFor="capture-input"
      className="flex items-center justify-center w-full p-4 bg-white text-[#008a05] rounded-lg cursor-pointer hover:bg-green-100 transition-colors"
    >
      <FontAwesomeIcon icon={faCamera} className="mr-2" />
      {loading ? 'Processing image...' : 'Take Photo'}
    </label>
    <input
      id="capture-input"
      type="file"
      accept="image/*"
      capture="environment"
      onChange={handleImageInput}
      className="hidden"
    />
  </div>
)
}
