import React, { useState } from 'react'
import Card from './Card'
import { useRef } from 'react';

const Foreground = () => {
  // const data =[
  //   icon,description,filesize.closeorDownload tagdetails
  // ]
  const ref =useRef(null)
  const data = [
    { id:1,
      desc:"loremsdhsjbijfbfjbsifjbsfijbsf",
      fileSize:".9mb",
      close:true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor:"green"},

    },
    { id:2,
      desc:"loremsdhsjbijfbfjbsifjbsfijbsf",
      fileSize:".9mb",
      close:true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor:"green"},

    },
    { id:3,
      desc:"loremsdhsjbijfbfjbsifjbsfijbsf",
      fileSize:".9mb",
      close:true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor:"blue"},

    },
  ];
 
  return (
    <div ref ={ref} className='fixed top-0 left-0 w-full h-full p-5 z-[3] flex gap-10 flex-wrap'>
     {data.map((item)=>(
      <Card key={item.id} data={item}  reference ={ref}/>
))}
    </div>
  );
}

export default Foreground