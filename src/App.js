import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/quiz/:quizId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quiz></Quiz>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider
     router={router}
     ></RouterProvider>
    </div>
  );
}

export default App;
