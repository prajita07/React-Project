
import Product from './Product';
import useFetch from './useFetch';

const Home = () => {
   
    const { error, isLoading, data: products} = useFetch('http://localhost:8000/products');
 


    return(
        <div className="home">
           
            {error && <div> {error} </div>}
            { isLoading && <div> is Loading... </div>}
            { products && <Product products={products}  /> }
            
        </div>
    );
}
export default Home;


