import React from "react";
import SearchField from "./searchField";

export default {
    title: 'Component/SearchField',
    component: SearchField,
  };

  export const Search =() :JSX.Element => <SearchField locations="" setLocations={() => console.log('TestOnChange')} handleClick={() => console.log('TestOnChange')} />