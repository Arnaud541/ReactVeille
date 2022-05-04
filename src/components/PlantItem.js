import CareScale from "./CareScale";
import '../styles/style.css';


function PlantItem({id, name, cover, light, water})
{
    return (
        <div key={id} className="plantItem-plante">
            <img src={cover} className="plantItem-plante-img" alt=""></img>
            <h2>{name}</h2>
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </div>
    )
}

export default PlantItem