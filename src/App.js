import React from 'react'
import './App.scss';
import {Layout} from './components/layout/Layout'

import CHF from './images/CHF.png'
import CNY from './images/CNY.png'
import EUR from './images/EUR.png'
import GBP from './images/GBP.png'
import JPY from './images/JPY.png'
import UAH from './images/UAH.png'
import USD from './images/USD.png'
import {RateContext} from "./context/RateContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            base: 'USD',
            rate:'',
            date:'',
            currency: {
                USD: {name: 'Доллар США', flag: USD, course: '9999999'},
                CNY: {name: 'Китайский Юань', flag: CNY, course: '9999999'},
                EUR: {name: 'Евро', flag: EUR, course: '9999999'},
                GBP: {name: 'Фунт Стерлингов', flag: GBP, course: '9999999'},
                JPY: {name: 'Японская Йена', flag: JPY, course: '9999999'},
                UAH: {name: 'Украинская Гривна', flag: UAH, course: '9999999'},
                CHF: {name: 'Швейцарский Франк', flag: CHF, course: '9999999'},
            },
        }
    }

    render() {

        return(
            <RateContext.Provider value={{state: this.state}}>
                <Layout/>
            </RateContext.Provider>

        )
    }
}

export default App
