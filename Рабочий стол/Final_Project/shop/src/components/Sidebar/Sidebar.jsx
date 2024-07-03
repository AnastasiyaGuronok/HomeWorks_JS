import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

import styles from "../../styles/Sidebar.module.css";
import '../../styles/media.css';

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { list } = useSelector(({ categories }) => categories);
    const [nav, setNav] = useState(false);
  
    return (

        <section className={styles.sidebar1}>
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          <div className={nav ? [styles.sidebar2, styles.active].join(' ') : [styles.sidebar2]}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
              <ul className={styles.menu}>
                {list.map(({ id, name }) => (
                  <li key={id}>
                    <NavLink
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                      }
                      to={`/categories/${id}`}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
      
            <div className={styles.footer}>
              <a href="/help" target="_blank" className={styles.link}>
                Help
              </a>
              <a
                href="/terms"
                target="_blank"
                className={styles.link}
                style={{ textDecoration: "underline" }}
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        
        </section>
    );
  };
  
  export default Sidebar;