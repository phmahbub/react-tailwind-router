import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Students from './components/Students/Students';
import Countries from './components/Countries/Countries';
import Main from './layout/Main';
import CountryDetails from './components/Countries/CountryDetails';

function App() {
  const router = createBrowserRouter([
    {path:'/',
    element: <Main></Main>,
    children:[
 
    {path:'/home', element:<Home></Home>},
    {path:'/about', element:<About></About>},
    {path:'/students', 
    element:<Students></Students>},
    {path:'/countries',
    loader: async()=>{
      return fetch('https://restcountries.com/v3.1/all')
    },
    element:<Countries></Countries>},
    {
      path:'/countries/:name',
      loader: async({params})=>{
        return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
      },
      element:<CountryDetails></CountryDetails>
    }
    ]}
  ])
  return (
    <div className="App">
      <div className='mx-9 rounded p-5 my-6'>
      <RouterProvider router={router}></RouterProvider></div>
      
    </div>
  );
}

export default App;
