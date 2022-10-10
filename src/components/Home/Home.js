import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {
    const quizs = useLoaderData().data;
    return (
        <div className='container'>
            <div class="row row-cols-2">
    
    { quizs.map(quiz =><TopicCard key={quiz.id} quizTopic={quiz}></TopicCard>)}
  </div>
        </div>
    );
};

export default Home;