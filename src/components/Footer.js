import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link href="#" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
        <div class="card-footer text-body-secondary">@Copy</div>
      </div>
    </footer>
  );
}
