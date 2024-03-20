import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormationsList = () => {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/formationP/lister');
        setFormations(response.data.liste);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations :', error);
      }
    };

    fetchFormations();
  }, []);

  const baseFilePath = 'C:/Users/jasse/OneDrive/Bureau/Pfe/ProjetBackend/upload/';

  return (
    <div>
      <h1>Liste des formations payantes :</h1>
      <ul>
        {formations.map((formation) => (
          <li key={formation.id_fp}>
            <h2>{formation.titre}</h2>
            <p>Domaine : {formation.domaine}</p>
            <p>Niveau : {formation.niveaux}</p>
            <p>Description : {formation.description}</p>
            <p>Prix : {formation.prix}</p>
            {formation.plant && (
              <p>
                Fichier :{" "}
                <a
                  href={`${baseFilePath}${formation.plant}`}
                  download={formation.plant.split('/').pop()} // Utilisation de split pour extraire le nom de fichier
                >
                  Télécharger le fichier
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormationsList;
