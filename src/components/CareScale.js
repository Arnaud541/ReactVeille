import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function getQuantity(scaleValue)
{
    var quantity = '';

    switch (scaleValue) {
        case 1:
            quantity = 'peu'
            break;
        case 2:
            quantity = 'modérement'
            break;
        case 3:
            quantity = 'beaucoup'
            break;
        default:
            break;
    }

    return quantity;
}



function CareScale({careType, scaleValue}) {
    
    const quantityNeeded = getQuantity(scaleValue);

    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? ( <img src={Sun} alt='sun-icon' /> ) : ( <img src={Water} alt='water-icon' /> )

    return (
        
        <div onClick={ () => alert(`Cette plante requiert ${quantityNeeded} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale