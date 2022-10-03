import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='bg-slate-300 p-2 rounded text-xl m-2 hover:bg-fuchsia-400 text-blue-600 font-bold' to = '/home'>Home</Link>
            <Link className='bg-slate-300 p-2 rounded text-xl m-2 hover:bg-fuchsia-400 text-blue-600 font-bold' to = '/about'>About</Link>
            <Link className='bg-slate-300 p-2 rounded text-xl m-2 hover:bg-fuchsia-400 text-blue-600 font-bold' to = '/students'>Students</Link>
            <Link className='bg-slate-300 p-2 rounded text-xl m-2 hover:bg-fuchsia-400 text-blue-600 font-bold' to = '/countries'>Countries</Link>
        </div>
    );
};

export default Header;