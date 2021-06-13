import './search-box.styles.css'

const SearchBox = ({ placeholder, handleChange }) => {
    /* this.setState({searchField: e.target.value})    /// it has a CallBack function */

    return (
        <input className="search" type="search" placeholder={placeholder}
            onChange={handleChange} />
    )
}

export default SearchBox
