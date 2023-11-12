import Header from "./Header";

function CreatePost() {
  return (
    <>
      <Header />
      <section class="new-ad container border">
        <div class="row align-items-center">
          <div class="col-md">
            <h2 class="new-title navbar-brand">Створення нового оголошення</h2>

            <div class="row">
              <div class="col-md-6">
                <p>Назва</p>
                <input type="text" />
              </div>
              <div class="col-md-6">
                <p>Знижка</p>
                <input type="text" />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <p>Посилання</p>
                <input type="text" />
              </div>
              <div class="col-md-6">
                <div class="my-4 d-flex align-items-center">
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
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <p>Опис (не обов'язково)</p>
                <textarea class="form-control resize-none" rows="4"></textarea>
                <p class="my-2">Фотографія</p>
                <input type="file" />
              </div>
            </div>

            <button class="btn add-btn ml-auto my-3">
              <div class="d-flex align-items-center">
                <p class="plus">+</p>
                <p class="mx-2">Створити</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreatePost;
