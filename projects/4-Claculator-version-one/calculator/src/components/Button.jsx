import styles from './Button.module.css'

function Button({ onButtonclick }) {
 
    const buttonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return (<div className={styles.buttoncontainer}>
        {buttonNames.map((name) => (
            <button className={styles.button} key={name} onClick={() => onButtonclick(name)}>
                {name}
            </button>
        ))}

    </div>
    )
}

export default Button;