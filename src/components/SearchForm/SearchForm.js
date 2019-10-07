import React from 'react';
import './SearchForm.css';
class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
    this.searchTopic = '';
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  };
  
  searchSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.search.toLowerCase());
    this.setState({ search: ''})
  };

  render() {
    return (
      <form className='searchForm'>
        <input 
          type='text'
          placeholder='Search term'
          name='search'
          value={this.state.search} 
          onChange={e => this.handleChange(e)}
        />

        <button 
          className='searchButton'
          onClick={(e) => this.searchSubmit(e)}>Search</button>
      </form>
    )
  }
}

export default SearchForm;