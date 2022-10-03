import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const countryDetails = useLoaderData()
    console.log(countryDetails)

    const { area, continents, capital, name, population, coatOfArms, flags } = countryDetails[0]
    return (
        <div className='flex justify-center w-full mt-10'>
            <div className=" w-1/2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg w-full " src={flags.png} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{name.common}</h5>

                    <p className="mb-3 font-bold text-2xl text-gray-700 dark:text-gray-400"><span className='text-red-400'>Capital: </span> {capital}</p>
                    <p className="mb-3 font-bold text-2xl text-gray-700 dark:text-gray-400"><span className='text-red-400'>Continents: </span> {continents}</p>
                    <p className="mb-3 font-bold text-2xl text-gray-700 dark:text-gray-400"><span className='text-red-400'>Area: </span> {area} sq km</p>
                    <p className="mb-3 font-bold text-2xl text-gray-700 dark:text-gray-400"><span className='text-red-400'>Population: </span> {population}</p>
                    <Link to='/countries' className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" >All Countries
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CountryDetails;