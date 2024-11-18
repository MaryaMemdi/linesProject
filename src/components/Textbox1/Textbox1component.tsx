import React from 'react';

const Textbox1component: React.FC = () => {
  return (
    <div className="container m-4 mx-auto flex flex-col justify-end items-center px-4 lg:px-0 w-full h-auto lg:flex-row lg:gap-32 lg:mt-12">
      <div className="rounded-lg p-8 min-w-screen">
    <div className="flex flex-col lg:flex-row md:flex-col" >
    <div className="lg:w-2/3 w-full">
    <span className="bg-purple-200 text-purple-600 px-2 py-1 rounded-full text-sm font-medium">Discover</span>
    <h1 className="text-3xl font-bold text-gray-900 mt-4">Unleash Your Imagination with Our Stories</h1>
    <p className="text-lg text-gray-700 mt-4">
      Experience a world of captivating stories and become part of a vibrant community of writers and readers. With our platform, you have access to a wide range of stories and the opportunity to share your own.
    </p>

    <div className="flex mt-8 space-x-8">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">Access</h3>
        <p className="text-sm text-gray-600">Explore a vast collection of stories from various genres and themes.</p>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
        <p className="text-sm text-gray-600">Engage with a supportive community of writers and readers who share your passion.</p>
      </div>
    </div>

    <div className="mt-8 space-x-4">
      <button className="px-6 py-3 border border-purple-600 bg-[#4c1595]font-semibold rounded-md hover:bg-purple-600 hover:text-white transition-colors">
        Learn More
      </button>
      <button className="px-6 py-3 text-purple-800 font-semibold rounded-md hover:text-purple-800 transition-colors">
        Sign Up →
      </button>
    </div>
  </div>
          {/* بخش تصویر */}
          <div className="lg:w-1/3 w-full flex justify-center items-center mb-8 lg:mb-0 md:mt-8">
            <div className="h-64 w-64 rounded-lg flex justify-center items-center bg-[#dfd8de]">
             
            </div>
          </div>


         
        </div>
      </div>
    </div>
  );
};

export default Textbox1component;
