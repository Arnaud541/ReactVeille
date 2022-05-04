import { useState } from 'react'
import '../styles/style.css'



function Footer() {
    
	const [inputValue, setInputValue] = useState('')

    function handleInput(event)
    {
        setInputValue(event.target.value)
    }

    function handleClickButton()
    {
        
        if(!inputValue.includes('@'))
        {
            console.log(inputValue)
            alert('L\'adresse mail n\'est pas valide, il manque un @');
        }
        else
        {
            console.log(inputValue)
            alert('L\'adresse mail est valide');
        }
    }

	return (
		<footer className='footer'>
			<div className='footer-elem'>
				Pour les passionnés de plantes 🌿🌱🌵
			</div>
			<div className='footer-elem'>Laissez-nous votre mail :</div>
            <input type={"text"} placeholder='Entrez votre mail ' onChange={handleInput} />
            <button className='footer-btn' onClick={handleClickButton} >Tester</button>
		</footer>
	)
}

export default Footer