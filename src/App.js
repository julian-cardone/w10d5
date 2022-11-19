import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path="/galleries/:galleryid">
          <GalleryView/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
