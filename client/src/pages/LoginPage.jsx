import React from 'react'
import { useForm } from "react-hook-form";
import InputRegister from "../components/inputRegister";
import { useAuth } from '../context/AuthContext';

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const {signin, errors: signinErros} = useAuth()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
      <>
      <div className=" bg-whiteSmoke p-8 rounded-md shadow-2xl mx-[15%] md:mx-[30%] lg:mx-[35%] " >
      <div className="pb-5 text-3xl font-bold ">Login</div>

      {signinErros.map((error, i) => (
        <div className="bg-red p-2 justify-center text-white rounded" key={i}>
          {error}
        </div>
      ))}


      <form onSubmit={onSubmit}>

        <InputRegister
          place="User"
          style="rounded p-0.5 m-1 w-full border "
          type="text"
          format={{ ...register("user", { required: true }) }}
        />
        {errors.user && <p className="text-red font-bold">User is required</p>}

        <InputRegister
          place="Password"
          style="rounded p-0.5 m-1 w-full border "
          type="password"
          format={{ ...register("password", { required: true }) }}
        />
        {errors.password && (
          <p className="text-red font-bold">Password is required</p>
        )}
        {errors.departament && (
          <p className="text-red font-bold">Departament is required</p>
        )}

        <button
          type="submit"
          className="p-2 bg-saddlebrown w-full my-2 rounded text-white hover:bg-saddlebrownHover active:bg-saddlebrownActive focus:outline-none focus:ring focus:ring-saddlebrownFocus"
        >
          Login
        </button>
      </form>
    </div>
      </>
  )
}

export default LoginPage