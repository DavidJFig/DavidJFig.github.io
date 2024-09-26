import React from 'react';
import '../CSS/Header.css';

function Header() {
  return (
    <header className="header-background">
      <div className="header-content">
        <nav>
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/links">Links</a></li>
            <li><a href="/contactme">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;