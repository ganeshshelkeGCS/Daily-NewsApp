import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    return (
      <div>
        This is News Component
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}

export default News;
