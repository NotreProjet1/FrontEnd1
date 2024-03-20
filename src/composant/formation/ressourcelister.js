import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListeRessources = () => {
  const [ressources, setRessources] = useState([]);

  useEffect(() => {
    const fetchRessources = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Resource/lister');
        setRessources(response.data.liste);
      } catch (error) {
        console.error('Erreur lors de la récupération des ressources:', error);
      }
    };

    fetchRessources();
  }, []);

  const downloadFile = (plantFile) => {
    const fileUrl = `REACT_APP_PATHFILE${plantFile}`;
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="liste-ressources-container">
      <h2>Liste des ressources</h2>
      {ressources.map((ressource_pedagogique) => (
        <div key={ressource_pedagogique.id}>
          <h3>{ressource_pedagogique.titre}</h3>
          <p>{ressource_pedagogique.description}</p>
          {ressource_pedagogique.plantFile && (
            <div>
              <p>Nom du fichier: {ressource_pedagogique.plantFile.name}</p>
              <button onClick={() => downloadFile(ressource_pedagogique.plantFile.name)}>
                Télécharger le fichier
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListeRessources;
