import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const VideoPage = () => {
  const [likedVideos, setLikedVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoData = [
    { id: 1, url: 'https://www.youtube.com/embed/QBrJp_Sd-7M?si=RlVNmcpMAsZ8BV2Y' },
    { id: 2, url: 'https://www.youtube.com/embed/T4mxZ2bazSA?si=cmwo-P5kN_Lq1Dfo' },
    { id: 3, url: 'https://www.youtube.com/embed/yMHill9jx5Q?si=fZh3bGHDtADnUh0B' },
  ];

  const handleLikeClick = (videoId) => {
    if (!likedVideos.includes(videoId)) {
      setLikedVideos([...likedVideos, videoId]);
    } else {
      const updatedLikes = likedVideos.filter((id) => id !== videoId);
      setLikedVideos(updatedLikes);
    }  
  };

  const handleShowModal = (videoId) => {
    setShowModal(true);
    setSelectedVideo(videoId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Video Page</h1>
      <div className="row">
        {videoData.map((video) => (
          <div key={video.id} className="col-md-4">
            <Card>
              <iframe
                width="100%"
                height="200"
                src={video.url}
                title={`YouTube Video ${video.id}`}
                frameBorder="0"
                allowFullScreen
              />
              <Card.Body>
                <Card.Title>Video {video.id}</Card.Title>
                <Button
                  variant={likedVideos.includes(video.id) ? 'danger' : 'outline-danger'}
                  onClick={() => handleLikeClick(video.id)}
                >
                  <FontAwesomeIcon icon={faHeart} /> Like
                </Button>
                <Button
                  variant="primary"
                  className="ml-2"
                  onClick={() => handleShowModal(video.id)}
                >
                  <FontAwesomeIcon icon={faPlus} /> Voir Plus
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Video {selectedVideo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            src={videoData.find((video) => video.id === selectedVideo)?.url}
            title={`YouTube Video ${selectedVideo}`}
            frameBorder="0"
            allowFullScreen
          />
          <Form className="mt-3">
            <Form.Group controlId="commentForm">
              <Form.Label>Commentaire</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ajouter un commentaire" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoPage;
