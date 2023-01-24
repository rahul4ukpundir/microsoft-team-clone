import React from 'react';
import SideBarRow from './SideBarRow';
import "./SideBar.css";
import { HiOutlineBell } from "react-icons/hi";
import {BsChatText} from "react-icons/bs";
import {RiTeamLine} from "react-icons/ri";
import {IoCallOutline} from "react-icons/io5";
import {AiOutlineFile} from "react-icons/ai";
import{IoCalendarOutline} from "react-icons/io5";


const SideBar = () => {
  return (
    <div className='sideBar'>
      <SideBarRow title="Activity" Icon ={HiOutlineBell} />
      <SideBarRow title="Chat" Icon ={BsChatText} />
      <SideBarRow title="Teams" Icon ={RiTeamLine} />
      <SideBarRow title="Calender" Icon ={IoCalendarOutline} />
      <SideBarRow title="Calls" Icon ={IoCallOutline} />
      <SideBarRow title="Files" Icon ={AiOutlineFile} />
    </div>
  )
}

export default SideBar
