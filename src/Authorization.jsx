import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./Authorization.css";

const Authorization = () => {
  const { register, handleSubmit } = useForm();

  const fileInputRef = useRef(null);
  const handleRegistration = (data) =>
    console.log({ ...data, role: "business" });

  return (
    <>
      <div className="container mx-auto px-4 font-Montserrat">
        <h1 className="text-center font-bold text-[50px] mt-10">Вітаємо!</h1>
        <h2 className="text-center">
          Пройдіть будь ласка реєстрацію для продовження
        </h2>

        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="flex flex-col gap-4 py-4"
          >
            <label>
              {"Ім'я"}
              <input
                type="text"
                name="name"
                {...register("name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <label>
              {"Прізвище"}
              <input
                type="text"
                name="surname"
                {...register("surname")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <label>
              {"Контактний телефон"}
              <input
                type="tel"
                name="tel"
                {...register("phone")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <label>
              {"Назва компанії"}
              <input
                type="text"
                name="company_name"
                {...register("company_name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <label>
              {"ІПН"}
              <input
                type="number"
                name="ipn"
                {...register("ipn")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <label>
              {"Документ, який підтверджує володіння компаінєю"}
              <input
                type="file"
                ref={fileInputRef}
                name="certificate"
                {...register("certificate")}
                className="custom-file-input input-file bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              />
            </label>
            <button
              type="submit"
              className="py-3 px-4 mt-4 mx-auto hover:bg-green-500 hover:text-white hover:border-transparent duration-200 rounded-lg border bg-gray-50 border-gray-300"
            >
              Зареєструватись
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authorization;
