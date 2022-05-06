import React, { useState } from 'react'
import Collapsible from "react-collapsible";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import normal from '../../images/normal-water-bottle.png';
import RO from '../../images/RO-water-bottle.png';
import chilled from '../../images/chilled-water-bottle.png';
import Button2 from "../Button2"
const WaterBottle = () => {
    const [text, setText] = useState(false);
    return (
        <>
            <div className='accordion position-relative my-3 mx-3 py-2'>
                {text == true ? (
                    <p className="text_true position-absolute text-dark fw-bold start-0">Water Bottle</p>
                ) : (
                    <p className="text_false position-absolute">Water Bottle</p>
                )}

                <Collapsible
                    trigger={<BiChevronDown onClick={() => setText(true)} className="openArrow" />}
                    triggerWhenOpen={
                        <BiChevronUp
                            onClick={() => setText(false)}
                            style={{ color: "rgb(243, 142, 10)" }}
                            className="openArrow"
                        />
                    }
                >
                    <div className="accordion_content d-flex align-items-center justify-content-around mb-2">
                        <img src={normal} alt="normal"  />
                        <div className="accordion_detail mt-2 ms-4" >
                            <p className="mb-0">Normal Water</p>
                            <p className="mb-0">$5</p>
                        </div>
                        <Button2/>
                    </div>

                    <div className="accordion_content d-flex align-items-center justify-content-around mb-2">
                        <img src={RO} alt="RO water"  />
                        <div className="accordion_detail mt-2 ms-4" >
                            <p className="mb-0">RO Water</p>
                            <p className="mb-0">$10</p>
                        </div>
                        <Button2/>
                    </div>

                    <div className="accordion_content d-flex align-items-center justify-content-around mb-2">
                        <img src={chilled} alt="chilled"  />
                        <div className="accordion_detail mt-2 ms-4" >
                            <p className="mb-0">Chilled Water</p>
                            <p className="mb-0">$20</p>
                        </div>
                        <Button2/>
                    </div>
                </Collapsible>
            </div>
        </>
    )
}


export default WaterBottle