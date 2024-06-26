import React from "react";
import defaultImage from "./image/brk.jpg";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div className="my-4">
        <div className="card">
          <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: 1, top: 2}}>
            <span
              class="badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>

          <img src={!imageUrl ? defaultImage : imageUrl} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
