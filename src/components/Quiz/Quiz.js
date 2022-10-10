import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizDetails = useLoaderData().data;
    const {logo,name,id,questions} = quizDetails;
    return (
        <div className='container'>
            <h1>Welcome to baby quiz !! </h1>

            <h3>{name}</h3>
            <img src={logo} alt="" />
            <h5>Question list</h5>

            {
                questions.map(q=><Question questionDetails={q}></Question>)
               
            }







            {console.log(quizDetails)}
        </div>
    );
};

export default Quiz;