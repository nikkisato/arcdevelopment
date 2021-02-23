import Header from '../components/UI/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>}></Route>
          <Route
            exact
            path='/services'
            component={() => <div>Services</div>}
          ></Route>
          <Route
            exact
            path='/customsoftware'
            component={() => <div>customsoftware</div>}
          ></Route>
          <Route
            exact
            path='/mobileapps'
            component={() => <div>mobileapps</div>}
          ></Route>
          <Route
            exact
            path='/website'
            component={() => <div>website</div>}
          ></Route>
          <Route
            exact
            path='/revolution'
            component={() => <div>revolution</div>}
          ></Route>
          <Route exact path='/about' component={() => <div>about</div>}></Route>
          <Route
            exact
            path='/contact'
            component={() => <div>contact</div>}
          ></Route>
          <Route
            exact
            path='/estimate'
            component={() => <div>estimate</div>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
