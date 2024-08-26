'use client'

import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import PlantInfo from './components/PlantInfo'
import Header from './components/Header'
import HowToUse from './components/HowToUse'
import Image from 'next/image';

export default function Home() {
  const [plantInfo, setPlantInfo] = useState(null)
  const [uploadedImage, setUploadedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex flex-col items-center p-4 moving-gradient">
      <Header />
      <main className="max-w-5xl w-full p-8 mb-12">
        <ImageUpload setPlantInfo={setPlantInfo} setUploadedImage={setUploadedImage} />
        <HowToUse />
        {uploadedImage && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black mb-4">Uploaded Image</h2>
            <Image
              src={uploadedImage}
              alt="Uploaded plant"
              layout="responsive"  // Or 'intrinsic', 'fixed', or 'fill' depending on your use case
              width={500}          // Replace with the actual width of your image
              height={300}         // Replace with the actual height of your image
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />

          </div>
        )}
        {plantInfo && <PlantInfo info={plantInfo} />}
      </main>
    </div>
  )
}