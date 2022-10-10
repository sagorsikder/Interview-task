import React from 'react';
import './topicCard.css'

const TopicCard = ({quizTopic}) => {
    const {name,logo,total}=quizTopic;
    return (
        
            <div class="col">
            
            <div class="card cardStyle  m-3 rounded p-1" >
  <img src={logo} class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  class="btn btn-primary">{total}</button>
  </div>
</div>
            
            </div>
    
        
    );
};

export default TopicCard;