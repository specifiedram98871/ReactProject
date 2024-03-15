import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, GridItem,Input, Image, Text } from '@chakra-ui/react';
import Searchbar from './Component/searchbar';

function App() {
  const [moviename, setMoviename] = useState('');
  const [movielist, setMovieList] = useState([]);
  
 
  // The error seems to be occurring because you're assigning the result of useEffect to fetchData, which is incorrect. useEffect doesn't return anything, so fetchData ends up being undefined. Instead, you should define fetchData as a separate function and then use it inside useEffect for data fetching.
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: `https://imdb8.p.rapidapi.com/auto-complete?q=${moviename}`,
        headers: {
          'X-RapidAPI-Key': '2f944a4464msh572a9f938e89f06p10d411jsnedd4e2a8c2ec',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      };
      console.log(options);
      try {
        const response = await axios.request(options);
        setMovieList(response.data.d);
      } catch (error) {
        console.error(error);
      }
    };
    
    // useEffect(() => {
      //   fetchData();
      // }, [moviename]);
      // returns undefined value in useEffect
      
      // console.log(process.env.REACT_APP_RAPID_API_KEY);
  return (
    <Box 
      display={'block'}
      width={'100%'}
      margin={'auto'}
    >
    <Searchbar movie={moviename} handleMoviename={setMoviename} hitApi={fetchData} />
    {
      movielist.length === 0 ?(  <Box display="flex" justifyContent={"center"} width="100%">
      <Text>No Data</Text>
  </Box>) : 
    
          (
            <Grid
               width={'1000px'}
               margin={'auto'}
               marginTop={'2rem'}
               templateColumns='repeat(3, 1fr)' gap={4}>
      {movielist.map((movie) => (
        <Box
          
         key={movie.id}>
          <Text fontWeight={'bold'}
            fontSize={'18px'}
            fontFamily={'cursive'}
            textColor={'chocolate'}
          >{movie.l}:</Text>
          <Image 
          width={"250px"}
          height={"250px"}
          marginTop={'10px'}
          alt="movie Image" src={movie.i.imageUrl} />
        </Box>
      ))}
          </Grid>)}
      
    </Box>
  );
}

export default App;
