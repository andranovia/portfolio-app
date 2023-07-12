import React, { useEffect, useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileImage from '/profile1.jpg';

const Jslogo =
  'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '120vh',
    position: 'relative',
    overflow: 'hidden',
  },
  logoContainer: {
    position: 'relative',
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-100px',
  },
  logo: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  floatingImageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    perspective: '800px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '40px',
  },
  floatingImage: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
  floatingImageContainer2: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    perspective: '800px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '40px',
  },
}));

const About = () => {
  const classes = useStyles();
  const [isInView, setIsInView] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimated(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
    });

    const container = document.getElementById('about-container');
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      setIsAnimated(false);
    }
  }, [isInView]);

  const animation = {
    scale: isAnimated ? 1.5 : 1,
    transition: {
      duration: 0.3,
    },
  };

  const floatingImageAnimation = {
    x: {
      type: 'spring',
      from: '-100%',
      to: 0,
    },
    opacity: {
      type: 'spring',
      from: 0,
      to: 1,
    },
    transition: {
      duration: 2,
      repeat: isInView ? Infinity : 0,
      repeatType: 'mirror',
    },
  };
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <div className={classes.container} id="about-container">
          <div className={classes.logoContainer}>
            <AnimatePresence>
              {isInView && (
                <motion.img
                  src={ProfileImage}
                  alt="Profile"
                  className={classes.logo}
                  animate={animation}
                  onAnimationComplete={handleAnimationComplete}
                />
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isAnimated && (
              <motion.div
                className={classes.floatingImageContainer}
                initial={{ opacity: 0, y: '150%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
              >
                <motion.img
                  className={classes.floatingImage}
                  src={Jslogo}
                  animate={floatingImageAnimation}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isAnimated && (
              <motion.div
                className={classes.floatingImageContainer2} 
                initial={{ opacity: 0, y: '150%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: '100%' }}
              >
                <motion.img
                  className={classes.floatingImage}
                  src={Jslogo}
                  animate={floatingImageAnimation} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default About;
