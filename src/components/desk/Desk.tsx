import React, {Component, MouseEventHandler} from 'react';
import style from "./Desk.module.css";
import {TFSetScore,TScore} from '../../general/context/AppContextWrapper'
import {createCardsPack, TCard} from "../../utils/cardsPack";
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

type TFSetCardsPack = () => Array<number>;

class Desk extends Component<PropsDesk, StateDesk> {

    constructor(props: PropsDesk) {
        super(props);

        const newCardsPack = createCardsPack();
        this.shuffle(newCardsPack);
        const [temptNewUserCards, tempNewComputerCards] = this.separateCards2(newCardsPack);
        const [newCurrentUserCard, newUserCards] = this.shift(temptNewUserCards);
        const [newCurrentComputerCard, newComputerCards] = this.shift(tempNewComputerCards);

        this.state = {
            score: {computer: 0, user: 0},
            newCurrentComputerCard,
            newCurrentUserCard,
            newComputerCards,
            newUserCards
        };
    }

    handleOnClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (this.state.newUserCards.length > 0 && this.state.newComputerCards.length > 0) {
            const [newCurrentUserCard, newUserCards] = this.shift(this.state.newUserCards);
            const [newCurrentComputerCard, newComputerCards] = this.shift(this.state.newComputerCards);
            const compare2 = this.compare(this.state.newCurrentUserCard, this.state.newCurrentComputerCard);
            switch (compare2) {
                case -1:
                    this.setState({
                        newCurrentUserCard,
                        newUserCards,
                        newCurrentComputerCard,
                        newComputerCards,
                        score: {computer: this.state.score.computer + 1, user: this.state.score.user}
                    });
                    break;
                case 0:
                    this.setState({
                        newCurrentUserCard,
                        newUserCards,
                        newCurrentComputerCard,
                        newComputerCards,
                    });
                    break;
                case 1:
                    this.setState({
                        newCurrentUserCard,
                        newUserCards,
                        newCurrentComputerCard,
                        newComputerCards,
                        score: {computer: this.state.score.computer, user: this.state.score.user + 1}
                    });
                    break;
            }
        } else {
            this.props.setScore(this.state.score);
        }

    }

    shift = (array: Array<TCard>): [TCard, Array<TCard>] => {
        if (array.length > 0) {
            const element = array[0];
            const newArray = [...array];
            newArray.shift();
            return [element, newArray];
        } else {
            throw new Error();
        }
    }

    compare = (userCard: TCard, computerCard: TCard) => {
        if (userCard.toCompare > computerCard.toCompare) {
            return 1
        } else if (userCard.toCompare < computerCard.toCompare) {
            return -1
        } else {
            return 0
        }
    }

    shuffle = (array: Array<TCard>) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    separateCards2 = (array: Array<TCard>) => {
        const userCards: Array<TCard> = [];
        const computerCards: Array<TCard> = [];
        for (let i = 0; i < (array.length - 1) / 2; i++) {
            userCards.push(array[i * 2]);
            computerCards.push(array[i * 2 + 1]);
        }
        console.log('newUserCards', userCards);
        console.log('newComputerCards', computerCards);
        return [userCards, computerCards];
    }

    render():React.ReactNode {
        return (
            <AppContext.Consumer>
                {
                    value => (
                        <div className={style.pageDesk}>
                            <div className={`${style.header} ${style.headerDesk}`}>COMPUTER: {this.state.score.computer}</div>
                            <div className={`${style.cart} ${style.cartDesk}`}>
                                <img className={`${style.card2}`} src={require(`./../../general/style/css/images/${this.state.newCurrentComputerCard.nameFile}`)} alt={'the computer card'}/>
                            </div>
                            <div className={`${style.cart} ${style.cartDesk}`}>
                                <img className={`${style.card2}`} src={require(`./../../general/style/css/images/${this.state.newCurrentUserCard.nameFile}`)} alt={'the user card'}/>
                            </div>
                            <div className={style.container}>
                                <button className={`${style.button} ${style.buttonDesk}`} onClick={this.handleOnClickButton}>next
                                </button>
                                <div className={style.footer}>{this.state.score.user} :{(value.userName??'undefined').toUpperCase()}</div>
                            </div>
                        </div>
                    )
                }
            </AppContext.Consumer>

        );
    }
}

export {Desk};