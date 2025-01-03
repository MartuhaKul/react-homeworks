import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
import "./CharacterComponent.css";

interface CharacterComponentProps {
    item: ICharacter
    children: ReactNode
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='font-mono my-3 border-yellow div-flex'>
           <h3 className='font-bold text-xl'>{item.name}{item.surname}</h3>
            <p className='mt-5'>{children}</p>
        </div>
    );
};
