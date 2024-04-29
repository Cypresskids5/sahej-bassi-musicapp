'use client'
import styles from './styles.css'
export default function Navbar(){  //navbar compoment
    return (
        <div className="navbar">
            <img src="logo.png" alt="logo" className="nav-logo"/>
            <h1 className="nav-title">rapamusic</h1>
            <a onClick={() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                })
            }}className="nav-link">More Info</a>
        </div>
    )
}
