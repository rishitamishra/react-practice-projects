import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2 text-gray-900">your <span className="text-orange-600">logo</span><sup>®</sup></h3>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">RESOURCES</h4>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">FOLLOW US</h4>
          <ul>
            <li><a href="https://github.com/rishitamishra" className="hover:underline">GitHub</a></li>
            <li><a href="https://discord.com" className="hover:underline">Discord</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">LEGAL</h4>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        © 2025 <span className="font-semibold">rishitamishra</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;