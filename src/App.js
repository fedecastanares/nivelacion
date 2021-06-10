import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DataProvider from "./context/dataContext";
import CategoryProvider from "./context/categoryContext";
import FavoritesProvider from "./context/favoritesContext";
import Theme from "./style/theme";

import Index from "./pages/Index";
import Noticias from "./pages/Noticias";
import Noticia from "./pages/Noticia";

function App() {
  return (
    <>
      <CategoryProvider>
        <DataProvider>
          <FavoritesProvider>
            <Theme>
              <Router>
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route exact path="/noticias" component={Noticias} />
                  <Route exact path="/noticias/:id" component={Noticia} />
                </Switch>
              </Router>
            </Theme>
          </FavoritesProvider>
        </DataProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
