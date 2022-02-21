import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
      localStorage.clear();
      basket.splice(0);
    }
  };
  return (
    <nav className="header">
      {/* Start_Logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngpress.com/wp-content/uploads/2020/07/uploads_amazon_amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* End_Logo */}
      {/* Start_Search */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* End_Search */}
      {/* Start_3links */}
      <div className="headerNav"></div>

      {/* Start_1st_Link */}
      <Link to={"/Login"} className="header__link">
        <div onClick={login} className="header_option">
          <span className="header__optionLineOne">Hello, {user?.email}</span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>
      {/* Start_2nd_Link */}
      <Link to="/Login" className="header__link">
        <div className="header_option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      {/* Start_3rd_Link */}
      <Link to="/Login" className="header__link">
        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </Link>

      {/* 4th_Link */}

      <Link to="Checkout" className="header__link">
        <div className="header__optionBasket">
          {/* Shopping_Basket */}
          <ShoppingCartIcon />

          {/* Number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">
            {" "}
            {basket.length}
          </span>
        </div>
      </Link>
      {/* Start_5th_Link */}
      <Link to="/Contact" className="header__link">
        <div className="header_option">
          <ContactPhoneIcon />
        </div>
      </Link>

      {/* End_5links */}
    </nav>
  );
}

export default Header;
