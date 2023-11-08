import React, {ChangeEventHandler, Component, MouseEventHandler} from 'react';
import style from './Start.module.css'
import {TFSetUserName} from '../../general/context/AppContextWrapper';
// import { ArrowRight } from 'react-bootstrap-icons';

interface IStateStart {
    currentInputText: string;
}

interface IPropsStart {
    setUserName: TFSetUserName;
}

const placeholder: string = 'Enter your name';

class Start extends Component<IPropsStart, IStateStart> {

    constructor(props: IPropsStart) {
        super(props);
        this.state = {
            currentInputText: '',
        }

    }

    handleOnChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({currentInputText: event.target.value});
    }

    handleOnClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
        this.props.setUserName(this.state.currentInputText);
    }

    render() {
        return (
            <div className={style.pageStart}>
                <h1 className={style.h1}>Ready for WAR</h1>
                <input className={`${style.input} ${style.inputStar}`} type={"text"} onChange={this.handleOnChangeInput}
                       placeholder={placeholder}/>
                <button className={`${style.button} ${style.buttonStar}`} onClick={this.handleOnClickButton}>start
                </button>
                {/*<ArrowRight/> color="royalblue" size={96}*/}
            </div>
        );
    }
}

export {Start};