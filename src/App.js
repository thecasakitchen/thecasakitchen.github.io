import React from 'react';

import Body from './components/Body';

import './App.css';
import { AppContainer } from './components/Styles';

class App extends React.Component {
    render() {
        return (
            <AppContainer>
                <Body/>
            </AppContainer>
        );
    }
}

export default App;
