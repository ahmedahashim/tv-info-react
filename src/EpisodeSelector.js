import React from "react";
import "./EpisodeSelector.css";

const EpisodeSelector = props => {
  let button = null;

  const handleChange = e => {
    button.style.display = "inline";
    props.onSelectChange(e);
  };
  return (
    <div class="selector-container">
      <label>Jump to Episode: </label>

      <select onChange={handleChange}>
        {props.data.map(eposide => (
          <option key={eposide.id} value={eposide.name}>
            {" "}
            {eposide.name}
          </option>
        ))}
      </select>
      <span className="ui buttons">
        <button
          onClick={() => {
            button.style.display = "none";
            props.reloadAllEposides();
          }}
          ref={btn => (button = btn)}
          className="ui labeled icon button active"
          style={{ display: "none" }}
        >
          <i className="left chevron icon" />
          Back
        </button>
      </span>
    </div>
  );
};

export default EpisodeSelector;
