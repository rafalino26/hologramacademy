import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[linear-gradient(to_right,_#00f1ff,_#004dff,_#00f1ff)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          HologramAcademy
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
          <Link href="#about" className="text-gray-700 hover:text-purple-600 transition">About</Link>
          <Link href="#courses" className="text-gray-700 hover:text-purple-600 transition">Courses</Link>
          <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
