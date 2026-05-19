import styles from './InputFooditem.module.css';

const InputFooditem = ({ handleKeydown }) => {

   

    return (
                 <input
                    type="text"
                    placeholder="Enter food items"
                    className="input-style"
                    style={{ marginTop: 7, marginLeft: 77 }}
                    onKeyDown={handleKeydown}
                />
    );
};

export default InputFooditem;