import React from "react";
import song from '../resource/testsong.m4a'

const SongsPage = () =>{
    return (
        <>
            <h1>도연이를 향한 세레나데</h1>
            <p className="songFont">
                <audio autoPlay controls>
                    <source src={song} type="audio/mp3"/>
                </audio> 아름 ver
            </p>
        </>)
}

export default SongsPage;