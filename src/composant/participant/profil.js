// // profile.js

// import React from 'react';
// import '../../css/profilp.css';

// const UserProfile = () => {
//   return (
//     <div className="profile-wrapper">
//       <div className="sidebar">
//         <h3>Formations</h3>
//         <ul>
//           <li>Formation 1</li>
//           <li>Formation 2</li>
//           {/* Ajoutez d'autres éléments de formation ici */}
//         </ul>

//         <div className="social-media">
//           <h3>Réseaux sociaux</h3>
//           <ul>
//             <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
//             <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
//             <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="main-content">
//         <div className="user-info">
//           <img src="https://i.imgur.com/cMy8V5j.png" alt="user" />
//           <h4>Alex William</h4>
//           <p>UI Developer</p>
//         </div>

//         <div className="student-info">
//           <h3>Informations étudiant</h3>
//           <form>
//             <label htmlFor="nom">Nom:</label>
//             <input type="text" id="nom" name="nom" />

//             <label htmlFor="prenom">Prénom:</label>
//             <input type="text" id="prenom" name="prenom" />

//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" />

//             <label htmlFor="formation">Formation:</label>
//             <input type="text" id="formation" name="formation" />

//             <button type="submit">Enregistrer</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
// profile.js

import React, { useState } from 'react';
import '../../css/profilp.css'; 
import UserProfileModal from './model';

const UserProfile = () => {
  // Exemple de données utilisateur (à remplacer par les données réelles)
  const userData = {
    nom: 'Ahlem',
    prenom: 'Briki',
    domaine: 'UI Development',
    categorie: 'Développeur',
    email: 'ahlembriki4@gmail.com',
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="profile-wrapper">
      <div className="sidebar">
        <h3>Formations</h3>
        <ul>
          <li>Formation 1</li>
          <li>Formation 2</li>
          {/* Ajoutez d'autres éléments de formation ici */}
        </ul>

        <div className="social-media">
          <h3>Réseaux sociaux</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>

        <button className='btnm' onClick={handleEditClick}>Modifier</button>
      </div>

      <div className="main-content">
        <div className="user-info">
          <img src="https://i.imgur.com/cMy8V5j.png" alt="user" />
          <h4>{userData.prenom} {userData.nom}</h4>
          
        </div>

        <div className="student-info"> 
          <h3>Informations</h3>
          <p><strong>Domaine:</strong> {userData.domaine}</p>
          <p><strong>Categorie:</strong>{userData.categorie}</p>
          <p><strong>Email:</strong>{userData.email}</p>
        </div>
      </div> 

      {/* Modal pour la modification du profil */}
      {isModalOpen && <UserProfileModal onClose={() => setModalOpen(false)} userData={userData} />}
    </div>
  );
};

export default UserProfile;