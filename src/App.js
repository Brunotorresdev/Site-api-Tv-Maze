import styled from "styled-components";
import ShowDetailScreen from './screens/ShowDetailScreen/ShowDetailScreen'
import ShowListScreen from "./screens/ShowListScreen/ShowListScreen";
import Header from "./components/Header/Header";
import ShowCard from "./components/ShowCard/ShowCard";
import { useState } from "react";

const ScreenContainer = styled.div`
  padding: 60px 0;
`

function App() {
  const [currentScreen, setCurrentScreen] = useState('list')
  const [clickedShowId, setClickedShowId] = useState('')

  const chooseCurrentScreen  = () =>{
    switch(currentScreen){
      case 'list':
        return <ShowListScreen  goToDetail={goToDetail} />
      case 'detail':
        return <ShowDetailScreen id={clickedShowId} />
        default:
        return <div>Erro: Página não encontrada</div>
    }
  }

  const goToDetail = (id) =>{
    setCurrentScreen('detail', setClickedShowId(id))
  }

  const goToList = () =>{
    setCurrentScreen('list')
  }

  return (
    <ScreenContainer>
      <Header showButton={currentScreen === 'detail'} goBack={goToList} />
      {chooseCurrentScreen()}
      
    </ScreenContainer>
  );
}

export default App;
