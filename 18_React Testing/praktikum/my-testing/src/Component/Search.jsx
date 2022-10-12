import React, {useState} from 'react';
import axios from "axios";

const URL = 'http://hn.algolia.com/api/v1/search';

export default function Search() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("")

  async function handleFetch(event) {
    let result;

    try {
      result = await axios.get(`${URL}?query=${value}`);
      setStories(result.data.hits);
      console.log(value, "value", result.data.hits[0])
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <h2>Cari Cerita</h2>
      <input onChange={e=> setValue(e.target.value)} type="text" placeholder="Tulis Cerita" />
      <button type="button" onClick={handleFetch}>
        Cari Cerita
      </button> <br/>

      {error && <span>Ada yang error ...</span>}

      {stories.length > 0 && "Daftar Cerita"}
      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            {story.title} <button href={story.url}>Baca Selengkapnya</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
