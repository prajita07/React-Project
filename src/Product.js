import {Link} from 'react-router-dom';

const Product = ({ products }) => {
   // const products = props.products;
    // const title = props.title;

    
    return (
        <div className='product-list'>
            {products.map((product) => (
                <div className="product-preview" key={Product.id}>
                    <Link to = {'/products/${Product.id}'}>
                        <h2> {product.title}</h2>
                        <p> By { product.brand }</p>
                    </Link>
            
                </div>
            ))}
       </div>
    );
}
export default Product;