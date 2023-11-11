import { useRef } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => console.log(data);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 font-Montserrat">
        <h1 className="text-center font-bold text-[50px] mt-10">
          З поверненням!
        </h1>
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4 py-4"
          >
            <label>
              {"Пошта"}
              <input
                type="email"
                name="email"
                {...register("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <label>
              {"Пароль"}
              <input
                type="text"
                name="password"
                {...register("password")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <button
              type="submit"
              className="py-3 px-4 mt-4 mx-auto hover:bg-green-500 hover:text-white hover:border-transparent duration-200 rounded-lg border bg-gray-50 border-gray-300"
            >
              Увійти
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
