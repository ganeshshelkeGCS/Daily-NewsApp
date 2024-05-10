import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {


  constructor() {
    super();
    console.log("Hello I am Constructor");
    this.state = {
      articles: [],
      loading: false,
    };

}

     async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f9feb8a0dca6452b90d797802721a8a4";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles: parseData.articles});
    }

  
  render() {
    return (
      <div className="container my-3">
        <h2>News - Top Headlines</h2>
        <div className="row">
          
            {this.state.articles.map((element) => {
               return <div className="col-md-4"  key = {element.title ? element.title:element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description .slice(0, 88) : ""}
                imageUrl={element.urlToImage ? element.urlToImage : ""}
                newsUrl={element.url ? element.url : ""} />
               </div>
            })}
         
        </div>
      </div>
    );
  }
}

export default News;
