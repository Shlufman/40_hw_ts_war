import React, {Component} from 'react';
import {AppContext} from "./context";

interface IPropsApp {
    children: React.ReactNode;
}

interface IStateApp {
    activePage: TPageApp;
    userName?: string;
    score: TScore;
}

type TScore = {
    computer: number;
    user: number;
}

interface IContext {
    activePage: TPageApp;
    userName?: string;
    score: TScore;
    setUserName: TFSetUserName;
    setScore: TFSetScore;
    setStart: TFSetStart;
}

type TFSetUserName = (userName: string) => void;
type TFSetScore = (score: TScore) => void;
type TFSetStart = () => void;

type TPageApp = 'start' | 'desk' | 'scoreboard';

class AppContextWrapper extends Component<IPropsApp, IStateApp> {

    constructor(props: IPropsApp) {
        super(props);
        this.state = {activePage: 'start', score: {computer: 0, user: 0}};
    }

    setUserName: TFSetUserName = (userName) => {
        this.setState({activePage: 'desk', userName});
    }

    setScore: TFSetScore = (score) => {
        this.setState({activePage: 'scoreboard', score});
    }

    setStart: TFSetStart = () => {
        this.setState({activePage: 'start', score: {computer: 0, user: 0}});
    }

    render(): React.ReactNode {
        return (
            <AppContext.Provider
                value={{
                    activePage: this.state.activePage,
                    userName: this.state.userName,
                    score: this.state.score,
                    setUserName: this.setUserName,
                    setScore: this.setScore,
                    setStart: this.setStart,
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export {type IStateApp, type IContext, type TFSetScore, type TFSetStart, type TFSetUserName, type TPageApp, type TScore};
export {AppContextWrapper};