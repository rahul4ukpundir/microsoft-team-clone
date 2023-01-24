import React from 'react';
import "./ContactRow.css";

const ContactRow = ({title, Icon}) => {
  return (
    <div className='contactRow'>
      <Icon/>
      <h4>{title}</h4>
    </div>
  )
}

export default ContactRow
