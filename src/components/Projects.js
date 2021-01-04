import React from 'react';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade'

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
    headerGrid: {
        display: "inline-flex",
        alignSelf: "center",
    },
    container: {
        display: "flex",
        "flex-wrap": "inherit",
        justifyContent: "center"
    },
    itemGrid: {
        width: "90%"
    },
    card: {
        width: "90%",
        maxWidth: "4000px",
        height: "600px",
        margin: "3rem",
        padding: "3rem",
        backgroundColor: "black",
        border: '4px outset #ffc966'
    },
}));
const Projects = () => {
    const classes = useStyles();
     return (
        <>
        <div>
        <Box className={classes.headerBox}>
            <Typography variant="h4" className={classes.header}>P r o j e c t s</Typography>
        </Box>
        <Grid className={classes.container} container>
            <Grid className={classes.itemGrid} item>
                <Grid className={classes.item} sm={12} item>
                    <Fade right>
                    <Card className={classes.card}>
                        <CardMedia></CardMedia>
                        <Typography>Test</Typography>
                    </Card>
                    </Fade>
                </Grid>               
                <Grid className={classes.item} sm={12} item>                    
                    <Fade left>
                    <Card className={classes.card}>
                        <CardMedia></CardMedia>
                        <Typography>Test</Typography>
                    </Card>
                    </Fade>
                </Grid>              
                <Grid className={classes.item} sm={12} item>
                    <Fade right>
                    <Card className={classes.card}>
                        <CardMedia></CardMedia>
                        <Typography>Test</Typography>
                    </Card>
                    </Fade>
                </Grid>           
             </Grid>
        </Grid>
        </div>
        </>
     )
}

export default Projects;