import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-85 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <Link href="/" className="text-4xl font-bold tracking-widest">PlantID</Link>
      </div>
    </nav>
  )
}