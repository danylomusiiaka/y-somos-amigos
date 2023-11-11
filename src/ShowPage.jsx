function ShowPage() {
    return (<>
        <section class="container">
            <nav class="navbar ">
                <h2 class="navbar-brand">Доступні знижки: </h2>
                <div class="d-flex align-items-center">
                    <input type="text" class="form-control" placeholder="Пошук..." />
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Місто
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Львів</a></li>
                            <li><a class="dropdown-item" href="#">Київ</a></li>
                            <li><a class="dropdown-item" href="#">Одеса</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                            Категорія
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Ресторани</a></li>
                            <li><a class="dropdown-item" href="#">Магазини</a></li>
                            <li><a class="dropdown-item" href="#">Здоров'я і краса</a></li>
                        </ul>
                    </div>
                    
                    <button class="btn add-btn">
                        <div class="d-flex align-items-center">
                            <p class="plus">+</p>
                            <p class="mx-2">Додати</p>
                        </div>
                    </button>
                </div>
            </nav>

       
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <img src="images/jysk.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">JYSK</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-choose">Обрати</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <img src="images/veteranopizza.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Veterano Pizza</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-choose">Обрати</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <img src="images/somecafe.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">WeNeedToCook Cafe</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-choose">Обрати</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>);
}

export default ShowPage;
