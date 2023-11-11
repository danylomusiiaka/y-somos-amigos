import { Link } from "react-router-dom";

function Header() {
  return (
    <footer class="navbar navbar-light bg-light px-4">
      <Link to="/">
        <a href="#" class="navbar-brand h1">
          Amigos
        </a>
      </Link>
      <div class="form-inline">
        <Link to="/signup">
          <button class="btn login mx-2 ">Log in</button>
        </Link>
        <Link to="/login">
          <button class="btn sign-in">Sign up</button>
        </Link>
      </div>
    </footer>
  );
}

export default Header;
