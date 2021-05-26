import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} islargeRow />
            <Row title = "Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} islargeRow />
            <Row title = "Horror Movies" fetchUrl={requests.fetchNetflixOriginals} islargeRow />
            <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} islargeRow />
            <Row title = "Documetaries" fetchUrl={requests.fetchDocumentaries} islargeRow />
            
        </div>
    )
}

export default HomeScreen