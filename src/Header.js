import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Aeropress from './Calculators/Aeropress'
import Pourover from './Calculators/Pourover'
import FrenchPress from './Calculators/FrenchPress'
import Siphon from './Calculators/Siphon'
import Espresso from './Calculators/Espresso'
import Moka from './Calculators/Moka'
import Background2 from './imgs/2.png'
import Background1 from './imgs/1.png'
import Background3 from './imgs/3.png'
import Background4 from './imgs/4.png'
import Background5 from './imgs/5.png'
import Background6 from './imgs/6.png'

import { useState } from 'react'

export default function Header () {
   
    const [anyBG, setAnyBG]= useState('')
    

   
    return (


        <BrowserRouter>
        
        <header >
    
        <div className='mainDiv' style={{ backgroundImage:`url(${anyBG})`}}>
            <div className='inside-container'>
            <img className='logoTop' src="https://cdn-icons-png.flaticon.com/512/2935/2935325.png" alt="" />
        <h1>Easy brewing calculator</h1>
        <h3>Choose your brew method</h3>
        
        <div>
        
        <div className='navbar-grid'>

<button><Link to="/Calculators/Pourover" onClick={() => setAnyBG(Background3)}>Pourover Coffee</Link></button>
<button><Link to="/Calculators/Aeropress"  onClick={() => setAnyBG(Background1)}>AeroPress</Link></button>
<button><Link to="/Calculators/FrenchPress" onClick={() => setAnyBG(Background6)}>French Press</Link></button>
<button><Link to="/Calculators/Siphon"onClick={() => setAnyBG(Background4)} >Siphon</Link></button>
<button><Link to="/Calculators/Espresso"onClick={() => setAnyBG(Background2)}>Espresso Machine</Link></button>
<button><Link to="/Calculators/Moka"onClick={() => setAnyBG(Background5)}>Moka Pot</Link></button>

</div>
        <Routes>
        <Route path="/Calculators/Pourover"  element={<Pourover />}/>    
        <Route path="/Calculators/Aeropress" element={<Aeropress />}/>
        <Route path="/Calculators/FrenchPress" element={<FrenchPress />}/>
        <Route path="/Calculators/Siphon" element={<Siphon />}/>
        <Route path="/Calculators/Espresso"  element={<Espresso />}/>
        <Route path="/Calculators/Moka"  element={<Moka />}/>
        </Routes>
         
        
        </div>
        </div>
        </div>
        </header>
        </BrowserRouter>
    )
}
