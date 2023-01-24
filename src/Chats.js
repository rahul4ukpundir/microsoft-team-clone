import React from 'react';
import "./Chats.css";
import ContactRow from './ContactRow';
import {RxAvatar} from "react-icons/rx";
const Chats = () => {
  return (
    <div className='chats'>
      <div className='chat__contacts'>
      <ContactRow title="Rahul Pundir"  Icon={RxAvatar}/>
      <ContactRow title="Meenakshi Pundir"  Icon={RxAvatar}/>
      <ContactRow title="Karn Singh"  Icon={RxAvatar}/>
      <ContactRow title="Owel Khan"  Icon={RxAvatar}/>
      <ContactRow title="Nikhil Grag"  Icon={RxAvatar}/>
      <ContactRow title="Kapil Pundir"  Icon={RxAvatar}/>
      <ContactRow title="Pelu Pundir"  Icon={RxAvatar}/>
      <ContactRow title="Sunny Pundir"  Icon={RxAvatar}/>
      <ContactRow title="Khush Pundir"  Icon={RxAvatar}/>
     
      <ContactRow title="Ankita Singh"  Icon={RxAvatar}/>
      </div>
      <div className='chat__message'></div>
    </div>
  )
}

export default Chats
