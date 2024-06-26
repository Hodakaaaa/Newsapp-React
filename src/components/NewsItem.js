import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source, badgeColor }) => {
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className={`badge rounded-pill ${badgeColor}`} style={{ top: '10px', zIndex: '1' }}>
            {source}
          </span>
        </div>
        <img src={imageUrl || "https://ambcrypto.com/wp-content/uploads/2024/06/eth-1536x878.png"} className="card-img-top" alt="news" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author || "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  badgeColor: PropTypes.string.isRequired
};

export default NewsItem;
