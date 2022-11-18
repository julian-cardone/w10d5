import harvardArt from "./data/harvardArt"
import GalleryNavigation from "./components/GalleryNavigation/";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records} />
  );
}

export default App;

