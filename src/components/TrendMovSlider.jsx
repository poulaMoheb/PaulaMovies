import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'
import * as apis from "../apis"
import { useNavigate } from 'react-router-dom';
import SingleMovieCard from './singleMovieCard';
import { useLoader } from '../Loader';

export default function TrendMovSlider({ condition, ...props }) {
    const { openLoader, closeLoader } = useLoader()
    const [TrendMov, setTrendMov] = useState([])
    const [loadCounter, setLoadCounter] = useState(1)
    const [full, setFull] = useState(true)

    const getReq = () => {
        openLoader();
        apis.getMovies(condition, loadCounter,
            (res) => {
                if (loadCounter > 3) setFull(false);
                setTrendMov([...TrendMov, ...res.data.results])
                console.log(res.data)
                // console.log("poulaaaaaa de aldata  : ", res.data)
            },
            (err) => { console.log(err) },
            () => {
                console.log("finally")
                closeLoader()
            }
        )
    }
    useEffect(() => {
        getReq();
    }, [loadCounter])
    return (
        <div className="row mb-5 d-flex">
            {TrendMov.map((apiItem) => {
                return (
                    apiItem.original_language == 'en' && <SingleMovieCard className="singleCard w-100" item={apiItem} key={apiItem.id} />)
            })}
            {full &&
                <button onClick={() => setLoadCounter(prev => prev + 1)} className="btn btn-primary mt-2">Show More</button>}
        </div>
    )
}
