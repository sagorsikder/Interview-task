import React from 'react';
import { useState } from 'react';
import {  CheckCircleIcon } from '@heroicons/react/24/solid'




const Options = ({optionsMap,options,correctAnswer}) => {
    const [color,setColor] = useState(0);
    const handleAns=(ans)=>{
        console.log("Tapped");
        ans.option===correctAnswer?alert("Correct Answer"):alert('Wrong Answer');
        for(let i=0; i<options.length;++i){
            
            if(options[i]===ans.option){
                optionsMap[i].isSelect = true;
                
                
            }else{

                optionsMap[i].isSelect = false;
                
            }
        }
        setColor(Math.random());
        console.log(optionsMap);
     

        
    }

    return (
        <div>
            {/* <p onClick={()=>handleAns(option)} className={`border rounded  w-75  p-2 ${option.isSelect?"bg-primary":"bg-success"}`}> 
                <span >
                <CheckCircleIcon  className={` icon text-blue-500 me-3 text-warning`  }/>
                </span>
            
                 {option.option }</p> */}


                 {
                    optionsMap.map(option=><p onClick={()=>handleAns(option)} className={`border rounded  w-75  p-2 ${option.isSelect?"bg-primary":"bg-success"}`}> 
                    <span >
                    <CheckCircleIcon  className={` icon text-blue-500 me-3 text-warning`  }/>
                    </span>
                
                     {option.option }</p>)
                 }
        </div>
    );
};

export default Options;