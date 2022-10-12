import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// const data = [{name: 'Page A', total: 400},
// {name: 'Page b', total: 300},
// {name: 'Page c', total: 200}
// ,{name: 'Page d', total: 350}];

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>this is statistics section</h1>


            <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </div>
    );
};

export default Statistics;