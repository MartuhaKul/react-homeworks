import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
import "./CharacterComponent.css";

interface CharacterComponentProps {
    item: ICharacter
    children: ReactNode
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='font-mono border-yellow div-flex'>
           <h3 className='font-bold text-xl'>{item.name}{item.surname}</h3>
            <div className='wrapper-container'>
                <p className='mt-5'>{children}</p>
                <img src={item.photo} alt={item.name}/>
            </div>
        </div>
    );
};
