import React, {Component} from 'react';
import style from "./Scoreboard.module.css";
import {AppContext} from "../../general/context/context";


interface IPropsScoreboard{

}

interface IStateScoreboard{

}
class Scoreboard extends Component <IPropsScoreboard,IStateScoreboard>{
    render():React.ReactNode {
        return (
            <AppContext.Consumer>{
                value => (
                    <div className={style.pageScoreboard}>
                        <div className={`${style.center} ${style.centerScoreboardFirst}`}>LOSE\WIN</div>
                        <div className={`${style.center} ${style.centerScoreboardSecond}`}>{value.score.computer} - {value.score.user}</div>
                        <button className={`${style.button} ${style.buttonScoreboard}`} onClick={value.setStart}>Again?</button>

                    </div>
                )
            }

            </AppContext.Consumer>
        );
    }
}

export {Scoreboard};