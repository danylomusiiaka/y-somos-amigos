function ShowPage() {
    return (<>
        <section className="container">
        <nav className="d-flex align-items-center px-3">
            <h2 className="navbar-brand mr-auto">Доступні знижки: </h2>
            <div className=" d-flex align-items-center">
                <input type="text" placeholder="Пошук..." />
            <div className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    Місто
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Львів</a></li>
                    <li><a className="dropdown-item" href="#">Київ</a></li>
                    <li><a className="dropdown-item" href="#">Одеса</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    Категорія
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Ресторани</a></li>
                    <li><a className="dropdown-item" href="#">Магазини</a></li>
                    <li><a className="dropdown-item" href="#">Здоров&apos;я і краса</a></li>
                </ul>
            </div>
            <button className="btn add-btn ml-auto">
                <div className="d-flex align-items-center">
                    <p className="plus">+</p>
                    <p className="mx-2">Додати</p>
                </div>
                </button>
            </div>
        </nav>
       
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <img src="images/jysk.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JYSK</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                            <a href="#" className="btn btn-choose">Обрати</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <img src="images/veteranopizza.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Veterano Pizza</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                            <a href="#" className="btn btn-choose">Обрати</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <img src="images/somecafe.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">WeNeedToCook Cafe</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                            <a href="#" className="btn btn-choose">Обрати</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>);
}

export default ShowPage;
