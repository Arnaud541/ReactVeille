import { useState } from "react";

function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)

	const totalCart = cart.reduce((acc, plant) => acc + plant.amount * plant.price, 0)

	return isOpen ? (
		<div className="cart">
			<h2>Panier</h2>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
			<h2>Panier</h2>
			<h3>Total : {totalCart}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
		</div>
	)
}

export default Cart