import React, {Component, useContext} from 'react';
import {Start} from "../../components/start";
import {Desk} from "../../components/desk";
import {Scoreboard} from "../../components/scoreboard";
import {AppContext} from "../context/context";

const Router = () => {
    const {activePage, setUserName, setScore} = useContext(AppContext);

    switch (activePage) {
        case 'start':
            return (
                <div className="App">
                    <Start setUserName={setUserName}/>
                </div>
            );
        case 'desk':
            return (
                <div className="App">
                    <Desk setScore={setScore}/>
                </div>
            );
        case 'scoreboard':
            return (
                <div className="App">
                    <Scoreboard/>
                </div>
            );
    }

}

export {Router};