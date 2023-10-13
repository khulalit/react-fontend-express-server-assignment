import TextField from "@mui/material/TextField";


const SearchBar = ({setSearchQuery}:any) => (
    <form className="search-form" onSubmit={(e:any)=>e.preventDefault()}>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e : any) => {
          setSearchQuery(e.target.value);
        }}
        label="Search "
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      {/* <IconButton type="submit" aria-label="search">
        <BiSearchAlt/>
      </IconButton> */}
    </form>
);

export default SearchBar;