import {  CheckCircleIcon, EyeSlashIcon, StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import './question.css'

const Question = ({questionDetails}) => {
    const {question,options,correctAnswer} = questionDetails;
    let controler = 1;
    const [color,setColor] = useState('text-warning');
    const handleColor=()=>{

        setColor('bg-primary text-white');
    }
    
    return (
     
        
         <div className='border rounded mb-3 bg-info p-3'>
          
            <h4 className='fw-bolder'><StarIcon className='icon  text-primary'/>  {question}</h4> 
            
            <br />
            <br />
           {
                options.map(option=> <p onClick={handleColor} className='border rounded bg-success w-75 text-white p-2'> 
                <span className={`${color}`}>
                <CheckCircleIcon  className={` icon text-blue-500 me-3 text-warning`  }/>
                </span>
                 {option}</p>)
           }
            <br />
            <br />
            {controler===1?<p  className='border rounded bg-warning w-75 p-2'><span className='fw-bolder '>Correct Answer :</span> {correctAnswer}</p>:''}
      
          

           <EyeSlashIcon  className=" icon text-blue-500"/>
           
            
            

            {console.log(questionDetails)}
        </div>
       
    );
};

export default Question;