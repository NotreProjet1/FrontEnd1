import React, { useState } from 'react';
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/instructeur/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: formData.email,
          password: formData.password, // Ne pas hasher à nouveau ici
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);

        // Afficher une notification de succès
        toast.success('Login successful', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Gérer la suite après la connexion réussie
      } else {
        console.error('Login failed:', response.statusText);

        // Afficher une notification d'échec
        toast.error('Login failed', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Gérer l'échec de la connexion
      }
    } catch (error) { 
      console.error('Error during login:', error);
    }
};


  return (
    <MDBCard className='mx-auto mt-5' style={{ maxWidth: '28rem' }}>
      <MDBCardBody>
        <form onSubmit={handleSubmit}>
          <MDBInput
            name='email'
            className='mb-3'
            size='sm'
            type='email'
            id='form2Example1'
            label='Email address'
            value={formData.email}
            onChange={handleChange}
          />
          <MDBInput
            name='password'
            className='mb-3'
            size='sm'
            type='password'
            id='form2Example2'
            label='Password'
            value={formData.password}
            onChange={handleChange}
          />

          <MDBRow className='mb-3'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
            </MDBCol>
            <MDBCol>
              <a href='#!'>Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type='submit' className='mb-3' block>
            Sign in
          </MDBBtn>

          <div className='text-center'>
            <p>
              Not a member? <a href='#!'>Register</a>
            </p>
            <p>or sign up with:</p>

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
        <ToastContainer />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Login;
