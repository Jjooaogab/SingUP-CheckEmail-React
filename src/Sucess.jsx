import React from 'react'
import check from './assets/images/check.svg'
import { dataEmail } from './App.jsx'

export default function SucessPage() {
  return(
    <>
      <div className="container">
        <i>
          <img src={check} alt="" />
        </i>
        <div className="texts">
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to {dataEmail}! Please open it and click the button inside to confirm your subscription</p>
        </div>
        <button>
          <span></span>
        </button>
      </div>
    </>
  )
}