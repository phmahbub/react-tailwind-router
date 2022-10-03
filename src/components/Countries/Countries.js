import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
    const countries = useLoaderData()
    console.log(countries)
    return (
        <div>
        <p className='text-6xl mt-10 bg-slate-400 p-7 rounded'>World Countries</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center mt-10 md-grid-cols-2'>
            {
                countries.map(country=>(
                    <Country country={country}></Country>
                ))
            }
        </div>
        </div>
        
    );
};

export default Countries;