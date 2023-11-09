// import {TCard} from './../components/desk/Desk';

type TFCreateCardsPack = () => Array<TCard>;

type TSuit = 'none' | 'diamonds' | 'clubs' | 'hearts' | 'spades';
type TValues = '0' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';

const suits: Array<TSuit> = ['none', 'diamonds', 'clubs', 'hearts', 'spades'];
const values: Array<TValues> = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const separator: string = '_of_';
const extension: string = '.png';

type TCard = {
    toCompare: number
    value: TValues;
    nameFile: string;
    suit: TSuit;
}


type TFCreateCardsPack2 = () => Array<TCard>

function createCardsPack(): Array<TCard> {
    const array = [];
    for (let i = 1; i < values.length; i++) {
        for (let j = 1; j < suits.length; j++) {
            let card: TCard = {
                toCompare: i,
                value: values[i],
                nameFile: `${values[i]}${separator}${suits[j]}${extension}`,
                suit: suits[j]
            };
            array.push(card);
        }
    }
    return array;
}

function getInitialCard() {
    return {toCompare: 0, value: values[0], nameFile: `card.jpg`, suit: suits[0]};
}

export {createCardsPack, getInitialCard, type TFCreateCardsPack2, type TCard};