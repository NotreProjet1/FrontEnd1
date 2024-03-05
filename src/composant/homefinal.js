// Import React and other necessary dependencies
import React from 'react';
import CardGride from './home';
import VideoPage from './vedio';
import PageCollections from './collectionMarek';
import CardGrid from './gratuisFormation';
import PageCollectionsCommerce from './collectionCommerce';
import PageCollectionsDev from './collectionDev';
import Photos from './lesimage';
// HomeFinal component
const HomeFinal = () => {
  return (
    <div>
    <h1 style={{
        textAlign: 'center',
        color: '#3498db', 
        fontFamily: 'Calibre, sans-serif', 
        fontSize: '2.5em', 
        marginBottom: '20px' 
      }}>
        Welcome to EduPionner 
      </h1>
     
      <Photos/>
    
      <PageCollectionsCommerce /> 
      <PageCollectionsDev /> 
      <PageCollections /> 
      <CardGrid />
      <CardGride />
     
      <VideoPage />
      
    </div>
  );
};

// Export the HomeFinal component
export default HomeFinal;
