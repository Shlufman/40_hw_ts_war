import React, {ChangeEventHandler, Component, MouseEventHandler, useState} from 'react';
import style from './Start.module.css'
import {TFSetUserName} from '../../general/context/AppContextWrapper';

// import { ArrowRight } from 'react-bootstrap-icons';

type TStateStar = string;

interface IPropsStart {
    setUserName: TFSetUserName;
}

const placeholder: string = 'Enter your name';

const Start = ({setUserName}: IPropsStart) => {
    const [currentInputText, setCurrentInputText] = useState<TStateStar>('');

    const handleOnChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        setCurrentInputText(event.target.value);
    }

    const handleOnClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
        setUserName(currentInputText);
    }

    return (
        <div className={style.pageStart}>
            <h1 className={style.h1}>Ready for WAR</h1>
            <input className={`${style.input} ${style.inputStar}`} type={"text"} onChange={handleOnChangeInput}
                   placeholder={placeholder}/>
            <button className={`${style.button} ${style.buttonStar}`} onClick={handleOnClickButton}>start
            </button>
            {/*<ArrowRight/> color="royalblue" size={96}*/}
        </div>
    );
}

export {Start};