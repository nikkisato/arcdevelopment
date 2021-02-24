import React, { useState } from 'react';
import Header from '../components/UI/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/UI/Footer';
import LandingPage from '../components/LandingPage';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          ></Route>
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
            path='/websites'
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
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
