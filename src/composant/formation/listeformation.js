import React, { useState, useEffect } from 'react';

const FormationCard = ({ title, description, content, id }) => {
  const [expanded, setExpanded] = useState(false);
  const [instructorName, setInstructorName] = useState("");

  useEffect(() => {
    const fetchInstructorName = async () => {
      try {
        const response = await fetch(`http://localhost:3001/instructeur/${id}`); // Remplacez avec votre endpoint pour récupérer le nom de l'instructeur
        const data = await response.json();
        setInstructorName(data.nom); // Assurez-vous que votre API renvoie le nom de l'instructeur
      } catch (error) {
        console.error('Erreur lors de la récupération du nom de l\'instructeur:', error);
      }
    };

    fetchInstructorName();
  }, [id]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="group relative bg-blue-100 overflow-hidden shadow rounded-lg">
      {/* Avatar dans un cercle */}
      <div className="p-4 flex items-center space-x-4">
        {/* ... */}
      </div>

      {/* Titre, Description et Contenu (conditionnellement affichés) */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">
          <a href="#" className="group-hover:underline" onClick={toggleExpand}>
            {title}
          </a>
        </h3>
        {expanded && (
          <>
            <p className="mt-2 text-sm text-gray-500">
              {description}
            </p>
            <p className="mt-2 text-base text-gray-500">
              {content}
            </p>
            <p className="mt-2 text-base text-gray-500">
              Instructeur: {instructorName}
            </p>
            {/* Boutons Accepter et Refuser */}
            <div className="flex mt-4 space-x-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">Accepter</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">Refuser</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ListFormation = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('http://localhost:3001/publication/lister');
        const data = await response.json();
        setPublications(data.liste); // Assurez-vous que votre API renvoie les données correctement
      } catch (error) {
        console.error('Erreur lors de la récupération des publications:', error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Formations</h2>

            {/* Grille modifiée pour afficher 4 cartes par ligne */}
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {publications.map((publication) => (
                <FormationCard
                  key={publication.id}
                  title={publication.titre}
                  description={publication.description}
                  content={publication.contenu}
                  instructorId={publication.id_instructeur}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListFormation;