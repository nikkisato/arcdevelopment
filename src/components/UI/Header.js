import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },

  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    ...theme.typography.estimate,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handlerChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  });
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img alt='logo' src={logo} className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handlerChange}
              className={classes.tabContainer}
              //  indicatorColor='primary'
            >
              <Tab
                label='Home'
                className={classes.tab}
                component={Link}
                to='/'
              />
              <Tab
                label='Services'
                className={classes.tab}
                to='/services'
                component={Link}
              />
              <Tab
                label='The Revolution'
                className={classes.tab}
                to='/revolution'
                component={Link}
              />
              <Tab
                label='About Us'
                className={classes.tab}
                to='/about'
                component={Link}
              />
              <Tab
                label='Contact Us'
                className={classes.tab}
                to='/contact'
                component={Link}
              />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              to='/estimate'
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
