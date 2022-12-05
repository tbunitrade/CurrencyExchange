import React from 'react'
import './navbar.scss'

export const Navbar = () =>{

    return (
        <nav>
            <ul>
                <li><a href='/'>Головна</a> </li>
                <li><a href='/calc'>Калькулятор</a> </li>
                <li><a href='/sample'>Вибірка</a> </li>
                <li><a href='/info'>Інформація</a> </li>
            </ul>
        </nav>
    )
}