import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'

export default function Row( title, fetchUrl, isLargeRow = false) {
    const [ movies, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }


    },[])



    return (
        <div className="row">
            
        </div>
    )
}
