import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "./config/config";

const App = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(config.downstreamUrl).then((response) => {
      setBooks(response.data);
    });
  }, []);
  return (
    <>
      <h1>Arsehole</h1>
      <p>Click here to go to URL</p>
      <a href={config.clickUrl} target="_blank">
        Click
      </a>
      <hr />
      <p>This is a retrieved list:</p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>UID</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { title, author, year, uid } = book;
              return (
                <tr key={uid}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{year}</td>
                  <td>{uid}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default App;
