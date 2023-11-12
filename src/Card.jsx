import { Link } from "react-router-dom";

const Card = (props) => {
  const {
    title,
    description,
    discount_value,
    img,
    start_date,
    end_date,
    location,
  } = props;
  console.log(props);

  const shortDescription = description
    .split(" ")
    .filter((_, i) => i < 20)
    .join(" ");

  return (
    <>
      <div class="col-md-4 col-sm-6 font-Montserrat">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div className="card-body flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h5 className="card-title font-bold text-lg">{title}</h5>
              <p className="rounded-lg px-3 py-2 text-white bg-green-500">
                -{discount_value}%
              </p>
            </div>
            <p class="card-text text-justify">{shortDescription}</p>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Старт акції: </p>
                <p>{"12-34-4444"}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">Кінець акції: </p>
                <p>{"12-34-4444"}</p>
              </div>
              <div className=" flex justify-between items-center">
                <p className="font-bold mt-2">Локація: </p>
                <p>{location}</p>
              </div>
            </div>
            <Link
              to={{
                pathname: `/offer/${title.toLowerCase().split(" ").join("")}`,
                state: { data: props },
              }}
            >
              <button className="px-3 py-2 border border-gray-200 rounded-lg duration-200 hover:bg-green-500 hover:text-white font-bold">
                Обрати
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
