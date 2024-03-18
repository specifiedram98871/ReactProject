import { Button, Box,Flex, Input, Text } from '@chakra-ui/react'
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
    <Flex direction={'column'}  alignItems={'center'}>
    <Flex width={'400px'} direction={'row'} margin={'auto' }
    marginTop={'2rem'}>
      <Input
        padding={"0.5rem"}
        margin={'auto'}
        width={"100%"}
        height={"40px"}
        value={movie} onChange={(e) => handleMoviename(e.target.value)} placeholder='Search For  A Movie'  />
      {/* <Button colorScheme='green' variant='solid' onClick={hitApi} >Search</Button> */}
      <Button colorScheme='green' variant='solid' onClick={history} marginLeft={'10px'}>Add History</Button>
      </Flex>
      {
        moviehistory.length == 0 ? (
          <div>No data</div>
          ):
          <Box marginTop={'2rem'} border={'1px solid orange'} padding={'2rem'} minWidth={'400px'}> {moviehistory.map((movie) => (
            <ul key={movie.id}>
              <Text fontWeight={'bold'}
                textDecoration={'underline'}
                color='tomato'
                marginBottom={'20px'}
              >Your Search History:</Text>
              <li>
              {movie.movie}
            </li>
            </ul>
          ))} </Box>
      }
    </Flex>
  )
}

export default Searchbar
