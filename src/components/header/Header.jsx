import React, {useState} from 'react';
import "./header.css";

const Header = () => {
  /*====================== Toggle Menu ==========*/
  const[Toggle, showMenu] = useState(false);
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav_logo'> Sandali </a>

        <div className={Toggle? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className='nav_list grid'>
            <li className='nav_item'>
              <a href='#home' className='nav_link active-link'>
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className='nav_item'>
              <a href='#about' className='nav_link'>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className='nav_item'>
              <a href='#projects' className='nav_link'>
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>

            <li className='nav_item'>
              <a href='#contact' className='nav_link'>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close" onClick={()=> showMenu(!Toggle)}></i>
        </div>

        <div className="nav_toggle" onClick={()=> showMenu(!Toggle)}>
        <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header