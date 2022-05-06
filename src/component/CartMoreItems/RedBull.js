import React, { useState } from 'react'
import Collapsible from "react-collapsible";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import bevrage from '../../images/bevrage.png';
import soda from '../../images/soda.png';
import juice from '../../images/fruit-juice.png';
import Button2 from "../Button2"
const RedBull = () => {
    const [text, setText] = useState(false);
    return (
        <>
            <div className='accordion position-relative my-3 mx-3 py-2'>
                {text == true ? (
                    <p className="text_true position-absolute text-dark fw-bold start-0">Red Bull</p>
                ) : (
                    <p className="text_false position-absolute">Red Bull</p>
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
                        <img src={bevrage} alt="bevrage" style={{ width: "40px" }} />
                        <div className="accordion_detail" style={{ marginLeft: "97px" }}>
                            <p>Bevrage</p>
                            <p>$12</p>
                        </div>
                        <Button2/>
                    </div>

                    <div className="accordion_content d-flex align-items-center justify-content-around mb-2">
                        <img src={soda} alt="soda" style={{ width: "40px" }} />
                        <div className="accordion_detail" style={{ marginLeft: "97px" }}>
                            <p>Soda</p>
                            <p>$8</p>
                        </div>
                        <Button2/>
                    </div>

                    <div className="accordion_content d-flex align-items-center justify-content-around mb-2">
                        <img src={juice} alt="juice" style={{ width: "40px" }} />
                        <div className="accordion_detail" style={{ marginLeft: "97px" }}>
                            <p>Fruit Juice</p>
                            <p>$20</p>
                        </div>
                        <Button2/>
                    </div>
                </Collapsible>
            </div>
        </>
    )
}

export default RedBull