import React from 'react'
// import './style.css'
import airplane from './images/airplane.png'

const MyFile = () => {
    return (
        <>
            <div class="container">
                <div class="runway"></div>
                <img src={airplane} class="airplane"/>
            </div>
        </>
    )
}

export default MyFile
