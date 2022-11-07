import { Link } from "react-router-dom"
import "./about.css"

export default function About() {
  return (
    <div className="about">
      <img 
        className="aboutImg" 
        src="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <h1 className="aboutTitle">The home of the blogger</h1>
      <p className="aboutDescription">  
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?

        <br></br>
        <br></br>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      <p className="contactText">
        Do you have any question? Please, do not hesistate to contact us!
      </p>
      <div className="contactLink">
      <button className="aboutContactButton">
        <Link className="link" to="/contact">
          CONTACT US
        </Link>
      </button>
      </div>
    </div>
  )
}
