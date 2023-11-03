import {useDispatch} from "react-redux";
import {addToCart, countAmount} from "../features/productsSlice.jsx";
import {useNavigate} from "react-router-dom";

const ProductCard = ({product}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        dispatch(countAmount(product))
    }

    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className={"flex flex-col justify-between w-56 h-70 bg-white custom-shadow cursor-pointer rounded-md hover:bg-slate-50 ease-out duration-300 hover:translate-y-0.5"}>
            <div className={"flex flex-col gap-2 py-6 px-2 items-center justify-center"}>
                <div className={"w-28 h-28"}>
                    <img className={"w-full h-full object-cover"} src={product.thumbnail} alt=""/>
                </div>
                <div className={"font-bold tracking-wider h-12 text-center"}>{product.title}</div>
                <div className={""}>{product.price}$</div>
            </div>
            <div
                onClick={() => handleAddToCart(product)}
                className={"bg-yellow-400 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded-b-md ease-out duration-300"}>
                add to cart
            </div>
        </div>
    );
};

export default ProductCard;
