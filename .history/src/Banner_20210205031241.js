import React, { useState } from 'react'
import './Banner.css'


function Banner() {

    const [movie, setMovie] = useState([])

    function truncate( string, n) {
        return string?.length > n ? string.substr(0, n - 1 ) + '...' : string
    }

    return (
        <header className="banner" style ={{
            backgroundSize: "cover",
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
            backgroundPosition: "center center"

        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                <h1 className="banner__description">{ truncate (`This is a test description
                this is a test description
                this is a test description
                this is a test description 
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description
                this is a test description 
                this is a test description`, 150)}</h1>
                <div className="banner--fadeBottom">

                </div>
            </div>
        </header>
    )
}

export default Banner
