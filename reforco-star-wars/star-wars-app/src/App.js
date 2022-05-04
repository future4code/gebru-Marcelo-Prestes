/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';


function App() {
  const [currentPage, setCurrentPage] = useState("List")

  function selectPage () {
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
