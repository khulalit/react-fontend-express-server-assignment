import './styles.css';
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    return (
        <header className='_header'>
            {location.pathname !== '/' && 
            <button onClick={() => {navigate(-1)}} data-testId='back-button'>
                <MdArrowBackIosNew />
            </button>}
            <h1>
                {location.pathname === '/' ? 'Users List' : 'User Details'}
            </h1>
        </header>
    )
}
