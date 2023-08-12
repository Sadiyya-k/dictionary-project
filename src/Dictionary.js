import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(false);

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    if (response.data.status === "not_found") {
      setError(true);
      return;
    }
    setError(false);
    setLoaded(true);
    setResults(response.data);
  }

  function search() {
    let apiKey = "fbdaa6o7f8db80d139ftfd763b2b9e74";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch(handleError);

    let imageApiKey = "fbdaa6o7f8db80d139ftfd763b2b9e74";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleError() {
    setError(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    search();
  }

  if (loaded && !error) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              autoFocus={true}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">i.e. sunrise, forest, yoga, planet ... </div>
        </section>
        <Results definition={results} />
        <Photos photos={photos} />
      </div>
    );
  } else if (loaded && error) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              autoFocus={true}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">i.e. sunrise, forest, yoga, planet ... </div>
        </section>
        <h1>Ooops, word not found</h1>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
