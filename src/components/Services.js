import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import ButtonArrow from './UI/ButtonArrow';

const useStyles = makeStyles(theme => ({
  specialText: { fontFamily: 'Pacifico', color: theme.palette.common.orange },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
      >
        <Typography
          variant='h2'
          gutterBottom
          align={matchesSM ? 'center' : undefined}
        >
          Services
        </Typography>
      </Grid>
      {/*-----iOS/Android Block-----*/}
      <Grid item>
        <Grid
          justify={matchesSM ? 'center' : 'flex-end'}
          container
          direction='row'
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              to='/mobileapps'
              component={Link}
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt='Mobile phone = icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Custom Software Block-----*/}
      <Grid item>
        <Grid
          justify={matchesSM ? 'center' : undefined}
          container
          direction='row'
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              to='/customsoftware'
              component={Link}
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt='custom software icon'
            />
          </Grid>
        </Grid>
      </Grid>

      {/*-----Website Block-----*/}
      <Grid item>
        <Grid
          justify={matchesSM ? 'center' : 'flex-end'}
          container
          direction='row'
          className={classes.serviceContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              to='/websites'
              component={Link}
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={websitesIcon}
              alt='website icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
