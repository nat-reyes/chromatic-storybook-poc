import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export const Card = ({ title, description, imageUrl, category }) => {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-category">{category}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
}; 