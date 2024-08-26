export default function Footer() {
    return (
      <footer className="bg-black bg-opacity-85 text-white p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[20rem] sm:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">About PlantID</h3>
            <p>PlantID is your go-to resource for identifying and learning about plants. Our AI-powered tool helps nature enthusiasts discover the world of flora.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: virajnalbalwar@gmail.com</p>
            <p>Phone: +91-9763345872</p>
            <p>Address: D-103, Arya Greens, Lonere</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 PlantID. All rights reserved.</p>
        </div>
      </footer>
    )
  }