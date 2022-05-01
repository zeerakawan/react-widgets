import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term && !results.length) {
      searchWiki();
    } else {
      //Request will be fetch if the term has any data
      const timeoutId = setTimeout(() => {
        if (term) {
          searchWiki();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
