
// import { MoreHoriz, Search, WidgetsRounded } from '@material-ui/icons'
import React from 'react';
import "./Header.css";
import {FiMoreHorizontal} from "react-icons/fi";
import {RxAvatar} from "react-icons/rx";
import {AiOutlineSearch} from "react-icons/ai";
import {CiGrid42} from "react-icons/ci";




const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <CiGrid42 />
                <h3>Microsoft Teams</h3>
            </div>

            <div className='header__center'>
                <AiOutlineSearch />
                <input placeholder='Search' />
            </div>
            <div className='header__right'>
                <FiMoreHorizontal />
                <RxAvatar />
            </div>
        </div>
    )
}

export default Header
