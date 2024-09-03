import { useState,useEffect } from "react";
import { handleFetch } from "../utils";
import API_KEY from "../config";

function GifSearch({img, setGifs, searched, setSearched}) {

    const [input, setInput] = useState('');
    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setQuery(input)
        // const data = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=3&rating=g`)
        // setSearched(data.data)
        // console.log(data.data)
    }


    useEffect(() => {
        const doGifFetch = async () => {
            if(!query) return;
            const [data,error] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=3&rating=g`)
            setSearched(data.data)
        //   if (error) setError(error.message);
          console.log('HELLO')
        };
        doGifFetch();
          }, [query])
console.log(input)
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className="btn btn-success" >Find Giphs</button>
        </form>
    )
}

export default GifSearch
