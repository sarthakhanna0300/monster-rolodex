import React from 'react';
import './searchstyle.css';

export const SearchBox = ({placeholder,Handlechange}) => (
    <input className='search' type='search' 
    placeholder={placeholder} 
    onChange={Handlechange}
      ></input>
);   