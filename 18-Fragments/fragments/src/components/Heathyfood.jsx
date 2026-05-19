import styles from './Healthyfood.module.css';

function Heathyfood() {

    return (

        <li className={`list-group-item active ${styles['healthyfood']}`} aria-current="true">
            Best WEb series
        </li>

    )
}

export default Heathyfood;