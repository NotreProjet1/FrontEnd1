import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Divider,
  Box,
  Button,
  Collapse,
  Typography as MuiTypography,
} from '@mui/material';
// import { Inter } from '@fontsource/inter';
// import { Roboto } from '@fontsource/roboto';
import { motion } from 'framer-motion'; // Optional for animations (not used in this version)

const Formation = () => {
  const [leconActive, setLeconActive] = useState(1);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const leçons = [
    {
      id: 1,
      titre: 'Introduction à ReactJS',
      contenu: `
        * Qu'est-ce que ReactJS ?
        * Avantages de ReactJS
        * Installation et configuration
        * Création d'un premier composant
      `,
    },
    {
      id: 2,
      titre: 'Les composants ReactJS',
      contenu: `
        * Composants fonctionnels et classes
        * Props et state
        * Cycle de vie des composants
        * Communication entre composants
      `,
    },
    // ... autres leçons
  ];

  const handleChangeLecon = (id) => {
    setLeconActive(id);
    setIsContentOpen(false); // Reset content visibility on lesson change
  };

  const handleContentToggle = () => {
    setIsContentOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      {/* <Inter /> */}
      {/* <Roboto /> Import fonts for improved typography */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Formation ReactJS</Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List>
            {leçons.map((leçon, i) => (
              <ListItem
                key={leçon.id}
                button
                // selected={leçonActive === leçon.id}
                onClick={() => handleChangeLecon(leçon.id)}
              >
                <ListItemText primary={leçon.titre} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={9}>
          <Paper>
            {/* <Typography variant="h5">{leçons[leconActive - 1].titre}</Typography> */}
            <Divider />
            {/* <div dangerouslySetInnerHTML={{ __html: leçons[leconActive - 1].contenu }} /> */}

            <Button variant="outlined" onClick={handleContentToggle}>
              {isContentOpen ? 'Masquer le contenu' : 'Afficher le contenu'}
            </Button>
            <Collapse in={isContentOpen}>
              <Box sx={{ mt: 2 }}>
                {/* Add your content for the expanded section here */}
                <MuiTypography variant="body1">
                  {/* Replace this with detailed lesson content */}
                  Développer le contenu détaillé de la leçon ici.
                </MuiTypography>
              </Box>
            </Collapse>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Link to="/autres-formations">
          <Button variant="outlined">Voir d'autres formations</Button>
        </Link>
      </Box>
    </div>
  );
};

export default Formation;
