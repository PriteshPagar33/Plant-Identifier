import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-85 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <Image 
          src="/path-to-your-image/logo.png" 
          alt="Logo" 
          width={40} 
          height={40} 
          className="mr-2"
        />
        <Link href="/" className="text-4xl font-bold tracking-widest">PlantID</Link>
      </div>
    </nav>
  );
}
