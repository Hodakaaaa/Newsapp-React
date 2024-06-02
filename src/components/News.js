// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export default class News extends Component {
   
//   render() {
//     return (
//       <div className='container my-3'>
//         <h2>NewsMonkey-Top Headline</h2>
//         <div className='row'>
//             <div className='col-md-4'>
//                 <NewsItem title="Sport" description="damn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
//             </div>
//             <div className='col-md-4'>
//                 <NewsItem title="Sport" description="damn"/>
//             </div>
//             <div className='col-md-4'>
//                 <NewsItem title="Sport" description="damn"/>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "UK ambassador left post after 'pointing gun at staff'",
            "description": "A video posted on social media claims to show Jon Benjamin aiming a weapon at another man, while looking down the rifle's sight.",
            "url": "https://www.bbc.co.uk/news/articles/crggz77zp7zo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/eaf5/live/f5378cd0-1f83-11ef-b9da-f5bb03ab809f.png",
            "publishedAt": "2024-06-01T04:07:07.4813155Z",
            "content": "No official announcement about Mr Benjamin's position has been made by the UK Foreign, Commonwealth and Development Office (FCDO). But he is no longer listed as ambassador to Mexico on the government… [+2509 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Philippine president Ferdinand Marcos Jr warns China against 'acts of war'",
            "description": "He warned China not to cross a red line as their standoff in the South China Sea escalates.",
            "url": "https://www.bbc.co.uk/news/articles/c7223knz3ezo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2098/live/42dfe540-1f57-11ef-a13a-0b8c563da930.jpg",
            "publishedAt": "2024-06-01T03:52:11.3557792Z",
            "content": "Philippine President Ferdinand Marcos Jr has warned China not to cross a red line in the South China Sea, where a standoff between the countries continues to escalate.\r\nIf any Filipino died as a resu… [+3349 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine war: We have no Plan B if Ukraine falls, Estonian PM says",
            "description": "Estonia is pouring money and weapons into Ukraine’s war effort to try to push back the Russians.",
            "url": "https://www.bbc.co.uk/news/articles/c722zxj0kyro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/33c6/live/c89e8a40-1dc9-11ef-80aa-699d54c46324.jpg",
            "publishedAt": "2024-06-01T02:22:11.9648171Z",
            "content": "Estonia considers itself a front-line state, a Nato member where its border guards stare across the Narva River at the Russian fortress of Ivangorod. \r\nThis tiny Baltic state, once a part of the Sovi… [+1196 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Eminem: With new album and Houdini single, what is Slim Shady’s legacy?",
            "description": "The star claims he will kill off his alter ego on his forthcoming album, The Death of Slim Shady.",
            "url": "https://www.bbc.co.uk/news/articles/clee3445w0lo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1b75/live/0be6fcb0-1ea1-11ef-822b-27ee4a290614.jpg",
            "publishedAt": "2024-06-01T00:37:17.6835886Z",
            "content": "But Mathers was different, \"a true product of ghetto streets,\" wrote Nick Hasted in his Eminem biography. \r\nThis left him uniquely placed to manage what Jeff Weiss called the cultural debt, external … [+554 chars]"
        }, 
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "'Twice I backed Trump but no more' - voters split on verdict",
            "description": "We asked independent voters and Republicans who have doubts about Trump if conviction changes anything.",
            "url": "https://www.bbc.co.uk/news/articles/ce5511j7rylo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3596/live/63099ce0-1f6f-11ef-baa7-25d483663b8e.png",
            "publishedAt": "2024-06-01T00:37:16.1214773Z",
            "content": "This lifelong Republican cast hesitant votes for Mr Trump in 2016 and 2020, but Thursday's verdict was a defining moment...eventually.\r\nI'm not a big Trump fan and I'm not a lawyer, but - based on wh… [+1150 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Michelle Obama's mother, Marian Robinson, dies at 86",
            "description": "Robinson was a well-known fixture at the White House during the eight years of Barack Obama's administration between 2009 and 2017.",
            "url": "https://www.bbc.co.uk/news/articles/ce551e71vl4o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/000f/live/e832b7b0-1f99-11ef-a231-f7cb5d756902.jpg",
            "publishedAt": "2024-05-31T22:52:12.5117126Z",
            "content": "Marian Robinson, the mother of former US First Lady Michelle Obama, has died at 86, her family has announced. \r\nIn a statement, the Obamas said that Robinson had died"
        }
    ];

    constructor() {
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: this.articles.filter(article => article.urlToImage) // Remove articles with null urlToImage
        };
    }
    render() {
            return (
              <div className='container my-3'>
                <h2>NewsMonkey-Top Headline</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem title="Sport" description="damn" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="Sport" description="damn"/>
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="Sport" description="damn"/>
                    </div>
                </div>
              </div>
            )
          }
        }
