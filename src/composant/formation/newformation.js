import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Input } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../css/addformation.css';

const AddFormationForm = () => {
  const [formationData, setFormationData] = useState({
    titre: '',
    description: '',
    domaine: '',
    plant: '',
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormationData((prevData) => ({
      ...prevData,
      plantFile: file,
    }));
  };

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
  
      if (formationData.plantFile) {
        formData.append('plantFile', formationData.plantFile);
      } else {
        return toast.error('Veuillez sélectionner un fichier.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      const response = await axios.post('http://localhost:3001/formationP/ajouter', formData);
  
      console.log(response.data);
      toast.success('Formation créée avec succès', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la formation :', error.response.data);
      toast.error('Échec de la création de la formation', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="add-formation-container">
      {/* Side Bar */}
      <div className="sidebar">
        <h3 className="header">Ajouter les cours correspondants</h3>
        <Button variant="outlined" color="primary" fullWidth className="sidebar-button">
          Cours 1
        </Button>
      </div>

      {/* Main Content */}
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
    </div>
  );
};

export default AddFormationForm;
