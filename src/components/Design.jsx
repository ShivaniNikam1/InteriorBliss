// Design.js
import React from 'react';
import { Link } from 'react-router-dom';

const Design = () => {
  const designs = [
    {
      id: 1,
      image: 'url_to_your_image1.jpg',
      description: 'Short description 1',
    },
    {
      id: 2,
      image: 'url_to_your_image2.jpg',
      description: 'Short description 2',
    },
    {
      id: 3,
      image: 'url_to_your_image3.jpg',
      description: 'Short description 3',
    },
  ];

  return (
    <div className="flex justify-center my-4">
      {designs.map((design) => (
        <div
          key={design.id}
          className="flex flex-col items-center bg-blue-800 text-white p-4 cursor-pointer transition duration-300 hover:bg-blue-600"
        >
          <img
            src={design.image}
            alt={`Design ${design.id}`}
            className="w-full h-32 object-cover mb-4"
          />
          <p className="text-center">{design.description}</p>
          <Link to={`/design/${design.id}`} className="mt-4">
            <div className="bg-white text-blue-800 rounded-full p-2">+</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Design;
