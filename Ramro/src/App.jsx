import { useState, useEffect } from 'react'
// import { Box } from '@chakra-ui/react'
import axios from 'axios'
import RecipeCard from './component/News'

const App = () => {
  const baseUrl = "https://newsdata.io/api/1/news?"
  const [country, setCountry] = useState("England")
  const [newsList, setNewsList] = useState([])
  const API_KEY = "pub_28478c0d484bb4af24436467ead3b52e91765"
  
  const handleRequest =(newcountry)=>{
    setCountry(newcountry);
  }
  useEffect(() => {
    // Fetch news articles whenever the country changes
    axios.get(`${baseUrl}&apikey=${API_KEY}&q=${country}`).then((response) => {
      setNewsList(response.data.results)
    }).catch(() => {
      
    })
  }, [country]) // <-- Add "country" to the dependency array

  return (
    <>
       <RecipeCard  newsList={newsList} handleRequest={handleRequest}/>
    </>
  );
};

export default App

