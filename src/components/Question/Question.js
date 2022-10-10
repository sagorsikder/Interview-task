
import {  EyeSlashIcon } from '@heroicons/react/24/solid'
import './question.css'

const Question = ({questionDetails}) => {
    const {question,options,correctAnswer} = questionDetails;
    let controler = 1;
    
    return (
     
        
         <div className='border rounded mb-3 bg-warning p-3'>
            {question } 
            <br />
            <br />
           {
                options.map(option=> <p>{option}</p>)
           }
            <br />
            <br />
            {controler===1?<p>correct answer : {correctAnswer}</p>:''}
      
          

           <EyeSlashIcon  className=" icon text-blue-500"/>
           
            
            

            {console.log(questionDetails)}
        </div>
       
    );
};

export default Question;