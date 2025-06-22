import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          This is a modern multi-page website built with React Vite and React Router.
                          It demonstrates routing between pages like Home, About, Contact, and GitHub using dynamic React routes. 
                      </p>
                      <p className="mt-4 text-gray-600">
                          It also fetches live GitHub data (repositories), uses Tailwind for styling, and applies reusable components to maintain clean code. Perfect for beginners learning React routing and API integration!
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}