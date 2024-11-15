import "./header.css"
import logo from "../../assets/logo.png"
import {Link} from "react-scroll"

export default function Header() {

  
  const scroll_duration = 800

  window.onscroll = function(){
    var scrollVal = scrollY
    if (scrollVal >= 60){
      console.log('hey')
    }
    else{
      console.log('nothing')
    }
  }


  return (
    <header>
        <div className="container">
        <Link to="hero" spy={true} smooth={true} offset={+
          0} duration={scroll_duration} className="logo">
          <img src={logo} alt="logo" />
          <span>Nawar</span>
        </Link>
        <nav className="navigation">
            <Link to="portfolio" spy={true} smooth={true} offset={0} duration={scroll_duration}>Last works</Link>
            <Link to="services" spy={true} smooth={true} offset={0} duration={scroll_duration}>What i do</Link>
            <a href="/contact">Let's work</a>
        </nav>
        </div>
    </header>
  )
}
