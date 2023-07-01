import check from './assets/images/check.svg'
import imgLoginRight from './assets/images/imgRight.svg'
import './App.css'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const schema = Yup.object().shape({
  email: Yup.string()
  .email('Valid email required') // Valida o email 
  // .required('Email is required') // Diz que é obrigatorio
})

const asyncFunction = async () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 3000)
  });

  return myPromise;
};


function App() {

  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: ''
    }
  });

  const { errors, isSubmitting } = formState;

  console.log("errors: ", errors)

  const handleSubmitData = async (data) => {
    console.log('submit', data);
    await asyncFunction();
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
                type="text" placeholder="email@company.com" id="inputEmail" className="inputEmail"
                />
                {errors.email && <p className='errorMensage'>{errors.email.message}</p>}
              <button className="btnLogin" type='submit' disabled={isSubmitting}>
                  {isSubmitting ? 'Wait! Sending email' : 'Subscribe to monthly newsletter'}
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
export const dataEmail = "santosjoaogabriel09@gmail.com"
