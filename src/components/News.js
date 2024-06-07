// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default class News extends Component {
//   static defaultProps = {
//     country: 'us',
//     pageSize: 6,
//     category: 'general',
//     badgeColor: 'bg-primary',
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     badgeColor: PropTypes.string,
//     setProgress: PropTypes.func.isRequired,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//   }

//   componentDidMount() {
//     this.updateNews();
//     this.updateTitle();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.category !== this.props.category || prevState.page !== this.state.page) {
//       this.updateNews();
//     }
//     if (prevProps.category !== this.props.category) {
//       this.updateTitle();
//     }
//   }

//   updateTitle() {
//     const { category } = this.props;
//     document.title = `NewsMonkey | ${category.charAt(0).toUpperCase() + category.slice(1)}`;
//   }

//   async updateNews() {
//     this.props.setProgress(10);
//     const { country, category, pageSize } = this.props;
//     const { page } = this.state;
//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(50);
//     let parsedData = await data.json();
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   fetchMoreData = async () => {
//     this.setState((state) => ({ page: state.page + 1 }), async () => {
//       const { country, category, pageSize } = this.props;
//       const { page, articles } = this.state;
//       const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${pageSize}`;
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       this.setState({
//         articles: articles.concat(parsedData.articles),
//         totalResults: parsedData.totalResults,
//       });
//     });
//   };

//   handlePrevClick = async () => {
//     this.setState((state) => ({ page: state.page - 1 }), this.updateNews);
//   }

//   handleNextClick = async () => {
//     this.setState((state) => ({ page: state.page + 1 }), this.updateNews);
//   }

//   render() {
//     return (
//       <div className='container my-3'>
//         <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top Headlines</h1>
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className='row'>
//             {this.state.articles.map((element) => {
//               return (
//                 <div className='col-md-4' key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title : ""}
//                     description={element.description ? element.description : ""}
//                     imageUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                     badgeColor={this.props.badgeColor}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </InfiniteScroll>
//       </div>
//     );
//   }
// }
























import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
    badgeColor: 'bg-primary',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    badgeColor: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.updateNews();
    this.updateTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      this.setState({ page: 1, articles: [] }, this.updateNews);
      this.updateTitle();
    }
  }

  updateTitle() {
    const { category } = this.props;
    document.title = `NewsMonkey | ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    const { country, category, pageSize } = this.props;
    const { page, articles } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apikey}&page=${page + 1}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: page + 1,
    });
  };

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className='row'>
            {this.state.articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    badgeColor={this.props.badgeColor}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
