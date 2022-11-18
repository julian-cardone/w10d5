// import harvardArt from "../../data/harvardArt";
import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({galleries}) {
  // console.log(galleries);
    const galleryNavLinks = galleries.map((gallery) => {
        return (
            <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
        )
    })
  return (
  <nav>
    <NavLink to="/">
    <h1>Galleries</h1>
    </NavLink>
    {galleryNavLinks}
  </nav>
  )
}

export default GalleryNavigation;

