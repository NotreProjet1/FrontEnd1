import React, { useState, useEffect } from 'react';
import FormationCardSimple from './formationcardesimple';

const AffichCours = () => {
  const [cours, setCours] = useState([]);

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const response = await fetch('http://localhost:3000/cours/lister');
        const data = await response.json();
        setCours(data.liste);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations:', error);
      }
    };

    fetchCours();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Cours</h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {cours.map((cour) => (
                <div 
                  key={cour.id} 
                  className="bg-white shadow overflow-hidden sm:rounded-lg transition-transform duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#136c34' }} // Couleur de fond personnalisée
                >
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{cour.titre}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{cour.description}</p>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{cour.contenu}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffichCours;
