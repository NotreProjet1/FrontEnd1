// ParticipantRegister.js


import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

const ParticipantRegister = () => {
    const [step, setStep] = useState(1);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [domaine, setDomaine] = useState('');
    const [categorie, setCategorie] = useState('');
    const [emailP, setEmail] = useState('');
    const [mots_de_passeP, setPassword] = useState('');
    const [tel, setTel] = useState('');

    const handleNextStep = async () => {
        // Logique de validation pour chaque étape avant de passer à l'étape suivante
        switch (step) {
            case 1:
                if (!nom || !prenom || !emailP) {
                    // Affichez une alerte ou un message d'erreur
                    return;
                }
                break;
            case 2:
                if (!tel || !mots_de_passeP) {
                    // Affichez une alerte ou un message d'erreur
                    return;
                }
                if (!mots_de_passeP) {
                    // Affichez une alerte ou un message d'erreur pour informer l'utilisateur
                    console.error('Le mot de passe est requis.');
                    return;
                }
                break;
            default:
                break;
        }

        // Envoi de la demande d'inscription au backend
        const response = await fetch('http://localhost:3001/participant/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom,
                prenom,
                emailP,
                domaine,
                categorie,
                mots_de_passeP,
                tel,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Inscription réussie:', result);
            toast.success('Inscription réussie!'); // Notification de succès
        } else {
            console.error('Échec de l inscription:', response.statusText);
            toast.error('Échec de l\'inscription. Veuillez réessayer.'); // Notification d'erreur
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

                            <MDBRow className='mb-3'>
                                <MDBCol>
                                    <label className='form-label'>Domaine</label>
                                    <select
                                        className='form-select mb-3'
                                        value={domaine}
                                        onChange={(e) => setDomaine(e.target.value)}
                                        required
                                    >
                                        <option value='' disabled>Choisissez votre domaine</option>
                                        <option value='ecommerce'>E-commerce</option>
                                        <option value='Développeur'>Développeur</option>
                                    </select>
                                </MDBCol>
                                <MDBCol>
                                    <label className='form-label'>Catégorie</label>
                                    <select
                                        className='form-select mb-3'
                                        value={categorie}
                                        onChange={(e) => setCategorie(e.target.value)}
                                        required
                                    >
                                        <option value='' disabled>Choisissez votre catégorie</option>
                                        <option value='professionnelle'>Professionnelle</option>
                                        <option value='debuitant'>Débutant</option>
                                    </select>
                                </MDBCol>
                            </MDBRow>

                            <MDBInput
                                className='mb-3'
                                size='sm'
                                type='tel'
                                id='tel'
                                label='Téléphone'
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                required
                            />

                            <MDBInput
                                className='mb-3'
                                size='sm'
                                type='email'
                                id='emailP'
                                label='Email'
                                value={emailP}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <MDBInput
                                className='mb-3'
                                size='sm'
                                type='password'
                                id='mots_de_passeP'
                                label='Mot de passe'
                                value={mots_de_passeP}
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
            <ToastContainer />

        </MDBCard>
        
    );
};

export default ParticipantRegister;
