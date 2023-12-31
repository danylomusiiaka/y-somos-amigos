import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="navbar navbar-light bg-light px-4">
      <Link to="/">
        <a href="#" class="navbar-brand h1">
          GlorytoHeroes 
        </a>
      </Link>
      <div class="form-inline">
        <Link to="/login">
          <button class="btn login mx-2 ">Увійти</button>
        </Link>
        <Link to="/signup">
          <button class="btn sign-in">Зареєструватись</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
