import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/UI/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import { Link } from 'react-router-dom';
import CallToAction from './UI/CallToAction';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: { marginTop: '1em' },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
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

  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    },
  },
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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container direction='column' className={classes.mainContainer}>
        {/*-----Hero Block-----*/}
        <Grid item>
          <Grid
            container
            direction='row'
            justify='flex-end'
            alignItems='center'
          >
            <Grid item sm className={classes.heroTextContainer}>
              <Typography align='center' variant='h2'>
                Bringing West Coast Technology <br /> to the Midwest
              </Typography>
              <Grid
                container
                justify='center'
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    variant='contained'
                    className={classes.estimateButton}
                    to='/estimate'
                    component={Link}
                    onClick={() => props.setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButtonHero}
                    to='/revolution'
                    component={Link}
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
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
        {/*-----iOS/Android Block-----*/}
        <Grid item>
          <Grid
            justify={matchesSM ? 'center' : 'flex-end'}
            container
            direction='row'
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
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
              />
            </Grid>
          </Grid>
        </Grid>
        {/*-----Website Block-----*/}
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
            <Grid item>
              <img
                className={classes.icon}
                src={websitesIcon}
                alt='website icon'
              />
            </Grid>
          </Grid>
        </Grid>
        {/*-----Revolution Block-----*/}
        <Grid item>
          <Grid
            container
            alignItems='center'
            justify='center'
            style={{ height: '100em', marginTop: '12em' }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction='column'
                  style={{ textAlign: 'center' }}
                >
                  <Grid item>
                    <Typography variant='h3' gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1'>
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      to='/revolution'
                      component={Link}
                      variant='outlined'
                      className={classes.learnButton}
                      onClick={() => {
                        props.setValue(3);
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
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        {/*-----Information Block-----*/}
        <Grid item>
          <Grid
            container
            style={{ height: '80em' }}
            alignItems='center'
            direction='row'
            className={classes.infoBackground}
          >
            <Grid
              item
              container
              style={{
                textAlign: matchesXS ? 'center' : 'inherit',
              }}
              direction={matchesXS ? 'column' : 'row'}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                }}
              >
                <Grid
                  container
                  style={{ marginBottom: matchesXS ? '10em' : 0 }}
                  direction='column'
                >
                  <Typography variant='h2' style={{ color: 'white' }}>
                    About Us
                  </Typography>
                  <Typography variant='subtitle2'>
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to='/about'
                      variant='outlined'
                      style={{ color: 'white', borderColor: 'white' }}
                      className={classes.learnButton}
                      onClick={() => props.setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill='white' />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                  textAlign: matchesXS ? 'center' : 'right',
                }}
              >
                <Grid container direction='column'>
                  <Typography variant='h2' style={{ color: 'white' }}>
                    Contact Us
                  </Typography>
                  <Typography variant='subtitle2'>
                    Say hello!{' '}
                    <span role='img' aria-label='waving hand'>
                      👋🏻
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to='/contact'
                      variant='outlined'
                      style={{ color: 'white', borderColor: 'white' }}
                      className={classes.learnButton}
                      onClick={() => props.setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill='white' />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CallToAction setValue={props.setValue} />
        </Grid>
      </Grid>
    </>
  );
}