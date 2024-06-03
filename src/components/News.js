import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
   
    constructor() {
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: false
        };
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19909c7d810d435eb7fabffb1832fc9b";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }

    render() 
    {
            return (
              <div className='container my-3'>
                <h1>NewsMonkey-Top Headline</h1>
                <div className='row'>
                {this.state.articles.map((element)=>{
                    return <div className='col-md-4'key={element.url}>
                    <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                    
                </div>
              </div>
            )
          }
        }
    