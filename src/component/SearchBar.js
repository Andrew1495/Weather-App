const SearchBar = ({handleSearchBar, userInput, handleUserInput}) => {



    return(
        <div>
            <form className="search" onSubmit={handleSearchBar}>
                <input type="text" id="search" value={userInput} onChange={handleUserInput} placeholder="Enter a city" ></input>
                <button type="submit"> <i className="fa fa-search"></i></button>
            </form>
        </div>
    )


};




export default SearchBar