import React from 'react'
import Genres from './Genres'
import SearchMov from './SearchMov'
import TrendMovSlider from './TrendMovSlider'

function MainPage() {


    return (
        <>
            <h3 className='category ms-4 mt-2 d-flex justify-content-start mb-3' id='popular'>Popular</h3>
            <TrendMovSlider className="headerpoprate" condition="popular" />
            <h3 className='category ms-4 mt-2 d-flex justify-content-start mb-3' id='toprated'>Top Rated</h3>
            <TrendMovSlider className="headerpoprate" condition="top_rated" />
            <Genres />
            <div className="coloumn2 m-0 div col-1">
            </div>
        </>

    )
}

export default MainPage