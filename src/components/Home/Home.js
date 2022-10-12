import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {
    const quizs = useLoaderData().data;
    return (
        <div className='container d-flex w-100 justify-content-center'>
            <div class="row  row-cols-lg-3  row-cols-md-2  row-cols-sm-1">
    
    { quizs.map(quiz =><TopicCard key={quiz.id} quizTopic={quiz}></TopicCard>)}
  </div>
        </div>
    );
};

export default Home;