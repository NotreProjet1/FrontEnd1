import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import SearchComponent from './composant/SearchComponent';
import ImageGalleryPage from './composant/image';
import ListFormation from './composant/listeformation';
import './css/themecolor.css';
import login from './composant/login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import listeProfil from './composant/listeProfilPar';
import CertificatesTable from './composant/liste';
import Register from './composant/registre';
import VideoPage from './composant/vedio';
import publication from './composant/publication';
import UserProfile from './composant/participant/profil';

import HomeFinal from './composant/homefinal';
const App = () => {
  const [value, setValue] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            if (newValue === 1) {
              toggleSearch();
            }
          }}
          showLabels
        >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/HomeFinal" />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} component={Link} to="/search" />

          {/* Ajoutez l'icône Edupionner entre Recherche et Notifications */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '15px', fontWeight: 'bold', fontFamily: 'cursive' }}>EduPionner</span>
            <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} component={Link} to="/HomeFinal" />
          </div>

          {/* Ajoutez l'icône de profil avec une liste déroulante */}
          <BottomNavigationAction
            label="Profile"
            icon={<Avatar onClick={handleClick} />} 
          />
        </BottomNavigation>

        {/* Menu déroulant pour le profil */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/UserProfile"> Vers leur profil</MenuItem>
          <MenuItem component={Link} to="/Register">Créer Compte</MenuItem>
          <MenuItem component={Link} to="/CertificatesTable"> liste</MenuItem> 
          <MenuItem component={Link} to="/formation"> demande formation </MenuItem> 
          <MenuItem component={Link} to="/VideoPage">  VideoPage </MenuItem> 
          <MenuItem component={Link} to="/PublicationPage">  publication </MenuItem> 
          <MenuItem component={Link} to="/HomeFinal">  HomeFinal </MenuItem>  
          {/* Ajoutez d'autres liens ici si nécessaire */}
        </Menu>

        {showSearch && <SearchComponent />}
        <Switch>
          <Route exact path="/" component={ListFormation} />
          <Route path="/search" component={ListFormation} />
          <Route path="/notifications" component={ListFormation} />
          <Route path="/cart" component={ListFormation} />
         
          <Route path="/VideoPage" component={VideoPage} />
          
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/login" component={login} /> 
          <Route path="/listeProfil" component={listeProfil} /> 
          <Route path="/CertificatesTable" component={CertificatesTable} /> 
          <Route path="/Register" component={Register} />    
          <Route path="/publication  " component={publication} />   
          <Route path="/HomeFinal " component={HomeFinal} /> 
        </Switch>
      </div> 
    <HomeFinal/>
    <ImageGalleryPage/>
    </Router> 
  );
};

export default App;
