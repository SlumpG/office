import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './Header.css'
import NavBar from '../NavBar/NavBar'
const Header = () => {
    return (
        <div className='Header'>
               <h1>Office</h1>
            <NavBar/>
            <div className='InputAndButton'>
            <Input />
            <Button />
            </div>
        </div>
    )
}

export default Header
