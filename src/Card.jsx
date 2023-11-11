import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, description, sale, img } = props;

  return (
    <>
      <div class="col-md-4 col-sm-6 font-Montserrat">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <p>Знижка: {sale}%</p>
            <Link to={`/offer/${name.toLowerCase().split(" ").join("")}`}>
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
