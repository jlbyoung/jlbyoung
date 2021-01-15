import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import MWLogo from '../assets/MW-logo.png';
import Me from '../assets/me.jpeg';
import MW from '../assets/mw.png'

import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles(theme => ({   
    timeline: {
        "font-family" : "Cairo, sans-serif",
        "&.vertical-timeline::before": {
            backgroundColor: "#f5cb5c",
        },
    },
    container: {
        justifyContent: "center",
    },
    logo: {
        width: "40px",
        float: "right",
        paddingLeft: "2px",
        paddingTop: "2px",
    },
    headerBox: {
        display: "inline-flex",
        alignSelf: "center",
    },    
    headerGrid: {
        display: "inline-flex",
        alignSelf: "center",
    },
    header: { 
        display: "none",
        color: "white",
        [theme.breakpoints.up('md')]: {
            margin: "30px",
            display: "flex",
            "text-orientation": "upright",
            "font-family" : "Cairo, sans-serif",
            "writing-mode":"vertical-rl",   
          },
    },
    intro: {
        color: "black",
        "font-family": "Source Code Pro, monospace",
        "line-height": "0.6",
    },    
    intro2: {
        color: "black",
        "font-family": "Source Code Pro, monospace",
    },
    paper: {
        backgroundColor: "#f5cb5c",
        height: "200px",
        width: "auto",
        display: "grid"
    },
    mw: {
        display: "none",
        [theme.breakpoints.up('lg')]: {
            marginTop: "30px",
            display: "grid",
            width: "45%",
            height: "35%",
            "object-fit" : "contain",
          },
    },
    mwGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },    
    media: {
        "border-radius": "2%",
    },
    mwItem: {
        display: "contents",
    },
    link: {
        "text-decoration": "none",
    },
    column: {
        display: "inline-flex",
    },
    divider: {
        backgroundColor: "white"
    },
    end: {
        backgroundColor: "#f5cb5c"
    },
    organization: {
        color: '#e8eddf'
    }
}))
const Experience = () => {
    const intro = "My name is James, I'm a Designer. Coder. Creator."

    const classes = useStyles();
    //My name is James, I'm a Designer. Coder. Creator.
     return (
         <>
         <div className={classes.paper}>
            <Fade>
                {/* <Divider className={classes.divider}/> */}
            <Typography className={classes.intro} variant="h3">HELLO WORLD.</Typography>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('<span variant="h5" style="color: black; font-family: Source Code Pro, monospace;">My name is James. </span>')
                    .pauseFor(500)
                    typewriter.typeString("<span style='color: black; font-family: Source Code Pro, monospace;'>I'm a Designer.</span>")
                    .pauseFor(500)
                    .deleteChars(9)
                    typewriter.typeString('<span style="color: black; font-family: Source Code Pro, monospace;">Coder.</span>')
                    .pauseFor(500)
                    .deleteChars(6)
                    typewriter.typeString('<span style="color: black; font-family: Source Code Pro, monospace;">Creator.</span>')
                    .pauseFor(500)
                    .start();

                }}
                
            /></Fade>
         </div>
         <Grid className={classes.container} container>
            <Grid className={classes.headerGrid} item>
                <Fade left>
                <Box className={classes.headerBox}>
                <Typography variant="h4" className={classes.header}>Experience</Typography>
                </Box>
                </Fade>
            </Grid>
            <Grid item>
                <Fade duration={3000} big>
                <Slide top>
                <VerticalTimeline className={classes.timeline} layout={"1-column-left"}>

                <VerticalTimelineElement
                    className={classes.work}
                    contentStyle={{ background: 'black', color: '#f5cb5c', border: '4px outset #cfdbd5' }}
                    contentArrowStyle={{ borderRight: '9px solid  #fff' }}
                    date="July 2020 - present"
                    iconStyle={{ background: '#fff', color: '#fff' }}
                    icon={<img className={classes.logo} src={MWLogo} alt="Logo"/>}
                >
                    <Grid className={classes.mwGrid} container>
                        <Grid item>  
                            <Typography className={classes.organization} variant="h4">MeaningfulWork</Typography>
                            <Typography><a href="https://app.meaningfulwork.xyz" target="_blank">https://app.meaningfulwork.xyz</a></Typography>
                            <h5 className="vertical-timeline-element-title">Director of Product & Software Engineer</h5>
                            <p>
                                End to End Product Development, Product Design, Full Stack Software Engineer
                            </p>                
                            <p>
                                React Redux, JavaScript, MongoDB, AWS
                            </p>  
                        </Grid>         
                        <Grid className={classes.mwItem} item>
                            <Box className={classes.mw}>
                                <Fade>
                                <CardMedia 
                                    className={classes.media}
                                    component="img" 
                                    image={MW} />
                                </Fade>
                                </Box>
                        </Grid>    

                    </Grid>            

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'black', color: '#f5cb5c', border: '4px outset #cfdbd5'}}
                    contentArrowStyle={{ borderRight: '9px solid  #fff' }}
                    date="Sep 2018 - present"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <Typography className={classes.organization} variant="h4">Simon Fraser University</Typography>
                    <h5 className="vertical-timeline-element-title">Bachelor of Applied Science, Computer Science</h5>
                    <p>
                        Python, MATLAB, C++, SQL, Java
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'black', color: '#f5cb5c', border: '4px outset #cfdbd5' }}
                    contentArrowStyle={{ borderRight: '9px solid  #fff' }}
                    date="Sep 2016 - Aug 2018"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <Typography className={classes.organization} variant="h4">Langara College</Typography>
                    <h5 className="vertical-timeline-element-title">Associates of Science, Computer Science</h5>
                    <p>
                        C++, Java, Swift, UX/UI
                    </p>
                </VerticalTimelineElement>
            
                </VerticalTimeline>
                </Slide>
                </Fade>            
            </Grid>  


        </Grid>
        <Divider className={classes.end}></Divider>
        </>
     )
}

export default Experience;