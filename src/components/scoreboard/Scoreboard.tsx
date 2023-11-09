import React, {Component, useContext} from 'react';
import style from "./Scoreboard.module.css";
import {AppContext} from "../../general/context/context";

const Scoreboard = () => {
    const {score,setStart} = useContext(AppContext);
    return (
        <div className={style.pageScoreboard}>
            <div className={`${style.center} ${style.centerScoreboardFirst}`}>LOSE\WIN</div>
            <div
                className={`${style.center} ${style.centerScoreboardSecond}`}>{score.computer} - {score.user}</div>
            <button className={`${style.button} ${style.buttonScoreboard}`} onClick={()=>{setStart(undefined)}}>Again?</button>
        </div>
    );
}

export {Scoreboard};