import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
    const navigate = useNavigate()
    const countryDetails = () =>{
        navigate(`/countries/${name.common}`)
    }
    const { area, continents, capital, name, population, coatOfArms, flags } = country
    return (
        

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <img  className="rounded-t-lg w-full hover:object-scale-down" src={flags.png} alt=""/>

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name.common}</h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                    <button onClick={countryDetails} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" >Country Details
                    </button>
                </div>
            </div>

        
    );
};

export default Country;