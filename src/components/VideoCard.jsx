import React from 'react';

export default function VideoCard({ video }) {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[400px] transition-all'>
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={video.thumbnail}
          alt='video cover'
          className='h-[260px] w-full object-contain group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </a>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{video.title}</p>
        <a
          href={video.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-3xl m-2'
        >
          Watch Video
        </a>
      </div>
    </div>
  );
}
