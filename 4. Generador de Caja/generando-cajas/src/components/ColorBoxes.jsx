import { Fragment, useState } from "react";
import UserForm from "./UserForm";
import './ColorBoxes.css';


const ItemColor = (props) => {
    return (
        <div>
            <li>
                <div style={{backgroundColor:props.colour, height: props.dimension+'px', width: props.dimension+'px'}}></div>
            </li>
        </div>
        
    )
}

const ColorBoxes = () => {

    const [lista, setLista] = useState([]);

    return (
        <div>
            <div>
                <div>
                    <UserForm lista={lista} setLista={setLista} />
                </div>
                <div className='boxes'>
                    <ul>
                        {
                            lista.map((item, idx, arr) => {
                                console.log(idx, item, arr);
                                return (
                                    <Fragment key={item + idx}>
                                        <ItemColor {...item} />
                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ColorBoxes;