import { useState } from 'react'
import favicon from './assets/images/favicon.png'
import check from './assets/images/check.svg'
import imgLoginRight from './assets/images/imgRight.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm({
    mode: 'all'
  });

  const handleSubmitData = (data) => {
    console.log('submit', data)
  }

  return (
    <>
      <section className="loginPage">
        <div className="containerLogin">
          <div className="leftSideLogin">
            <div className="containerTexts">
              <div className="containerTextLogin">
                <h1 className="h1Login">Stay updated!</h1>
                <span className="spanLogin">Join 60,000+ product managers receiwing monthly updates on:</span>
              </div>
              <div className="comments">
                <img src={check} alt="" className="sucessSvg" />
                <p className="commentP">Product discovery and building what matters</p>
              </div>
              <div className="comments">
                <img src={check} alt="" className="sucessSvg" />
                <p className="commentP">Measuring to ensure updates are a success</p>
              </div>
              <div className="comments">
                <img src={check} alt="" className="sucessSvg" />
                <p className="commentP">And much more!</p>
              </div>
            </div>
            <form className="formLogin" onSubmit={handleSubmit(handleSubmitData)}>
              <label htmlFor="inputEmail" className="labelInput">Email address</label>
              <input 
              {...register("email")}
              type="text" placeholder="email@company.com" id="inputEmail" className="inputEmail" />
              <button className="btnLogin" type='submit'>
                <span className="spanBtnLogin">Subscribe to monthly newsletter</span>
              </button>
            </form>
          </div>
          <div className="rightSideLogin">
            <img src={imgLoginRight} alt="" className="imgLogin" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
