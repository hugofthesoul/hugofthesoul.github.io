import axios from 'axios';

import React from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import countries from '../data/countries.json';

class FilterBar extends React.Component {

  constructor(props){
    super(props);

    this.sortByFields = [{
      display: "Date",
      field: "date"
    }];

    this.state = {
      selectedCountry: {
        name: "--",
        code: "--"
      },
      sortBy: {
        field: this.sortByFields[0],
        asc: true
      }
    };

    this.onStatisticsResultsChange = props.onStatisticsResultsChange;
    this.onSearchResultsChange = props.onSearchResultsChange;
    this.searchQuery = React.createRef();
    this.toggleAsc = this.toggleAsc.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onCountrySelect(item){
    return (e) =>{
      this.setState({
        selectedCountry: item
      });
    }
  }

  onSortBySelect(item){
    return (e) => {
      this.setState({
        sortBy: {
          field: item,
          asc: this.state.sortBy.asc
        }
      });
    }
  }

  toggleAsc(e){
    this.setState({
      sortBy: {
        field: this.state.sortBy.field,
        asc: !this.state.sortBy.asc
      }
    });
  }

  onSearch(e){
    var component = this;

    axios({
      method: 'get',
      url: 'https://api.covid19api.com/summary',
      responseType: 'json'
    }).then(function (response) {
      // handle success
      for (var i in response.data.Countries){
        if (response.data.Countries[i].Country === component.state.selectedCountry.name){
          component.onStatisticsResultsChange(response.data.Countries[i]);
        }
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      responseType: 'json',
      params: {
        // TODO: How to inject API key from GitHub secrets?
        key: "",
        part: "snippet",
        maxResults: 3,
        order: this.state.sortBy.field.field,
        regionCode: this.state.selectedCountry.code,
        relevanceLanguage: this.state.selectedCountry.language,
        safeSearch: "strict",
        type: "video",
        videoDuration: "short",
        videoEmbeddable: true,
        q: this.searchQuery.current.value
      }
    }).then(function (response) {
      // handle success
      console.log(response);
      component.onSearchResultsChange({ videos: response.data.items });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  render(){
    const UpArrow = () => <span>&uarr;</span>;
    const DownArrow = () => <span>&darr;</span>;

    const sortByItems = this.sortByFields.map((item) =>
      <NavDropdown.Item key={item.field} onClick={this.onSortBySelect(item)}>{item.display}</NavDropdown.Item>
    );

    const countryItems = countries.map((item) =>
      <NavDropdown.Item key={item.code} onClick={this.onCountrySelect(item)}>
        {item.name}
      </NavDropdown.Item>
    );

    return (
      <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavDropdown id="dropdown-country" title={"Country: " + this.state.selectedCountry.name}>
              {countryItems}
            </NavDropdown>
          </Nav>
          <Nav>
            <Form inline>
              <Form.Control ref={this.searchQuery} type="text" placeholder="Topic" className="mr-sm-2" />
              <Button type="button" onClick={this.onSearch}>Search</Button>
            </Form>
          </Nav>
          <Nav>
            <NavDropdown id="dropdown-sortby" title={"Sort by: " + this.state.sortBy.field.display}>
              {sortByItems}
            </NavDropdown>
            <Nav.Item>
              <Nav.Link onClick={this.toggleAsc}>{this.state.sortBy.asc ? <UpArrow /> : <DownArrow />}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default FilterBar;
