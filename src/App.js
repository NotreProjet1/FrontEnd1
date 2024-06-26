import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListIcon from '@mui/icons-material/List';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dropdown from 'react-bootstrap/Dropdown'

import SearchComponent from './composant/SearchComponent';
import ListFormation from './composant/formation/listeformation';
import './css/themecolor.css';
import login from './composant/login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import listeProfil from './composant/listeProfilPar';
import CertificatesTable from './composant/liste';
import FormationsList from './composant/formation/formationlister';
import VideoPage from './composant/vedio';
import publication from './composant/publication';

import FormationPage from './composant/formation/formation';
import HomeFinal from './composant/homefinal';
import AddFormationForm from './composant/formation/newformation';
import ParticipantRegister from './composant/participant/registreparticipant';
import Register from './composant/registreinstructeur';
import AddCours from './composant/formation/addCours';
import AffichCours from './composant/formation/courslister';
import AddRessources from './composant/formation/addRessource';
import AffichRessource from './composant/formation/ressourcelister';
import UserProfile from './composant/UserProfile/UserProfile';
import ModifierInstructeur from './composant/modifierInstructeur';
import ChangePassword from './composant/UserProfile/ChangePassword';
import AccountSettings from './composant/UserProfile/AccountSettings';

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
          <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Fresh Vegetables</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Fresh Fruits</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">House Cleaning</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

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
         <MenuItem component={Link} to="/ModifierInstructeur"> ModifierInstructeur</MenuItem>  
         <MenuItem component={Link} to="/AccountSettings"> AccountSettings</MenuItem>  
         <MenuItem component={Link} to="/UserProfile"> UserProfile</MenuItem> 
           <MenuItem component={Link} to="/AffichRessource"> AffichRessource</MenuItem> 
         <MenuItem component={Link} to="/AddRessources"> AddRessources</MenuItem> 
          <MenuItem component={Link} to="/AffichCours"> AffichCours</MenuItem>
          
          <MenuItem component={Link} to="/AddCours"> AddCours</MenuItem> 
          <MenuItem component={Link} to="/UserProfile"> Vers leur profil</MenuItem>
          <MenuItem component={Link} to="/CertificatesTable"> liste</MenuItem> 
          <MenuItem component={Link} to="/formation"> demande formation </MenuItem> 
          <MenuItem component={Link} to="/FormationPage">  formation </MenuItem> 

          <MenuItem component={Link} to="/VideoPage">  VideoPage </MenuItem> 
          <MenuItem component={Link} to="/PublicationPage">  publication </MenuItem> 
          <MenuItem component={Link} to="/HomeFinal">  HomeFinal </MenuItem> 
          <MenuItem component={Link} to="/login">  login </MenuItem>  
 
          <MenuItem component={Link} to="/newformation">  AddFormation </MenuItem>  
          <MenuItem component={Link} to="/Register">Registre instructeur</MenuItem>

          <MenuItem component={Link} to="/ParticipantRegister">  Participant Register </MenuItem>  
          <MenuItem component={Link} to="/FormationsList">AffichFormation</MenuItem>


          {/* Ajoutez d'autres liens ici si nécessaire */}
        </Menu>

        {showSearch && <SearchComponent />}
        <Switch>
          <Route exact path="/" component={ListFormation} />
          <Route path="/search" component={ListFormation} />
          <Route path="/notifications" component={ListFormation} />
          <Route path="/cart" component={ListFormation} />
         
          <Route path="/VideoPage" component={VideoPage} />
          <Route path="/Formationp" component={FormationPage} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/listeProfil" component={listeProfil} /> 
          <Route path="/CertificatesTable" component={CertificatesTable} /> 
          <Route path="/Register" component={Register} />    
          <Route path="/publication  " component={publication} />   
          <Route path="/HomeFinal" component={HomeFinal} />
          <Route path="/login" component={login} /> 

          <Route path="/FormationsList" component={FormationsList} />

          <Route path="/newformation" component={AddFormationForm} />
          <Route path="/ParticipantRegister" component={ParticipantRegister} /> 
          <Route path="/AddCours" component={AddCours} /> 
          <Route path="/AffichCours" component={AffichCours} /> 
          <Route path="/AddRessources" component={AddRessources} /> 
          <Route path="/AffichRessource" component={AffichRessource} /> 
          <Route path="/UserProfile" component={UserProfile} />  
          <Route path="/AccountSettings" component={AccountSettings} />   
          <Route path="/ModifierInstructeur" component={ModifierInstructeur} />   
          <Route path="/ChangePassword" component={ChangePassword} />    
          <Route path="/AccountSettings" component={AccountSettings} />   

        </Switch>
      </div> 
    
    </Router> 
  );
};

export default App;
