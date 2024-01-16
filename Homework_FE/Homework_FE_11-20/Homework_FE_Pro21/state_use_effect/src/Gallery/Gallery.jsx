import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='gallery-container'>
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt={image.title}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <img src={selectedImage.url} alt={selectedImage.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

// Создать компонент Gallery, который загружает список изображений с сервера и отображает их в виде галереи. Каждое изображение должно быть кликабельным и при клике на него должно открываться в полноразмерном режиме.


// 1.Создайте компонент Gallery, который будет загружать и отображать список изображений.
// 2.Добавьте обработчик события для открытия изображения в полноразмерном режиме.


// Обязательно использовать useEffect, useState и axios.
// API:  https://jsonplaceholder.typicode.com/photos 