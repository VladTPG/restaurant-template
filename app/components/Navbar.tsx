import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Restaurant Name
          </Link>

          <div className="hidden sm:flex space-x-8">
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
              Home
            </Link>
            <Link href="/menu" className="hover:text-gray-600 dark:hover:text-gray-300">
              Menu
            </Link>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}