import {useHistory, useParams} from 'react-router-dom';
import useFetch from './useFetch';

const ProductDetails =()  => {
    const {id} = useParams();
    const {data:product, error, isLoading} = useFetch('http://localhost:8000/products/' + id);
    const history = useHistory();
    const handleClick= () => {
        fetch ('http://localhost:8000/products/' + product.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        } )
    }
    
 
    return(
        <div className = "product-details">
            { isLoading && <div> Loading... </div>}
            { error && 
            <div> {error} </div>}
            { product &&(
                <article>
                <h2> { product.title} </h2>
                <p> By { product.brand} </p>
                <div> {product.body} </div>
                <button onClick = {handleClick}> delete </button>
                </article>
            )}
        </div>
    );
}

export default ProductDetails;