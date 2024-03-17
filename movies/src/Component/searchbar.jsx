import { Button, Box,Flex, Input } from '@chakra-ui/react'
import { useState } from 'react';
const Searchbar = ({ movie, handleMoviename, hitApi }) => {
  const [moviehistory, setMoviehistory] = useState([]);

  const history = (e) => {
    e.preventDefault();
    hitApi();
    const moviename = {
      id: Date.now(),
      movie:movie
    };
      setMoviehistory([...moviehistory, moviename]);
      console.log(moviehistory);
    }
  return (
    <Flex width={'400px'} margin={'auto'}
    marginTop={'2rem'}>
      <Input
        padding={"0.5rem"}
        margin={'auto'}
        width={"100%"}
        height={"40px"}
        value={movie} onChange={(e) => handleMoviename(e.target.value)} placeholder='Search For  A Movie'  />
      {/* <Button colorScheme='green' variant='solid' onClick={hitApi} >Search</Button> */}
      <Button colorScheme='green' variant='solid' onClick={history} marginLeft={'10px'}>Add History</Button>
      <Box> {moviehistory.map((movie) => (
        <h1 key={movie.id}>{movie.movie }</h1>
      ))} </Box>
    </Flex>
  )
}

export default Searchbar
