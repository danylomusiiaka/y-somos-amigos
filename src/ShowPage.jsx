import Card from "./Card";
import Header from "./Header";

function ShowPage() {
  return (
    <>
      <Header />
      <section class="container">
        <nav class="d-flex align-items-center px-3">
          <h2 class="navbar-brand mr-auto">Доступні знижки: </h2>
          <div class=" d-flex align-items-center">
            <input type="text" placeholder="Пошук..." />
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Місто
              </button>
              <ul class="dropdown-menu">
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
              </ul>
            </div>
            <button class="btn add-btn ml-auto">
              <div class="d-flex align-items-center">
                <p class="plus">+</p>
                <p class="mx-2">Додати</p>
              </div>
            </button>
          </div>
        </nav>


        <div class="row">
          <Card
            name="JYSK"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            sale="35"
            img="./../images/jysk.jpg"
          />
          <Card
            name="Cafe"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            sale="35"
            img="./../images/somecafe.jpg"
          />
          <Card
            name="Veterano Pizza"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            sale="35"
            img="./../images/veteranopizza.jpg"
          />
          <Card
            name="Veterano Pizza"
            description="Some quick example text to build on the card title and make up
            the bulk of the card's content."
            sale="35"
            img="./../images/veteranopizza.jpg"
          />
        </div>
      </section>
    </>
  );
}

export default ShowPage;
