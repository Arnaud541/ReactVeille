import '../styles/style.css';
import logo from '../assets/logo.png';

function Banner()
{
    const title = 'La maison jungle';
    return (
        <div className='banner'>
            <img src={logo} alt='La maison jungle' className='banner-logo' />
            <h1 className='banner-title'>{title}</h1>
        </div>
    )
    
}

export default Banner