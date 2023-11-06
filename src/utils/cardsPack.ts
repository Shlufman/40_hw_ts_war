// import {TCard} from './../components/desk/Desk';

type TFCreateCardsPack = () => Array<TCard>;

type TSuit = 'diamonds' | 'clubs' | 'hearts' | 'spades';
type TValues = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';

const suits: Array<TSuit> = ['diamonds', 'clubs', 'hearts', 'spades'];
const values: Array<TValues> = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const separator: string = '_of_';
const extension:string ='.png';

type TCard = {
    toCompare: number
    value: TValues;
    nameFile: string;
    suit: TSuit;
}


type TFCreateCardsPack2 = () => Array<TCard>

function createCardsPack():Array<TCard> {
    const array = [];
    for(let i=0;i<values.length;i++){
        for (let j=0;j<suits.length;j++){
            let card: TCard = {toCompare:i,value:values[i],nameFile: `${values[i]}${separator}${suits[j]}${extension}`,suit:suits[j]};
            array.push(card);
        }
    }
    return array;
}

export {createCardsPack, type TFCreateCardsPack2, type TCard};