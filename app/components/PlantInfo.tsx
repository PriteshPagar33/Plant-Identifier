import { FaLeaf, FaSun, FaTint, FaSeedling, FaGlobeAmericas, FaFlask } from 'react-icons/fa'

export default function PlantInfo({ info }) {
  const infoCards = [
    { icon: FaLeaf, title: "Common Name", value: info.commonName },
    { icon: FaFlask, title: "Scientific Name", value: info.scientificName },
    { icon: FaSun, title: "Sunlight", value: info.sunlight },
    { icon: FaTint, title: "Water Needs", value: info.water },
    { icon: FaSeedling, title: "Growth Rate", value: info.growthRate },
    { icon: FaGlobeAmericas, title: "Origin", value: info.origin },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-black mb-4">Plant Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {infoCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <card.icon className="text-green-600 text-xl mr-2" />
              <h3 className="font-semibold">{card.title}</h3>
            </div>
            <p>{card.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold text-lg mb-2">Description</h3>
        <p>{info.description}</p>
      </div>
    </div>
  )
}