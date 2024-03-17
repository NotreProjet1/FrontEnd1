import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FormationDetailsPage = () => {
  const [formation, setFormation] = useState(null);
  const { id_fp } = useParams(); // Utilisation de useParams pour récupérer l'ID de la formation depuis les paramètres d'URL

  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const response = await fetch(`http://localhost:3001/formationP/${id_fp}`);
        const data = await response.json();
        setFormation(data); // Assurez-vous que votre API renvoie les données de formation correctement
      } catch (error) {
        console.error('Erreur lors de la récupération de la formation:', error);
      }
    };

    fetchFormation();
  }, [id_fp]); // Ajout de id dans les dépendances de useEffect

  if (!formation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">{formation.title}</h2>
          <p className="mt-2 text-base text-gray-500">Price: {formation.price}</p>
          <p className="mt-2 text-base text-gray-500">Description: {formation.description}</p>
          <p className="mt-2 text-base text-gray-500">Content: {formation.content}</p>
          {/* Ajoutez d'autres détails de formation ici */}
        </div>
      </div>
    </div>
  );
};

export default FormationDetailsPage;
