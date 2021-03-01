import { useState } from "react";
import { useHistory } from 'react-router-dom';


const AddToCart =() => {
    const [title, setTiltle] =useState('');
    const [body, setBody] = useState('');
    const [brand, setBrand] = useState('brand');
    const[isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {title, body, brand};
        
        
        fetch(' http://localhost:8000/products/',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(product)
        }).then(() => {
          history.push('/');
        })
    }

    return (
        <div className="addtocart">
            <h2> Addtocart</h2>
            <form onSubmit={handleSubmit}> 
                <label> Product title: </label>
                <input
                type="text"
                required
                value= {title}
                onChange={(e) => setTiltle(e.target.value)}
                />
                <label> Product body: </label>
                <textarea
                required
                value={body}
                onChange ={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Product brand: </label>
                <select
                    value={brand}
                    onChange={(e) => setBrand(e.traget.value)}
                >
                    <option value="nike"> nike</option>
                    <option value="puma">puma</option>
                </select>
                <button> Add product </button>
            </form>
        </div>
    );
}
export default AddToCart;