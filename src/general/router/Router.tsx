import React, {Component} from 'react';
import {Start} from "../../components/start";
import {Desk} from "../../components/desk";
import {Scoreboard} from "../../components/scoreboard";
import {AppContext} from "../context/context";

class Router extends Component {
    render():React.ReactNode {
        return (
            <AppContext.Consumer>
                {
                    value => {
                        switch (value.activePage) {
                            case 'start':
                                return (
                                    <div className="App">
                                        <Start setUserName={value.setUserName}/>
                                    </div>
                                );
                            case 'desk':
                                return (
                                    <div className="App">
                                        <Desk setScore={value.setScore}/>
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
                }
            </AppContext.Consumer>
        );
    }
}

export {Router};