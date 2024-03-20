import React, { useState ,useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Input } from '@mui/material';
import axios from 'axios'; // Importez axios ici
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/addformation.css';

const AddFormationForm = () => {
  const [formationData, setFormationData] = useState({
    titre: '',
    description: '',
    domaine: '',
    prix: '',
    certeficat: '',
    niveaux: '',
    plantFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormationData((prevData) => ({
      ...prevData,
      plantFile: file,
    }));
  };

// Frontend: JavaScript/jQuery
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const formData = new FormData();
      formData.append('titre', formationData.titre);
      formData.append('description', formationData.description);
      formData.append('domaine', formationData.domaine);
      formData.append('prix', formationData.prix);
      formData.append('certeficat', formationData.certeficat);
      formData.append('niveaux', formationData.niveaux);
      formData.append('plantFile', formationData.plantFile);
    
      const token = localStorage.getItem('token');

      // Vérifiez si le token est disponible
      if (!token) {
          return toast.error('Vous devez être connecté pour créer une formation.', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
      }

      // Ajoutez le token dans l'en-tête de la requête
      const response = await fetch('http://localhost:3001/formationP/ajouter', {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`
          },
          body: formData
      });

      const responseData = await response.json();

      if (response.status === 201) {
          console.log('Formation créée avec succès:', responseData);

          // Afficher une notification de succès
          toast.success('Formation créée avec succès', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });

          // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
      } else {
          console.error('Erreur lors de la création de la formation:', responseData.message);

          // Afficher une notification d'erreur
          toast.error('Erreur lors de la création de la formation', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });

          // Gérer l'erreur de création de la formation
      }
  } catch (error) {
      console.error('Error during formation creation:', error);

      // Gérer les erreurs ici
  }
};


  return (
    <div className="add-formation-container">
      <div className="sidebar">
        <h3 className="header">Ajouter les cours correspondants</h3>
        <Button variant="outlined" color="primary" fullWidth className="sidebar-button">
          Cours 1
        </Button>
      </div>
      <div className="main-content">
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined" required className="form-control">
            <InputLabel id="domaine-label">Domaine</InputLabel>
            <Select
              labelId="domaine-label"
              label="Domaine"
              name="domaine"
              value={formationData.domaine}
              onChange={handleChange}
            >
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" required className="form-control">
            <InputLabel id="niveaux-label">Niveaux</InputLabel>
            <Select
              labelId="niveaux-label"
              label="Niveaux"
              name="niveaux"
              value={formationData.niveaux}
              onChange={handleChange}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Titre"
            variant="outlined"
            fullWidth
            name="titre"
            value={formationData.titre}
            onChange={handleChange}
            required
            className="form-control"
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={formationData.description}
            onChange={handleChange}
            required
            className="form-control"
          />

          <TextField
            label="Prix"
            variant="outlined"
            fullWidth
            name="prix"
            value={formationData.prix}
            onChange={handleChange}
            className="form-control"
          />
          <TextField
            label="Certificat"
            variant="outlined"
            fullWidth
            name="certeficat"
            value={formationData.certeficat}
            onChange={handleChange}
            required
            className="form-control"
          />

          <InputLabel htmlFor="plantFileInput" className="form-label">Fichier Plant</InputLabel>
          <Input
            id="plantFileInput"
            name="plantFile"
            type="file"
            accept=".pdf, .doc, .docx, .ppt, .pptx"
            onChange={handleFileChange}
            required
            className="file-input"
          />

          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Ajouter Formation
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddFormationForm;

// {/* <form onSubmit={handleSubmit}>
// <FormControl fullWidth variant="outlined" required className="form-control">
//   <InputLabel id="domaine-label">Domaine</InputLabel>
//   <Select
//     labelId="domaine-label"
//     label="Domaine"
//     name="domaine"
//     value={formationData.domaine}
//     onChange={handleChange}
//   >
//     <MenuItem value="Technology">Technology</MenuItem>
//     <MenuItem value="Business">Business</MenuItem>
//     <MenuItem value="Healthcare">Healthcare</MenuItem>
//   </Select>
// </FormControl>

// <FormControl fullWidth variant="outlined" required className="form-control">
//   <InputLabel id="niveaux-label">Niveaux</InputLabel>
//   <Select
//     labelId="niveaux-label"
//     label="Niveaux"
//     name="niveaux"
//     value={formationData.niveaux}
//     onChange={handleChange}
//   >
//     <MenuItem value="Beginner">Beginner</MenuItem>
//     <MenuItem value="Intermediate">Intermediate</MenuItem>
//     <MenuItem value="Professional">Professional</MenuItem>
//   </Select>
// </FormControl>

// <TextField
//   label="Titre"
//   variant="outlined"
//   fullWidth
//   name="titre"
//   value={formationData.titre}
//   onChange={handleChange}
//   required
//   className="form-control"
// />
// <TextField
//   label="Description"
//   variant="outlined"
//   fullWidth
//   name="description"
//   value={formationData.description}
//   onChange={handleChange}
//   required
//   className="form-control"
// />

// <TextField
//   label="Prix"
//   variant="outlined"
//   fullWidth
//   name="prix"
//   value={formationData.prix}
//   onChange={handleChange}
//   className="form-control"
// />
// <TextField
//   label="Certificat"
//   variant="outlined"
//   fullWidth
//   name="certeficat"
//   value={formationData.certeficat}
//   onChange={handleChange}
//   required
//   className="form-control"
// />

// <InputLabel htmlFor="plantFileInput" className="form-label">Fichier Plant</InputLabel>
// <Input
//   id="plantFileInput"
//   name="plantFile"
//   type="file"
//   accept=".pdf, .doc, .docx, .ppt, .pptx"
//   onChange={handleFileChange}
//   required
//   className="file-input"
// />

// <Button type="submit" variant="contained" color="primary" className="submit-button">
//   Ajouter Formation
// </Button>
// </form> */}