import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Header from "./Header";
import cardData from "./json/offersData.json";

function ShowPage() {
  const [cardsData, setCardsData] = useState();

  useEffect(() => {
    setCardsData(cardData);
  }, []);

  const searchHandle = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setCardsData(cardData);
    } else {
      setCardsData(
        cardData.filter((el) =>
          el.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const cityCategoryHandler = (e) => {
    if (e.target.value === "") {
      setCardsData(cardData);
    } else {
      setCardsData(
        cardData.filter((el) =>
          el.location.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };
  const categoryCategoryHandler = (e) => {
    if (e.target.value === "") {
      setCardsData(cardData);
    } else {
      setCardsData(
        cardData.filter((el) =>
          el.category.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <Header />
      <section class="container">
        <nav class="d-flex align-items-center px-3">
          <h2 class="navbar-brand mr-auto">Доступні знижки: </h2>
          <div class=" d-flex align-items-center">
            <input type="text" placeholder="Пошук..." onChange={searchHandle} />
            <div className="flex">
              <select
                class="btn dropdown-toggle"
                onChange={cityCategoryHandler}
              >
                <option value="" disabled selected>
                  Місто
                </option>
                <option value="lviv">Львів</option>
                <option value="kyiv">Київ</option>
                <option value="kharkiv">Харків</option>
              </select>

              <select
                class="btn dropdown-toggle"
                onChange={categoryCategoryHandler}
              >
                <option class="dropdown-item" value="" disabled selected>
                  Категорія
                </option>
                <option class="dropdown-item" value="shop">
                  Магазини
                </option>
                <option class="dropdown-item" value="restaurant">
                  Ресторани
                </option>
                <option class="dropdown-item" value="cafe">
                  Кафе
                </option>
              </select>
              {/* <button
                type="button"
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                onChange={cityCategoryHandler}
              >
                Місто
              </button> */}
              {/* <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Львів
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Київ
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Одеса
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Категорія
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Ресторани
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Магазини
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Здоров'я і краса
                  </a>
                </li>
              </ul> */}
            </div>
            <Link to="/create-discount">
              <button class="btn add-btn ml-auto">
                <div class="d-flex align-items-center">
                  <p class="plus">+</p>
                  <p class="mx-2">Додати</p>
                </div>
              </button>
            </Link>
          </div>
        </nav>

        <div class="row">
          {cardsData &&
            cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                discount_value={card.discount_value}
                location={card.location}
                start_date={card.start_date}
                end_date={card.end_date}
                img={card.img}
              />
            ))}
          {/* <Card
            title="JYSK"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            discount_value="35"
            location="Kyiv"
            start_date={Date.now()}
            end_date={Date.now()}
            img="./../images/jysk.jpg"
          />
          <Card
            title="Cafe"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            discount_value="35"
            location="Kyiv"
            start_date={Date.now()}
            end_date={Date.now()}
            img="./../images/somecafe.jpg"
          />
          <Card
            title="Veterano Pizza"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            discount_value="35"
            location="Kyiv"
            start_date={Date.now()}
            end_date={Date.now()}
            img="./../images/veteranopizza.jpg"
          />
          <Card
            title="Veterano Pizza"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            discount_value="35"
            location="Kyiv"
            start_date={Date.now()}
            end_date={Date.now()}
            img="./../images/veteranopizza.jpg"
          /> */}
        </div>
      </section>
    </>
  );
}

export default ShowPage;
