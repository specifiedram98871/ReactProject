import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'

const Movingdot = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

  return (
      <Box onPointerMove={(e) => { setPosition({ x: e.clientX, y: e.clientY }) }}
          position={'relative'}
          width={'100vw'} height={'100vh'}
      >
          <div style={{position:'absolute', left:'0', top:'0',
              width:'20px', height:'20px', backgroundColor:'red',
              transform:`translate(${position.x}px, ${position.y}px)`,
          borderRadius:'50%'}}>
              
          </div>
      </Box>
  )
}

export default Movingdot