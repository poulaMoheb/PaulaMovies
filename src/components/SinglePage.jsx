import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import * as apis from "../apis"

function SinglePage() {
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const [productionCountries, setProductionCountries] = useState([])
    const [date, setDate] = useState("")
    let { id } = useParams()
    let navigate = useNavigate()
    const searchHandler = (name) => {
        navigate({ pathname: `searchMov/${name}` })
    }
    const getMovie = () => {
        apis.singleRequest(id,
            (res) => {
                setMovie(res.data)
                setGenres(res.data.genres)
                setProductionCountries(res.data.production_countries)
                setDate(res.data.release_date.substring(0, 4))
            },
            (err) => {
                console.log(err)
            },
            () => { })
    }

    useEffect(() => {

        getMovie()
        // console.log()


    }, [])

    return (
        <div className='container'>
            <div className="row ">
                <img src={"https://image.tmdb.org/t/p/w780" + movie.backdrop_path} className="cover-img" />
                <img src={"https://image.tmdb.org/t/p/w780" + movie.poster_path} className="col-2 m-3 p-2 bg-secondary bg-opacity-10 movie-img" />
                <div className="col-5 mt-5">
                    <h1 className='MovieTitle'>{movie.original_title}</h1>
                    <p className='date'>{date}</p>
                    {genres.map((genresItem) => {
                        return (<Link className='ms-1 genres' key={genresItem.id} to={`/searchMov/${genresItem.name}`}>{genresItem.name}</Link>)
                    })}
                    <p className='overView' >{movie.overview}</p>
                    <p>{productionCountries.name}</p>
                </div>
            </div>
        </div >
    )
}

export default SinglePage
