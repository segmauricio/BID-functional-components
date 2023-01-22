import { Fragment, useState } from "react";
import UserForm from "./UserForm";
import './ColorBoxes.css';


const ItemColor = (props) => {
    return (
        <div>
            <li>
                <div style={{ backgroundColor: props.colour, height: props.dimension + 'px', width: props.dimension + 'px' }}></div>
            </li>
        </div>
    )
}

const ColorBoxes = () => {

    const [lista, setLista] = useState([]); 
    return (
        <>
        <div>
            <UserForm lista={lista} setLista={setLista} />
        </div>
        <div className='boxes'>
            <ul>
                {
                    lista.map((item, idx) => {
                        return (
                            <Fragment key={idx}>
                            <ItemColor {...item} />
                            </Fragment>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default ColorBoxes;