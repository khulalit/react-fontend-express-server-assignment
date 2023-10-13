import React from 'react';
import './header.css';
interface HeaderPropsType{
  setQuery: React.SetStateAction<any>,
  setSearchBy: React.SetStateAction<any>,
}
export default function Header({setQuery, setSearchBy} : HeaderPropsType) {
  return (
    <header className='_header'>
        <select placeholder='Selet option' data-testid="select" defaultValue={'Search By'} onChange={(e)=>{
          setSearchBy(e.target.value)
        }}>
            <option disabled>
                Search By
            </option>
            <option value="name">
                Company Name
            </option>
            <option value="contactPerson">
                Contact Person
            </option>
            <option value="city">
                City
            </option>
            <option value="zipcode">
                Zipcode
            </option>
        </select>
        <input type='text' data-testid="input-search" placeholder='Search' onChange={(e)=>setQuery(e.target.value)}/>
    </header>
  )
}
