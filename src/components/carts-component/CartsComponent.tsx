import {useEffect, useState} from "react";
import {getCarts} from "../../services/carts.api.services.ts";
import {useParams} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";

export const CartsComponent = () => {

    const {id} = useParams();

    const [cart, setCart] = useState<ICart[]>([])
    useEffect(() => {
       getCarts(id)
            .then(console.log);
    }, [id]);
    return (
        <></>
    );
};