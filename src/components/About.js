import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({   
    header: { 
    display: "none",
    color: "white",
    [theme.breakpoints.up('md')]: {
            marginTop: "3rem",
            display: "flex",
            "font-family" : "Cairo, sans-serif",
        },
    },
    headerBox: {
        display: "inline-flex",
        alignSelf: "center",
    },    
}));

const About = () => {
    const classes = useStyles();
    return (
        <>
        <div>
        <Box className={classes.headerBox}>
            <Typography variant="h4" className={classes.header}>A b o u t</Typography>
        </Box>
        </div>
        </>
     )
}

export default About;