import React from "react";
import SearchField from "./searchField";

export default {
    title: 'Component/SearchField',
    component: SearchField,
  };

  export const Search =() :JSX.Element => <SearchField value="" onChange={() => console.log('Test')} />