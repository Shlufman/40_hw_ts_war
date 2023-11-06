import React, {Component} from 'react';
import './App.css';
import {Router} from "./general/router/Router";
import {AppContextWrapper} from "./general/context/AppContextWrapper";

interface PropsApp {

}

interface StateApp {

}

class App extends Component<PropsApp, StateApp> {
    render(): React.ReactNode {
        return (
            <AppContextWrapper>
                <Router/>
            </AppContextWrapper>
        )
    }
}
export default App;
