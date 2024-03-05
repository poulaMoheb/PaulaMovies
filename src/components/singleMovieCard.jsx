import { Hidden } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SingleMovieCard({ item, ...props }) {
    let navigate = useNavigate()

    let viewHandler = (Item) => {
        navigate({
            pathname: `/SinglePage/${Item.id}`,
        })
    }
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mt-2">
            <Link className="card-main d-block" to={`/SinglePage/${item.id}`}>
                <img src={"https://image.tmdb.org/t/p/w780" + item.poster_path} className="card-img" alt="" />
                <div className="card-body">
                    <h3 className="card-name" >{item.original_title}</h3>
                    <p className='card-info'>{item.overview}</p>
                    <p className="card-vote" >{item.vote_average}</p>
                </div>
            </Link>
        </div >
    )
}

export default SingleMovieCard