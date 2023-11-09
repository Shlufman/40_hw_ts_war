import React, {Component, MouseEventHandler, useContext, useEffect, useState} from 'react';
import style from "./Desk.module.css";
import {TFSetScore, TScore} from '../../general/context/AppContextWrapper'
import {createCardsPack, getInitialCard,TCard} from "../../utils/cardsPack";
import {AppContext} from "../../general/context/context";

interface PropsDesk {
    setScore: TFSetScore;
}

interface StateDesk {
    score: TScore;
    newCurrentUserCard: TCard;
    newCurrentComputerCard: TCard;
    newUserCards: Array<TCard>;
    newComputerCards: Array<TCard>;
}

const shift = (array: Array<TCard>): [TCard, Array<TCard>] => {
    if (array.length > 0) {
        const element = array[0];
        const newArray = [...array];
        newArray.shift();
        return [element, newArray];
    } else {
        throw new Error();
    }
}

const compare = (userCard: TCard, computerCard: TCard) => {
    if (userCard.toCompare > computerCard.toCompare) {
        return 1
    } else if (userCard.toCompare < computerCard.toCompare) {
        return -1
    } else {
        return 0
    }
}

const shuffle = (array: Array<TCard>) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const separateCards = (array: Array<TCard>) => {
    const userCards: Array<TCard> = [];
    const computerCards: Array<TCard> = [];
    for (let i = 0; i < (array.length - 1) / 2; i++) {
        userCards.push(array[i * 2]);
        computerCards.push(array[i * 2 + 1]);
    }

    return [userCards, computerCards];
}

const getInitialState=()=>{
    const newCardsPack = createCardsPack();
    shuffle(newCardsPack);
    const [temptNewUserCards, tempNewComputerCards] = separateCards(newCardsPack);
    const [newCurrentUserCard, newUserCards] = shift(temptNewUserCards);
    const [newCurrentComputerCard, newComputerCards] = shift(tempNewComputerCards);

    return {
        score: {computer: 0, user: 0},
        newCurrentComputerCard,
        newCurrentUserCard,
        newComputerCards,
        newUserCards
    };
}

const Desk = ({setScore}: PropsDesk) => {
    let card =getInitialCard();
    const [state, setState] = useState<StateDesk>({
        score: {computer: 0, user: 0},
        newCurrentComputerCard:card,
        newCurrentUserCard:card,
        newComputerCards:[card],
        newUserCards:[card]
    });
    const {userName} = useContext(AppContext);
    useEffect(() => {
        setState(getInitialState());
    }, []);
    const handleOnClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (state.newUserCards.length > 0 && state.newComputerCards.length > 0) {
            const [newCurrentUserCard, newUserCards] = shift(state.newUserCards);
            const [newCurrentComputerCard, newComputerCards] = shift(state.newComputerCards);
            const compare2 = compare(state.newCurrentUserCard, state.newCurrentComputerCard);
            switch (compare2) {
                case -1:
                    setState({
                        newCurrentUserCard,
                        newUserCards,
                        newCurrentComputerCard,
                        newComputerCards,
                        score: {computer: state.score.computer + 1, user: state.score.user}
                    });
                    break;
                case 0:
                    setState({
                        newCurrentUserCard,
                        newUserCards,
                        newCurrentComputerCard,
                        newComputerCards,
                        score: {computer: state.score.computer, user: state.score.user}
                    });
                    break;
                case 1:
                    setState({
                        newCurrentUserCard,
                        newUserCards,
                        newCurrentComputerCard,
                        newComputerCards,
                        score: {computer: state.score.computer, user: state.score.user + 1}
                    });
                    break;
            }
        } else {
            setScore(state.score);
        }
    }

    return (
        <div className={style.pageDesk}>
            <div
                className={`${style.header} ${style.headerDesk}`}>COMPUTER: {state.score.computer}</div>
            <div className={`${style.cart} ${style.cartDesk}`}>
                <img className={`${style.card2}`}
                     src={require(`./../../general/style/css/images/${state.newCurrentComputerCard.nameFile}`)}
                     alt={'the computer card'}/>
            </div>
            <div className={`${style.cart} ${style.cartDesk}`}>
                <img className={`${style.card2}`}
                     src={require(`./../../general/style/css/images/${state.newCurrentUserCard.nameFile}`)}
                     alt={'the user card'}/>
            </div>
            <div className={style.container}>
                <button className={`${style.button} ${style.buttonDesk}`}
                        onClick={handleOnClickButton}>next
                </button>
                <div
                    className={style.footer}>{state.score.user} :{(userName ?? 'undefined').toUpperCase()}</div>
            </div>
        </div>
    )
}

export {Desk};