import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../apis'
import searchIcon from '../images/searchIcon.jpg'
import SingleMovieCard from './singleMovieCard'
import { useLoader } from '../Loader'
function SearchMov() {
    const [flag, setflag] = useState(true)
    const [respon, setRespon] = useState([])
    const { searchmov } = useParams()
    const { openLoader, closeLoader } = useLoader()
    const getSearch = () => {
        openLoader();
        let updata = searchmov?.split(' ').join('+')
        console.log(updata)

        apis.searchRequest(
            updata,
            (res) => {
                setRespon(res.data.results)
                // console.log("respon results " + respon.data.total_results)
            },
            (err) => {
                console.log(err)
            },
            () => { closeLoader() })
    }
    useEffect(() => {
        getSearch()
    }, [])

    return (
        <div className="row">

            {respon?.length === 0 &&

                <h1 className='d-flex justify-content-center m-5 noResults'> No Resuts for     <span className='searchName ms-5'>{searchmov}</span>
                </h1>
            }
            {
                respon?.length > 0 &&
                <div className="row">
                    <h1 className='d-flex justify-content-center noResults'>Search for {searchmov}</h1>
                    {respon.map((movieItem) => {
                        return (
                            <SingleMovieCard item={movieItem} className="singleCard w-100" key={movieItem.id} />
                        )
                    })}
                </div>
            }
        </div>

    )
}

export default SearchMov