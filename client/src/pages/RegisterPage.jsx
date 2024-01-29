// MODULES
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import InputRegister from "../components/inputRegister.jsx";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (user) => {
    singup(user);
  });

  return (
    <div className=" bg-whiteSmoke p-8 rounded-md shadow-2xl mx-[15%] md:mx-[30%] lg:mx-[35%] " >
      <div className="pb-5 text-3xl font-bold ">Register Form</div>

      {registerErrors.map((error, i) => (
        <div className="bg-red p-2 justify-center text-white rounded" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <InputRegister
          place="Name"
          style="rounded p-0.5 m-1 w-full border"
          type="text"
          format={{ ...register("name", { required: true }) }}
        />
        {errors.name && <p className="text-red font-bold">Name is required</p>}

        <InputRegister
          place="Last name"
          style="rounded p-0.5 m-1 w-full border "
          type="text"
          format={{ ...register("lastname", { required: true }) }}
        />
        {errors.lastname && (
          <p className="text-red font-bold">Last name is required</p>
        )}

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

        <InputRegister
          place="Role"
          style="rounded p-0.5 m-1 w-full border "
          type="text"
          format={{ ...register("role", { required: true }) }}
        />
        {errors.role && <p className="text-red font-bold">Role is required</p>}

        <InputRegister
          place="Departament"
          style="rounded p-0.5 m-1 w-full border "
          type="text"
          format={{ ...register("departament", { required: true }) }}
        />
        {errors.departament && (
          <p className="text-red font-bold">Departament is required</p>
        )}

        <button
          type="submit"
          className="p-2 bg-saddlebrown w-full my-2 rounded text-white hover:bg-saddlebrownHover active:bg-saddlebrownActive focus:outline-none focus:ring focus:ring-saddlebrownFocus"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;