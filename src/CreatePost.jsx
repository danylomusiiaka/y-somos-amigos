function CreatePost() {
    return (<>
        <section className="new-ad container border">
            <div className="row align-items-center">
                <div className="col-md">
                    <h2 className="new-title navbar-brand">Створення нового оголошення</h2>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <p>Назва</p>
                            <input type="text" />
                        </div>
                        <div className="col-md-6">
                            <p>Знижка</p>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p>Посилання</p>
                            <input type="text" />
                        </div>
                        <div className="col-md-6">
                            <div className="my-4 d-flex align-items-center">
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
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p>Опис (не обов&apos;язково)</p>
                            <textarea className="form-control resize-none" rows="4"></textarea>
                            <p className="my-2">Фотографія</p>
                            <input type="file" />
                        </div>
                    </div>
                
                    <button className="btn add-btn ml-auto my-3">
                        <div className="d-flex align-items-center">
                            <p className="plus">+</p>
                            <p className="mx-2">Створити</p>
                        </div>
                    </button>
               
                </div>
            </div>
        </section>
    </>
    );
}

export default CreatePost;