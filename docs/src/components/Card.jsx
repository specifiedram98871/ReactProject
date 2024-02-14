import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


const Card = ({data, reference}) => {
  //  const data = props.data || {};
  //  const tag = props.data.tag.isOpen;
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.3}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/80 text-white px-5 py-10 overflow-hidden'>
      <FaRegFileAlt /> {/* Icon should be wrapped within the parent div */}
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0  w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-5'>
          <h5>{data.fileSize}</h5>
          <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
            {
              data.close ? <IoClose />:<GoDownload size="0.7em" color='#fff' />
            }
             {/* Adjusted size prop */}
          </span>
        </div>
         {
             data.tag.isOpen && (
           <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>)
}
       
      </div>
    </motion.div>
  );
}

export default Card;
