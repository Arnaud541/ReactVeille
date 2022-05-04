import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";

function ShoppingList({cart, updateCart}) {

    // const categories = plantList.map((plant) => plant.category);

    function addToCart(name,price)
    {
        updateCart([...cart, {name, price, amount : 1}])
        
    }

    return (
        <div>
            <ul className="shoppingList-plantes">
                {plantList.map((plant) => (
                    <div key={plant.id}>
                        <PlantItem id={plant.id} name={plant.name} cover={plant.cover} light={plant.light} water={plant.water}/>
                        <button onClick={() => addToCart(plant.name,plant.price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
        
        
    )
}

export default ShoppingList