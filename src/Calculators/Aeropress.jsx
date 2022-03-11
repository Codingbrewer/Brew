import { useState } from "react";
import '../index.css'
import { FaCoffee } from 'react-icons/fa';



const Aeropress = () => {
    const [amount, setAmount] = useState('')
    const [show, setShow] = useState(false);
    const [output, SetOutput] = useState()

    function calculatorResult() {
        SetOutput(amount * 14.5)} 

        function showCal() {
            setShow(true)
        }
    
    const handleAmountChange = (e) => {setAmount(e.target.value)}


    return  (
        <div >

        <div className="container">
        <h2> AeroPress </h2>
        <form>
        <p className="form-control form-control-check">I brew with
        <input className='input' 
        onChange={handleAmountChange} 
        type="number" 
        placeholder="18" 
        value={amount}/>
        g. of grind coffee</p>
        <span
        onClick ={() => { showCal(); calculatorResult();}}
        className="btn btn-block"> find out </span> 
        </form>
        <h2> You need...</h2>
        <span className='result'> {show && output} {show && 'ml'} </span>
        <h2> {show && 'of water'} </h2>
        <h2> {show && <FaCoffee size={70}/>} </h2>
        </div>
            
            </div>
    )

    }




export default Aeropress
