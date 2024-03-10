import React, { useState } from 'react'

import {Box, Grid, Image, Text,Input,Button} from "@chakra-ui/react"
import { Spinner } from "@chakra-ui/spinner";
const RecipeCard = ({newsList,handleRequest}) => {
     
     const[newsl,setnewslList]=useState('')
     console.log(newsl);

     const handlebutton =(e)=>{
        handleRequest(newsl)
        console.log(newsl)
     }

  return (
    <>
     <Input
          type="text"
          placeholder="Add a todo..."
          value={newsl}
          onChange={(e) => setnewslList(e.target.value)}
        />
    <Button type='submit'  onClick={()=>{handlebutton(newsl)}}>Submit</Button>
    {newsList.length ===0?
     <Box  display="flex"  justifyContent={"center"} width="100%">
       <Spinner
         size='xl'
       />
</Box>
    :
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {newsList.map((news)=>{
            return(
              
                <div key={news.article_id}>
                    
                <Text>
                {news.title}
    
                </Text> 
                <Image alt="food image" src={news.image_url}/>
                </div>
            )
        })
       } 
    </Grid>
}
        </>
   
  )
}

export default RecipeCard
