import {useEffect, useState} from "react";
import {getCarts} from "../../services/carts.api.services.ts";
import {useParams} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";
import {ICartsResponseModel} from "../../models/ICartsResponseModel.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";

export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        getCarts(id)
            .then(({carts}: ICartsResponseModel) => setCarts(carts));
    }, [id]);

    return (
        <>
            {
                carts.map(value => (<CartComponent key={value.id} cart={value} />))
            }
        </>
    );
};