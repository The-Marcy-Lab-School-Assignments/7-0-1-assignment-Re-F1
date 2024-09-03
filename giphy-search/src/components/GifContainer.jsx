function GifContainer({ gifs,  searched }) {
    
    return (
        <ul>
            {/* map only runs if gif is not null. mapping over array to render */}
        {
      searched.length ?  searched?.map((gif) => (
        <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
        </li>
    )) : gifs?.map((gif) => (
            <li key={gif.id}>
                <img src={gif.images.fixed_height.url} alt={gif.title} />
            </li>
        ))
        
        }
        </ul>
    )
}

export default GifContainer
