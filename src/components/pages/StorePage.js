import { productData } from "../context/productData";
import SingleProductCard from "../SingleProductCard";

const StorePage = () => {

    return (
        <>
            <div className="container">
                <div className="row my-5">
                    {
                        productData.map((product, index) => (
                            <div className="col-md" key={index} align="center">
                                <SingleProductCard
                                    product={product}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default StorePage;