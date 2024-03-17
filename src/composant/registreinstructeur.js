// Register.js
import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  const [step, setStep] = useState(1);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [mots_de_passe, setPassword] = useState('');


  const handleNextStep = async () => {
    // Logique de validation pour chaque étape avant de passer à l'étape suivante
    switch (step) {
      case 1:
        if (!nom || !prenom || !email) {
          // Affichez une alerte ou un message d'erreur
          return;
        }
        break;
      case 2:
        if (!tel || !specialite || !mots_de_passe) {
          // Affichez une alerte ou un message d'erreur
          return;
        }
        if (!mots_de_passe) {
            // Affichez une alerte ou un message d'erreur pour informer l'utilisateur
            console.error('Le mot de passe est requis.');
            return;
          }
        break;
      default:
        break;
    }

    // Envoi de la demande d'inscription au backend
    const response = await fetch('http://localhost:3001/instructeur/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom,
        prenom,
        email,
        tel,
        mots_de_passe,
        specialite,
      
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Inscription réussie:', result);
      // Gérer l'inscription réussie, peut-être rediriger vers la page de connexion
    } else {
      console.error('Échec de l inscription:', response.statusText);
      // Gérer l'échec de l'inscription
    }

    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log('Formulaire soumis avec succès!');
  };

  return (
    <MDBCard className='mx-auto mt-5' style={{ maxWidth: '28rem' }}>
      <MDBCardBody>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <MDBRow className='mb-3'>
                <MDBCol size='6'>
                  <MDBInput
                    size='sm'
                    type='text'
                    id='nom'
                    label='Nom'
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                  />
                </MDBCol>
                <MDBCol size='6'>
                  <MDBInput
                    size='sm'
                    type='text'
                    id='prenom'
                    label='Prénom'
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                className='mb-3'
                size='sm'
                type='email'
                id='email'
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </>
          )}

          {step === 2 && (
            <>
           <MDBInput
  className='mb-3'
  size='sm'
  type='text'  // Changé de 'tel' à 'text'
  id='text'
  label='Téléphone'
  value={tel}
  onChange={(e) => setTel(e.target.value)}
  required
/>

              <MDBRow className='mb-3'>
                <MDBCol>
                  <label className='form-label'>Spécialité</label>
                  <select
                    className='form-select mb-3'
                    value={specialite}
                    onChange={(e) => setSpecialite(e.target.value)}
                    required
                  >
                    <option value='' disabled>Choisissez votre spécialité</option>
                    <option value='developer'>Développeur</option>
                    <option value='designer'>Designer</option>
                    <option value='manager'>Manager</option>
                  </select>
                </MDBCol>
              </MDBRow>

              <MDBInput
  className='mb-3'
  size='sm'
  type='password' // Utilisation correcte du type 'password'
  id='mots_de_passe'
  label='Mot de passe'
  value={mots_de_passe}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
            </>
          )}

          <MDBBtn type='button' onClick={handleNextStep} className='mb-3' block>
            {step === 1 ? 'Suivant' : 'Inscription'}
          </MDBBtn>

          <div className='text-center'>
            {step === 1 && (
              <p>
                Déjà membre? <a href='#!'>Se connecter</a>
              </p>
            )}

            <p>ou inscrivez-vous avec:</p>

            <MDBBtn floating color='secondary' className='mx-1'>
              <FontAwesomeIcon icon={faFacebookF} />
            </MDBBtn>

            <MDBBtn floating color='secondary' className='mx-1'>
              <FontAwesomeIcon icon={faGoogle} />
            </MDBBtn>

            <MDBBtn floating color='secondary' className='mx-1'>
              <FontAwesomeIcon icon={faTwitter} />
            </MDBBtn>

            <MDBBtn floating color='secondary' className='mx-1'>
              <FontAwesomeIcon icon={faGithub} />
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Register;