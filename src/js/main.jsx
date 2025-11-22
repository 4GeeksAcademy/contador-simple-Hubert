import React from 'react'
import ReactDOM from 'react-dom/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCoffee } from '@fortawesome/free-solid-svg-icons'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


const element = <FontAwesomeIcon icon={faClock} />

let timer = 0
let timer2 = 0
let timer3 = 0
let timer4 = 0
let timer5 = 0
let timer6 = 0

const root = ReactDOM.createRoot(document.getElementById('root'))
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Home
        timer={timer}
        timer2={timer2}
        timer3={timer3}
        timer4={timer4}
        timer5={timer5}
        timer6={timer6}
        timerImg={element}
      />
    </React.StrictMode>,
  )

  //Es horrible, lo sé.

  if (timer5 === 9 && timer4 === 9 && timer3 === 9 && timer2 === 9 && timer === 9) {
    timer6++
    if (timer6 === 10) {
      timer6 = 0
    }
  }

  if (timer4 === 9 && timer3 === 9 && timer2 === 9 && timer === 9) {
    timer5++
    if (timer5 === 10) {
      timer5 = 0
    }
  }

  if (timer3 === 9 && timer2 === 9 && timer === 9) {
    timer4++
    if (timer4 === 10) {
      timer4 = 0
    }
  }

  if (timer2 === 9 && timer === 9) {
    timer3++
    if (timer3 === 10) {
      timer3 = 0
    }
  }


  if (timer === 9) {
    timer2++
    if (timer2 === 10) {
      timer2 = 0
    }
  }


  timer++
  if (timer === 10) {
    timer = 0
  }
}, 1000);






