import {createContext} from "react";
import {IContext} from './AppContextWrapper';

export const AppContext = createContext<IContext>({} as IContext);