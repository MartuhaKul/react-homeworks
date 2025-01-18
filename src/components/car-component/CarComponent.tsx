import { ICar } from "../../models/ICar.ts";
import "./CarStyle.css";

interface ICarProps {
    item: ICar;
}

export const CarComponent = ({ item }: ICarProps) => {
    return (
        <div className="car-container">
            <h3>{item.brand}</h3>
            <h4>{item.price} $</h4>
            <h4>{item.year}</h4>
        </div>
    );
};
