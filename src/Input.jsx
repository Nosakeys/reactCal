import React from "react"
import './index.css'

const Input = () =>{
    return(
   <div>
    
    <div className="container">
        <div className="main">
            <h3>0</h3>

            <div className="result">
                <h1>0</h1>
            </div>

            <div className="buttons">
                <div class="row">
                    <button className="clear">C</button> 
                    <button className='button'>/</button>
                    <button className="button">*</button>
                    <button className="del">DEL</button>
                </div>
                <div class="row">
                    <button className="button">7</button>
                    <button className="button">8</button>
                    <button className="button">9</button>
                    <button className="button">-</button>
                </div>
                <div class="row">
                    <button className="button">4</button>
                    <button className="button">5</button>
                    <button className="button">6</button>
                    <button className="button">+</button>
                </div>

                <div className="last-row">
                    <div className="numbers">
                        <div className="rows">
                            <button className="button">1</button>
                            <button className="button">2</button>
                            <button className="button">3</button>
                        </div>
                        <div className="rows">
                            <button className="button" id="perc">%</button>
                            <button className="button">0</button>
                            <button className="button">.</button>
                        </div>
                    </div>
                    <div className="equal">
                        <button id="equal">=</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


   </div>
    )
}

export default Input