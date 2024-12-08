import React, { useEffect, useState } from 'react'
import { Container, Image } from '../StyleComponent/ProfileStyle';

const Profile = () => {
  const imageNames = [
    'boating.jpg',
    'boating1.jpg',
    'boating2.jpg',
    'boating3.jpg',
    'boating4.jpg',
    'boating5.jpg',
   
  ];

  const images = imageNames.map((name) => `/Boat/${name}`);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Container>
      {images.length > 0 && (
        <Image
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      )}
    </Container>
  );
};

export default Profile;