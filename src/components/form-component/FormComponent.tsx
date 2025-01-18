import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import {addCar} from "../../services/api.service.ts";
import "./FormStyle.css";

export const FormComponent = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = (data: ICar) => {
        addCar(data);
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(createHandler)}>
                <div className="input">
                    <input type={'text'} placeholder={'enter brand'} {...register('brand')}/>
                    <div className="error">{errors.brand?.message}</div>
                </div>

                <div>
                    <input type={'number'} placeholder={'enter price 0-1000000'} {...register('price')}/>
                    <div className="error">{errors.price?.message}</div>
                </div>

                <div>
                    <input type={'number'} placeholder={'enter year 1990-2024'} {...register('year')}/>
                    <div className="error">{errors.year?.message}</div>
                </div>

                <button className="form-button">Create car</button>
            </form>
        </div>
    );
};