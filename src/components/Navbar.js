import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                class="bi me-2"
                width="50"
                height="50"
                src="https://istad.co/resources/img/logo_md.png"
              ></img>
            </Link>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link href="#" class="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" class="nav-link px-2 text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" class="nav-link px-2 text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" class="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" class="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" class="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
