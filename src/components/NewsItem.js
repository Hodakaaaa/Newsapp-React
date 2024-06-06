// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export default class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source, badgeColor } = this.props;
//     return (
//       <div className='my-3'>
//         <div className="card">
//           <div style={{ position: 'relative' }}>
//             <span className={`position-absolute badge rounded-pill ${badgeColor}`} style={{ right: '10px', top: '10px', zIndex: '1' }}>
//               {source}
//             </span>
//           </div>
//           <img src={!imageUrl ? "https://ambcrypto.com/wp-content/uploads/2024/06/eth-1536x878.png" : imageUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
//             <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// NewsItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   newsUrl: PropTypes.string.isRequired,
//   badgeColor: PropTypes.string.isRequired,
// };




import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source, badgeColor } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${badgeColor}`} style={{ left: '90%', zIndex: '1' }}>
            {source}
          </span>
          <img src={!imageUrl ? "https://ambcrypto.com/wp-content/uploads/2024/06/eth-1536x878.png" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  newsUrl: PropTypes.string.isRequired,
  badgeColor: PropTypes.string.isRequired,
};