import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_URL, API_config } from "../../Apifetch";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (input_search) => {
    setSearch(input_search);
    onSearchChange(input_search);
  };

  const handleOptionChange = (selectedOption) => {
    setSearch(""); // Reset the search state to empty string
  }

  const searchResults = (input_data) => {
    return fetch(
      `${API_URL}/cities?minPopulation=500000&namePrefix=${input_data}`,
      API_config
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.log("this is error", error));
  };

  return (
    <AsyncPaginate
      placeholder="Search"
      debounceTimeout={400}
      value={search}
      onChange={handleChange}
      loadOptions={searchResults}
      onBlur={handleOptionChange}
    />
  );
};

export default Search;
