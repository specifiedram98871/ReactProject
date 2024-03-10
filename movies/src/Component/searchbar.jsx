import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const Searchbar = ({movie,handleMoviename,hitApi}) => {
    
  return (
    <Box >
    <Input value={movie} onChange={(e) => handleMoviename(e.target.value)}   placeholder='medium size' size='md' />
    <Button onClick={hitApi}>Search</Button>
    </Box>
  )
}

export default Searchbar
