/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import CharacterListPage from './pages/CharacterDetailPage/CharacterDetailPage.js';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage.js';

function App() {
  const [currentPage, setCurrentPage] = useState("List")

  const selectPage = () =>{
    if(currentPage === "List"){
      return <CharacterListPage/>
     } else {
       return <CharacterDetailPage/>
     }
  }

  return (
    <div className="App">
      {selectPage()}
      
    </div>
  );
}

export default App;
