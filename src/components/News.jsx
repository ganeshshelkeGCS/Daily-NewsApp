import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


class News extends Component {
  static defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general'
  }
  static propsTypes = {
     country: PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string,
  }

  constructor() {
    super();
    console.log("Hello I am Constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1, 
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=f9feb8a0dca6452b90d797802721a8a4&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f9feb8a0dca6452b90d797802721a8a4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    });
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({loading: true});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f9feb8a0dca6452b90d797802721a8a4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
    

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin: "40px 0px"}}>News - Top Headlines</h2>
    {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div
                className="col-md-4"
                key={element.title ? element.title : element.url}
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url ? element.url : ""}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>

          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
