import { Box, Text,Button, Flex, Input } from '@chakra-ui/react'

const Searchbar = ({movie,handleMoviename,hitApi}) => {
    
  return (
    <Flex width={'400px'} margin={'auto'}
    marginTop={'2rem'}>
      <Input
        padding={"0.5rem"}
        margin={'auto'}
        width={"100%"}
        height={"40px"}
        value={movie} onChange={(e) => handleMoviename(e.target.value)} placeholder='Search For  A Movie'  />
      <Button colorScheme='green' variant='solid' onClick={hitApi}>Search</Button>
    </Flex>
  )
}

export default Searchbar
