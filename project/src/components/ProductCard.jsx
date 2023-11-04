import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../features/productsSlice.jsx";

const ProductCard = ({product}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addToToCart = (product, e) => {
        e.stopPropagation()
        dispatch(addToCart(product))
    }

    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex flex-col justify-between w-56 h-70 bg-white custom-shadow cursor-pointer rounded-md hover:bg-slate-50 ease-out duration-300 hover:translate-y-0.5">
            <div className="flex flex-col gap-2 py-6 px-2 items-center justify-center">
                <div className="w-28 h-28">
                    <img className="w-full h-full object-cover" src={product.thumbnail} alt=""/>
                </div>
                <div className="font-bold tracking-wider h-12 text-center">{product.title}</div>
                <div>{product.price} €</div>
            </div>
            <div
                onClick={(e) => addToToCart(product,e)}
                className="bg-yellow-400 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded-b-md ease-out duration-300 hover:bg-yellow-500 hover:text-slate-50">
                add to cart
            </div>
        </div>
    );
};

export default ProductCard;
