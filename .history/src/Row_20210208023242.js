import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'

export default function Row( {title, fetchUrl, isLargeRow = false}) {
    const [ movies, setMovies] = useState([])
    const base_url = "https://image.tmbd.org/t/p/original/"

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()

    },[fetchUrl])



    return (
        <div className="row">
            <h2>{title}</h2>
            {
                movies.map( movie => (
                    <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
                    } alt={movie.name}>
                    </img>
                ))
            }
        </div>
    )
}
