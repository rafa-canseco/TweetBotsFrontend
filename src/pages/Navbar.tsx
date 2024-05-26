import { Link} from 'react-router-dom';
import { useState} from 'react';

const Navbar = () => {
    const [selected,setSelected] = useState('/')

    return(
        <nav className='flex justify-end space-x-10 pr-10 border-b-2'>
            <Link to="/tweet">
                <button
                    onClick={() => setSelected('tweet')}
                    className={`text-lg ${selected === 'tweet' ? 'font-bold' : 'font-normal text-black hover:text-blue-500'}`} >
                    TWEET
                </button>
            </Link>
            <Link to="/reply">
                <button
                    onClick={() => setSelected('reply')}
                    className={`text-lg ${selected === 'reply' ? 'font-bold' : 'font-normal text-black hover:text-blue-500'}`} >
                    REPLY
                </button>
            </Link>
            <Link to="/prompts">
                <button
                    onClick={() => setSelected('prompts')}
                    className={`text-lg ${selected === 'prompts' ? 'font-bold' : 'font-normal text-black hover:text-blue-500'}`} >
                    PROMPTS
                </button>
            </Link>
            <Link to="/signout">
                <button
                    onClick={() => setSelected('signout')}
                    className={`text-lg ${selected === 'signout' ? 'font-bold' : 'font-normal text-black hover:text-blue-500'}`} >
                    SIGNOUT
                </button>
            </Link>
        </nav>
    );
}

export default Navbar;