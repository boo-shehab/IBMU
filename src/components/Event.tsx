import React from 'react';
import { IoLocation } from "react-icons/io5";

const Event = ({ event }) => {
  return (
    <div className="overflow-hidden">
      <img src={event.image} alt={event.title} className="w-11/12 h-72 object-cover mx-auto" />
      <div className="p-6">
        <div className="flex justify-between align-center">
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <a href={event.location} target='_blank' className='text-yellow-400 text-2xl'><IoLocation /></a>
        </div>
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

export default Event;
