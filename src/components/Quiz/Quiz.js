import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './quiz.css'

const Quiz = () => {
    const quizDetails = useLoaderData().data;
    const {logo,name,questions} = quizDetails;
    return (
        <div className='container mt-3'>
            <h1 className='text-center mb-3'>Welcome to baby quiz !! </h1>

            <h3 className='text-center mb-3'>{name}</h3>
           <div className='d-flex w-100 justify-content-center mb-5'>
           <img className='img-fluid bg-info rounded' src={logo} alt="" />
           </div>
            <h2 className='fw-bold text-center bg-warning p-3 rounded'>Question list</h2>

            {
                questions.map(q=><Question questionDetails={q}></Question>)
               
            }







            {console.log(quizDetails)}
        </div>
    );
};

export default Quiz;