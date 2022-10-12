import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {
    const quizs = useLoaderData().data;
    return (
    <div>
        <div className='my-2 container p-4 text-white bg-info rounded'>
        <h4>Here are some advantages of Online Quizzes. Taking online quizzes is becoming a huge success. But why is this such a huge success?</h4>
        <h4>
        What integrates people to use online quizzes instead of written quizzes?
        </h4>
        <h4>
        This article will tell you why this such a popular tool to use. And you may even want to do it yourself :)
        </h4>
        </div>
       
        <div className='container d-flex w-100 justify-content-center'>
            <div class="row  row-cols-lg-3  row-cols-md-2  row-cols-sm-1">
    
    { quizs.map(quiz =><TopicCard key={quiz.id} quizTopic={quiz}></TopicCard>)}
  </div>
  </div>
        </div>
    );
};

export default Home;