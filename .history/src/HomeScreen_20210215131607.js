import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'
import Row from './Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title = "Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title = "Horror Movies" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title = "Documetaries" fetchUrl={requests.fetchDocumentaries} />
            
        </div>
    )
}

export default HomeScreen