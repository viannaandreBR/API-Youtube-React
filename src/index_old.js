import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY='AIzaSyAuJOy9V3-Bu7tcSgc6sYZG91UMaOeav0Y';

// Create a new component. This component should produce
// some HTML
const App = () =>  {
  return (
    <div>

      <SearchBar />

    </div>;
  );

};

// Take this compoment´s generate HTML and pu it
// on the page (in the DOM)
//React.render(App);
ReactDOM.render(<App />, document.querySelector('.container') );
