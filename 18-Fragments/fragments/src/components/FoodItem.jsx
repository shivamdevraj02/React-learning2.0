
import styles from './FoodItem.module.css';
function FoodItem({ item ,handleBuyBotton}) {
    

    return (
        <ul className='List-group'>
            {item.map((items) => (
                <>
                    <li key={items} className={`${styles['items-style']}`}>
                        {items}

                    </li>

                    <button type="button" className={`${styles['button-1']}`} onClick={() => handleBuyBotton(items)}>
                        Buy on Rent
                    </button>

                </>
            ))}
        </ul>
    );
}

export default FoodItem;