import React from 'react';
import { Link } from 'react-router-dom';
import './topicCard.css'

const TopicCard = ({quizTopic}) => {
    const {name,logo,id}=quizTopic;
    return (
        
         <div className="col">
            
          <div className="card cardStyle  m-4 rounded p-2" >
             <img  src={logo} className="card-img-top p-2 img-fluid bg-info" alt="..."/>
             <div className="card-body">
             <h5 className="card-title">{name}</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <button  className="btn btn-info "><Link  to={`/quiz/${id}`}>Start Quiz</Link></button>
          </div>
     </div>
            
            </div>
    
        
    );
};

export default TopicCard;