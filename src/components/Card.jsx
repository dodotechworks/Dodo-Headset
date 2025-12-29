import React from 'react';

const Card = () => {
  return (
   <div className='flex flex-col md:flex-row px-10 pb-10 gap-4'>
    <div className=" w-60 overflow-hidden bg-white/10 border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md" />
      <div className="p-6 relative z-10">
        <p className="text-xl font-semibold text-white">Arjun</p>
        <p className="mt-2 text-white">
         The headphones feel premium and comfortable. The sound is clean and balanced — exactly what I expect from DODO.
        </p>
        <div className="flex items-center mt-4 text-gray-600">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="ml-2">4.8 (24 reviews)</span>
        </div>
      </div>
    </div>
    <div className="w-60 overflow-hidden bg-white/10 border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md" />
      <div className="p-6 relative z-10">
        <p className="text-xl font-semibold text-white">Neha</p>
        <p className="mt-2 text-white">
         “Perfect for long work hours.”
         I use them daily while working. Lightweight, good noise isolation, and the battery lasts forever.        </p>
        <div className="flex items-center mt-4 text-gray-600">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="ml-2">3.8 (14 reviews)</span>
        </div>
      </div>
    </div>
    <div className="w-60 overflow-hidden bg-white/10 border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md" />
      <div className="p-6 relative z-10">
        <p className="text-xl font-semibold text-white">Karan</p>
        <p className="mt-2 text-white">
         “Minimal look, powerful performance.”
         Love the design and smooth wireless connection. The red version really stands out.
        </p>
        <div className="flex items-center mt-4 text-gray-600">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="ml-2">3.8 (14 reviews)</span>
        </div>
      </div>
    </div>
    <div className="w-60 overflow-hidden bg-white/10 border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md" />
      <div className="p-6 relative z-10">
        <p className="text-xl font-semibold text-white">Rahul</p>
        <p className="mt-2 text-white">
         “No distractions, just sound.”
         Very comfortable and easy to use. Great for music, calls, and focus sessions.
        </p>
        <div className="flex items-center mt-4 text-gray-600">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="ml-2">3.8 (14 reviews)</span>
        </div>
      </div>
    </div>        
   </div>
  );
}

export default Card;
