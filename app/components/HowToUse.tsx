import { FaUpload, FaLeaf, FaInfoCircle } from 'react-icons/fa'

export default function HowToUse() {
  return (
    <div className="mt-16 bg-[#d6ffe2] p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">How to Use PlantID</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-start">
          <FaUpload className="text-green-600 text-2xl mr-3 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Upload an Image</h3>
            <p>Take a clear photo of the plant you want to identify and upload it.</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaLeaf className="text-green-600 text-2xl mr-3 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Get Identification</h3>
            <p>Our AI will analyze the image and provide the plant&apos;s name and details.</p>
          </div>
        </div>
        <div className="flex items-start">
          <FaInfoCircle className="text-green-600 text-2xl mr-3 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Learn More</h3>
            <p>Discover care tips, origin, and interesting facts about the identified plant.</p>
          </div>
        </div>
      </div>
    </div>
  )
}