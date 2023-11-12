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
                class="form-select"
                onChange={cityCategoryHandler}
              >
                <option value="" selected>
                  Всі міста
                </option>
                <option value="lviv">Львів</option>
                <option value="kyiv">Київ</option>
                <option value="kharkiv">Харків</option>
              </select>

              <select
                class="form-select mx-2 test"
                onChange={categoryCategoryHandler}
              >
                <option value="" selected>
                  Всі категорії
                </option>
                <option value="shop">
                  Магазини
                </option>
                <option value="restaurant">
                  Ресторани
                </option>
                <option value="cafe">
                  Кафе
                </option>
              </select>
          
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
                img={card.img}
              />
            ))}
          
        </div>
      </section>
    </>
  );
}

export default ShowPage;
