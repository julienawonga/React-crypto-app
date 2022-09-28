import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {Container } from '@chakra-ui/react';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const [coins, setCoins] = React.useState([]);
  React.useEffect(() => {
      fetch('https://api.coinstats.app/public/v1/coins?skip=0&currency=USD')
      .then(res => res.json())
      .then(data => {
          setCoins(data.coins)
      })
      .catch(err => console.log(err))
  }, [])

  const filtedCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <Container maxW='auto' bg={isDarkMode ? '#1a202c' : 'whiteAlpha.800'}>
        <Header 
                isDarkMode={isDarkMode} 
                setIsDarkMode={setIsDarkMode} 
                search={search}
                setSearch={setSearch}
                />
        <Main coins={filtedCoins}/>
    </Container>
       
  );
}

export default App;
