import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
// import API_KEY from './config'
import { useState, useEffect } from 'react'; 
import API_KEY from './config';

// const gifApi = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;
// const gifSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`;

function App() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState([])


useEffect(() => {
const doGifFetch = async () => {
  const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
  if (data) setGifs(data.data);
  if (error) setError(error.message);
  console.log(data)
  console.log('RUAHH')
};
doGifFetch();
  }, [])

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch img={gifs.data} setGifs={setGifs} searched={searched} setSearched={setSearched} />
        <br/>
        {/* <button onClick={() => setGifs(gifs)}></button> */}
        <GifContainer gifs={ gifs } searched= { searched }/>
      </div>
    </div>
  );
}

export default App;
