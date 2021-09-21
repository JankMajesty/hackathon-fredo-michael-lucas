import React, { useState, useEffect } from "react";
import ListArticles  from "./components/ListArticles";
import SearchForm from "./components/SearchForm";

const URL = "https://hn.algolia.com/api/v1/search?query=...";

export default function App() {
  const [stories, setStories] = useState([]);

  // componentDidMount
  useEffect(() => {
    console.log("Mounted");
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setStories(data.hits));
    // The array is called a dependecy array
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Updated");
  }, [stories]);

  return (

    <div className="App">
      <SearchForm />
      <ListArticles stories={stories}  />
    </div>
  );
}

