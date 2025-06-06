import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              ACE
            </Link>
            <div className="space-x-6">
              <Link href="/faculty" className="text-gray-600 hover:text-primary-600">
                Faculty
              </Link>
              <Link href="/team" className="text-gray-600 hover:text-primary-600">
                Team
              </Link>
              <Link href="/talks" className="text-gray-600 hover:text-primary-600">
                Talks
              </Link>
              <Link href="/courses" className="text-gray-600 hover:text-primary-600">
                Courses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: contact@ace.edu</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-primary-400">About Us</Link></li>
                <li><Link href="/events" className="hover:text-primary-400">Events</Link></li>
                <li><Link href="/resources" className="hover:text-primary-400">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-400">Twitter</a>
                <a href="#" className="hover:text-primary-400">LinkedIn</a>
                <a href="#" className="hover:text-primary-400">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Association of Civil Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 