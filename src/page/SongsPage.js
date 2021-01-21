import React from "react";
import song from '../resource/testsong.m4a';
import {HeartFilled} from "@ant-design/icons";


const SongsPage = () =>{
    return (
        <>
            <h1>도연이를 향한 세레나데</h1>
            <table border="1">
                <thead style={{textAlign:"center"}}>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th>제목</th>
                        <th>아티스트</th>
                        <th>좋아요</th>
                        <th>앨범명</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>도연이를 향한 세레나데 </th>
                    <th>아티스트</th>
                    <th> 19970625 <HeartFilled /></th>
                    <audio autoPlay controls>
                        <source src={song} type="audio/mp3"/>
                    </audio>
                </tr>
                </tbody>
            </table>
            <p className="songFont">

            </p>
        </>)
}

export default SongsPage;