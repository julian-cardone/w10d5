import harvardArt from "../../data/harvardArt";
import { NavLink } from "react-router-dom";

function GalleryNavigation({galleries}) {
  // console.log(galleries);
  return (
  <nav>
    <NavLink to="/">
    <h1>Galleries</h1>
    </NavLink>
  </nav>

  
  )
}

export default GalleryNavigation;

