import React from 'react';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';
import StudyBuddy from '../assets/StudyBuddy.png';

import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({   
    header: { 
        display: "none",
        color: "white",
        "font-family" : "Cairo, sans-serif",
        [theme.breakpoints.up('md')]: {
            marginTop: "3rem",
            display: "flex",
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
        maxWidth: "100%",
        height: "600px",
        margin: "3rem",
        padding: "3rem",
        backgroundColor: "black",
        border: '4px outset #f5cb5c'
    },
    title: {
        color: "#e8eddf",
        "font-family" : "Cairo, sans-serif",
    },
    text: {
        color: "#f5cb5c",
        paddingBottom: '8px'
    },
    media: {
        height: 200
    },
    gridContainer: {
        height: '100%'
    },
    projectImgGrid: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '32px',
        paddingLeft: '20%'
    },
    projectTitleGrid: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        paddingRight: '20%'
    },
    descContainer: {
        paddingTop: '5%'
    }
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
                        <Grid className={classes.gridContainer} container>
                            <Grid className={classes.projectImgGrid} item>
                                <img className={classes.media} src={StudyBuddy}/>
                            </Grid>
                            <Grid className={classes.projectTitleGrid} item>
                                <Typography variant="h3" className={classes.title}>Study Buddy</Typography>
                                <Typography variant="h6" className={classes.text}> <a href="http://www.studybuddies.online/" target="blank">http://www.studybuddies.online/</a></Typography>
                                <Typography variant="h5" className={classes.text}><GradeIcon></GradeIcon> nwHacks 2021 - 1st Place Winner</Typography>
                                <Typography variant="h5" className={classes.text}>Full Stack Developer & Product Designer</Typography>
                                <Container className={classes.descContainer}>
                                    <Typography className={classes.text}>
                                        Study Buddy is a platform about collaboration, connection, and learning. It allows multiple users to enter one room and access tools like watching youtube tutorials, 
                                        brainstorming on a drawable whiteboard, and code in our inbuilt browser IDE all in real-time
                                    </Typography>

                                </Container>
                                <Container className={classes.descContainer}>                                   
                                    <Typography className={classes.text}>
                                        My role in this project was full stack developer and end to end product designer. I assisted in designing and testing the prototype as well as integrating the design with React. 
                                        I implemented the real-time whiteboard, communicating with socket.io, added Dark Mode, researching and integrating the SphereEngine IDE.
                                    </Typography>
                                </Container> 
                            </Grid>
                        </Grid>
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