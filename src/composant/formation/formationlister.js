import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormationCardSimple from './formationcardesimple';

const AffichFormation = () => {
  const [formation_ps, setFormation_ps] = useState([]);

  useEffect(() => {
    const fetchFormation_ps = async () => {
      try {
        const response = await fetch('http://localhost:3001/formationP/lister');
        const data = await response.json();
        setFormation_ps(data.liste);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations:', error);
      }
    };

    fetchFormation_ps();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Formations</h2>

            <div className="mt-6 space-y-12">
              {formation_ps.map((formation_p) => (
                <FormationCardSimple
                  key={formation_p.id_fp}
                  id={formation_p.id_fp}
                  title={formation_p.titre}
                  price={formation_p.prix}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default AffichFormation;
