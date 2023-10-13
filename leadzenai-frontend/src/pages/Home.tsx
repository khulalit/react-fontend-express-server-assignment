import React from "react";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import { SelectChangeEvent } from '@mui/material/Select';
import SelectOption from "../components/Select";
import '../App.css';

function Home() {
  const [option, setOption] = React.useState('name');
  const [search, setSearch] = React.useState('');
  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };
  console.log(search)
  return (
    <div className="app">
      <div className="header">
        <SelectOption handleChange={handleChangeOption} option={option}/>
        <SearchBar setSearchQuery={setSearch}/>
      </div>
      <UserList search={search} option={option}/>
    </div>
  )
}

export default Home;
