import React from 'react';
import { Link } from 'react-router-dom';

const FormationCardSimple = ({ id_fp, title, price }) => {
  return (
    <div className="bg-blue-100 overflow-hidden shadow rounded-lg">
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">Price: {price}</p>
        <Link to={`/formation/${id_fp}`} className="mt-4 block text-center text-blue-500 hover:underline">Voir plus</Link>
      </div>
    </div>
  );
};

export default FormationCardSimple;