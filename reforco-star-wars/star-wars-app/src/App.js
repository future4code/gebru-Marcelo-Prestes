/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';


function App() {
  const [currentPage, setCurrentPage] = useState("List")
  const [detailsUrl, setDetailsUrl] = useState("")

  const goToDetailsPage=(url)=> {
    setCurrentPage('details')
    setDetailsUrl(url)
  }


  const goToListPage=()=> {
    setCurrentPage('List')

  }
  
  

  function selectPage () {
    if(currentPage === "List"){
      return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
     } else {
       // eslint-disable-next-line no-undef
       return <CharacterDetailPage goToListPage={goToListPage} url={detailsUrl}/>
     }
  }

  return (
    <div className="App">
      {selectPage()}
      
    </div>
  );
}

export default App;
