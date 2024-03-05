import React, { useState } from 'react';

const FormationCard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="group relative bg-blue-100 overflow-hidden shadow rounded-lg">
      {/* Avatar dans un cercle */}
      <div className="p-4 flex items-center space-x-4">
        <div className="h-12 w-12 bg-blue-500 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="../images/profil."
            alt="Avatar"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900">Briki Ahlem</p>
      
        </div>
      </div>

      {/* Titre, Description et Contenu (conditionnellement affichés) */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">
          <a href="#" className="group-hover:underline" onClick={toggleExpand}>
            Voir la demande
          </a>
        </h3>
        {expanded && (
          <>
            <p className="mt-2 text-sm text-gray-500">
              Titre.
            </p>
            <p className="mt-2 text-base text-gray-500">
              Description courte de la formation.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Contenu détaillé de la formation.
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
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Formations</h2>

            {/* Grille modifiée pour afficher 4 cartes par ligne */}
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/* Répétez cette carte 4 fois pour la première ligne */}
              <FormationCard />
              <FormationCard />
              <FormationCard />
              <FormationCard />
            </div>

            {/* Ajoutez deux autres lignes avec chacune 4 cartes */}
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/* Répétez cette carte 4 fois pour la deuxième ligne */}
              <FormationCard />
              <FormationCard />
              <FormationCard />
              <FormationCard />
            </div>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {/* Répétez cette carte 4 fois pour la troisième ligne */}
              <FormationCard />
              <FormationCard />
              <FormationCard />
              <FormationCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListFormation;
