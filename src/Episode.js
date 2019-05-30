import React from "react";
import "./episode.css";
import stripHtml from "string-strip-html";

const Episode = props => {
  return (
    <div id="card" className="ui card">
      <h1 className="header">{`S${props.data.season}E${props.data.number}:${
        props.data.name
      }`}</h1>
      <div className="image ">
        <img src={props.data.image.original} alt="" />
      </div>
      <div className="content">
        <div className="description">{stripHtml(props.data.summary)}</div>
      </div>
      <div className="extra content">
        <span className="date">{props.data.airdate}</span>
      </div>
    </div>
  );
};

export default Episode;
