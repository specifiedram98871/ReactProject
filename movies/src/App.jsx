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
          'X-RapidAPI-Key': 'Your key',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        },
      };

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

  return (
    <Box 
    display={"flex"}
    justifyContent={"center"}
    flexDirection={"column"}
    >
    <Searchbar movie={moviename} handleMoviename={setMoviename} hitApi={fetchData} />
    {
      movielist.length === 0 ?(  <Box display="flex" justifyContent={"center"} width="100%">
      <Text>No Data</Text>
  </Box>) : 
    
    (<Grid templateColumns='repeat(2, 1fr)' gap={5}>
      {movielist.map((movie) => (
        <div
         key={movie.id}>
          <Text>{movie.l}</Text>
          <Image 
          width={"300px"}
          height={"300px"}
          margin={"30px"}
          alt="movie Image" src={movie.i.imageUrl} />
        </div>
      ))}
    </Grid>)}
    </Box>
  );
}

export default App;
