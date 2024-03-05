import React, { useEffect, useState } from 'react'
import * as apis from '../apis'
import SingleMovieCard from './singleMovieCard'
import { useLoader } from '../Loader'
function Genres() {
    const { openLoader, closeLoader } = useLoader()
    const [genre1, setGenre1] = useState([])
    const [selectedGenre, setSelectedGenre] = useState(28)
    const [movies, setMovies] = useState([])
    const getdata = () => {
        apis.getGenre(
            (res) => {
                setGenre1(res.data.genres)
            },
            (err) => { console.log(err) },
            () => { }
        )
    }
    const getgenreMovie = () => {
        apis.getGenreMov(selectedGenre,
            (res) => {
                setMovies(res.data.results)
                console.log(res.data.results)
            },
            (err) => { console.log(err) },
            () => { closeLoader() }
        )
    }
    useEffect(() => {
        openLoader();
        getdata()
        getgenreMovie()
    }, [selectedGenre])

    return (
        <div className='d-flex flex-wrap'>
            <div>  {genre1?.map((mapItem) => {
                return (
                    <button className={`genre ${selectedGenre == mapItem.id ? 'active' : ''}`} onClick={() => { setSelectedGenre(mapItem.id) }} key={mapItem.id}>{mapItem.name}</button>)
            })}
            </div>
            <div className="row mb-5 d-flex">
                {movies?.map((movieItem) => {
                    return (
                        <SingleMovieCard item={movieItem} key={movieItem.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Genres