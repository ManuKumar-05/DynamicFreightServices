import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6 text-center text-2xl">FastFreight Logistics</header>
      <section className="p-8">
        <h2 className="text-xl font-bold mb-4">Our Services</h2>
        <p>We offer freight forwarding, warehousing, and last-mile delivery solutions worldwide.</p>
        <div className="mt-6 space-x-4">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
          <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Signup</Link>
        </div>
      </section>
    </div>
  );
}