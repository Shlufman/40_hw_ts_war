import React, {Component, useContext, useEffect, useState} from 'react';
import {AppContext} from "./context";

export interface IPropsApp {
    children: React.ReactNode;
}

interface IStateApp {
    activePage: TPageApp;
    userName?: string;
    score: TScore;
}

export type TScore = {
    computer: number;
    user: number;
}

export interface IContext {
    activePage: TPageApp;
    userName?: string;
    score: TScore;
    setUserName: TFSetUserName;
    setScore: TFSetScore;
    setStart: TFSetStart;
}

export type TFSetUserName = (userName: string) => void;
export type TFSetScore = (score: TScore) => void;
export type TFSetStart = (arg: undefined) => void;

export type TPageApp = 'start' | 'desk' | 'scoreboard';

const AppContextWrapper = ({children}:IPropsApp) => {
    const [activePage, setActivePage] = useState<TPageApp>('start');
    const [score, setScore] = useState<TScore>({computer: 0, user: 0});
    const [userName, setUserName] = useState<string>('');

    const getPageDesk: TFSetUserName = (userName) => {
        setUserName(userName);
        setActivePage('desk');
    }

    const getPageScoreboard: TFSetScore = (score) => {
        setScore(score);
        setActivePage('scoreboard');
    }

    const getPageStart: TFSetStart = () => {
        setActivePage('start');
        setScore({computer: 0, user: 0});
    }

    return (
        <AppContext.Provider
            value={{
                activePage,
                userName,
                score,
                setUserName:getPageDesk,
                setScore:getPageScoreboard,
                setStart:getPageStart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export {AppContextWrapper};