import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-box-shadow-medium">
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          {/* <ul className="uk-navbar-nav">
            <li> */}
          {/* <a class="uk-navbar-item uk-logo" href="#">
                Logo
              </a> */}
          <Link href="/">
            <a class="uk-navbar-item uk-logo">Codify</a>
          </Link>
          {/* </li>
          </ul> */}
        </div>
        {/* <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div> */}
      </nav>
    </div>
  );
};

export default Nav;
