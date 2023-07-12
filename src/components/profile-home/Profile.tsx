import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import About from '../about-page/about-section';



const useStyles = makeStyles((theme) => ({
  homePage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#000000',
    padding: theme.spacing(4),
    position: 'relative',
    overflow: 'hidden',
  },
  heroSection: {
    marginBottom: theme.spacing(8),
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#333',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  backgroundImages: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  backgroundImageContainer: {
    position: 'relative',
    width: '30%',
    height: '100%',
    overflow: 'hidden',
    marginRight: theme.spacing(2),
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.4,
  },
  dataSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: theme.spacing(4),
  },
  dataItem: {
    background: '#fff',
    padding: theme.spacing(4),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  dataTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#333',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  dataDescription: {
    color: '#777',
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
  },
  aboutPage: {
    display: 'flex',
 
    justifyContent: 'flex-start',
    minHeight: '100vh',
    padding: theme.spacing(4),
    background: '#f2f2f2',
  },
  textContainer: {
    textAlign: 'start',
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#333',
  },
  description: {
    color: '#777',
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
  },
  
}));


const Profile = (): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();
  const [data, setData] = useState<string[]>([]);
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageUrls: string[] = [];
        for (let i = 0; i < 3; i++) {
          const response = await fetch(
            `https://source.unsplash.com/collection/your-collection-id/${800 + i}x600`
          );
          const imageUrl = response.url;
          imageUrls.push(imageUrl);
        }
        setData(imageUrls);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div className={classes.homePage}>
      <div className={classes.heroSection}>
        <motion.div
          className={classes.backgroundImages}
          style={{
            x: x,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {data.map((imageUrl, index) => (
            <div
              key={index}
              className={classes.backgroundImageContainer}
              style={{ marginLeft: index !== 0 ? theme.spacing(2) : 0 }}
            >
              <motion.img
                src={imageUrl}
                alt={`Background Image ${index + 1}`}
                className={classes.backgroundImage}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{
                  duration: 2,
                  type: 'spring',
                  stiffness: 75,
                  damping: 10,
                }}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          className={classes.heroTitle}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}
          >
            Welcome to
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}
          >
            Spectacular
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}
          >
            Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            style={{ fontSize: '1.5rem', color: '#777', marginBottom: '2rem' }}
          >
            Discover the world of creativity and innovation
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      <div className={classes.aboutPage}>
      <div className={classes.textContainer}>
        <Typography variant="h1" className={classes.title}>
          About Me
        </Typography>
        <Typography variant="body1" className={classes.description}>
          We are a team of creative individuals passionate about delivering innovative solutions.
        </Typography>
        <About/>
      </div>

     
    </div>
    </div>
  );
};

export default Profile;
