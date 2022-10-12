import {   EyeSlashIcon, StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import Options from '../Options/Options';
import './question.css'

const Question = ({questionDetails}) => {
    const {question,options,correctAnswer} = questionDetails;
    let i=true;
    var optionsMap = [];
    
    for(let i=0;i<options.length;++i){
       
        var temp = {
            "option":options[i],
            "isSelect":false
        }
        optionsMap.push(temp);
    }
    // console.log("LOG:: printing options");
    // console.log(optionsMap);
    
   
    const [style,setStyle] = useState('d-none')


    const handleStyle=()=>{
        
        // i?:setStyle('d-none')
        // i=!i
        if(i){
            i=!i;
            setStyle('d-block');
        }else{
            i=!i;
            setStyle('d-none');
        }
        
    }
    
    return (
     
        
         <div className='border rounded mb-3 bg-info p-3'>
          
            <h4 className='fw-bolder'><StarIcon className='icon  text-primary'/>  {question}</h4> 
            
            <br />
            <br />
           
              <Options optionsMap={optionsMap}  options={options} correctAnswer={correctAnswer}></Options>
           
            <br />
            <br />
           <p  className={`border ${style} rounded bg-warning w-75 p-2`}><span className='fw-bolder '>Correct Answer :</span> {correctAnswer}</p>
      
          

           <EyeSlashIcon onClick={handleStyle}  className=" icon text-blue-500"/>
           
            
            

         
        </div>
       
    );
};

export default Question;