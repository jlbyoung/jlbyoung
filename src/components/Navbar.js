import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({    
    root: {
        backgroundColor:  "black",
        //backgroundColor:  "#ffdd00",
    },
    box: {
        height: 35,
        width: 250,
        textAlign: "center",
        display: "flex",
      //marginTop: theme.spacing(1),    
      marginTop: 15,
    },
    icon: {
        color: "#ffc966",
        "transition" : "all 0.6s",
        opacity : "1",
            "&:hover": {
                opacity: "0.6",
        }
    }, 
    container: {
        display: "none",
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            position: 'relative', 
            width: 'auto'
          },
      marginLeft: 'auto',
    },
    nav: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
          display: 'flex',
          width: 'auto',
          justifyContent: 'center'
        },
    },
    name: {      
        color: "#ffc966",
        "transition" : "all 0.6s",
        "font-size" : "26px",
        "font-family" : "Cairo, sans-serif",
        "letter-spacing" : "2px",
        "text-transform" : "uppercase",
        "text-decoration": "none",
        marginLeft: "30px",
        marginRight: "30px",
        opacity : "1.0",
            "&:hover": {
                opacity: "0.6",
                "font-size": "27px"
          }
    },
    link: {
        "text-decoration": "none",
    },
    navBtns: {
        color: "#ffc966",
        "transition" : "all 0.6s",
        "font-size" : "1rem",
        "font-family" : "Cairo, sans-serif",
        "letter-spacing" : "2px",
        "text-transform" : "uppercase",
        "text-decoration": "none",
        opacity : "1.0",
        "&:hover": {
            opacity: "0.6",
            "font-size": "1.01rem"
      }
    },
    menuButton:{
      display: 'block',
      marginRight: 10,
      position: 'absolute',
      right: 0,
      [theme.breakpoints.up('md')]: {
          display: ' none',
        },
    },
    drawerPaper: {
      width: 250,
    },
    socials: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            width: 'auto',        
            "flex-direction": "row",
            marginLeft: "auto",
            justifyContent: "flex-end"
          },
    },  
    divider: {
        backgroundColor: "white",
    }  
  }));
  
const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null); 
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const open = Boolean(anchorEl);
  

    return (
        <>
        <AppBar className={classes.root} position="sticky" color='transparent'>
            <Toolbar>                    
                <Grid container>
                    <div className={classes.title}>
                        <a className={classes.link} href="">
                            <Typography className={classes.name} variant="h5">James Young</Typography>
                        </a>        
                    </div>
                </Grid>
                <Grid className={classes.nav} container>
                    <Grid item>
                        <List className={classes.container}>  
                            <Divider className={classes.divider} orientation="vertical" flexItem />                          
                            
                            <ListItem>
                                <li><a className={classes.navBtns} href="#experience">Experience</a></li>
                            </ListItem>
                            <Divider className={classes.divider} orientation="vertical" flexItem />
                            <ListItem >
                                <li><a className={classes.navBtns} href="#projects">Projects</a></li>
                            </ListItem>
                            <Divider className={classes.divider} orientation="vertical" flexItem />
                            <ListItem>
                                <li><a className={classes.navBtns} href="#about">About</a></li>
                            </ListItem>
                            <Divider className={classes.divider} orientation="vertical" flexItem />

                        </List>
                    </Grid>
                </Grid>
                
                <Grid className={classes.socials} container>
                    <Grid item>
                        <List className={classes.container}>
                            
                            <IconButton className={classes.icon} href="https://www.linkedin.com/in/jlbyoung/" target="_blank">
                                <LinkedInIcon/>
                            </IconButton>
                            <IconButton className={classes.icon} href="https://github.com/jlbyoung" target="_blank">
                                <GitHubIcon/>
                            </IconButton>      
                            <IconButton className={classes.icon} href="https://www.instagram.com/imjamsyoung/" target="_blank">
                                <InstagramIcon/>
                            </IconButton>
                        </List>
                    </Grid>
                </Grid>      

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

                {/* Mobile Navbar */}
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <Paper elevation={0} className={classes.drawerPaper}>
                    <Button size='small' onClick={handleDrawerToggle} style={{margin: 10}} color="default">
                        <CloseIcon color='primary'/>
                    </Button>
                        
                    <List>
                        <Divider />
                        <ListItem>
                            <li><a className={classes.navBtns} href="#experience">Experience</a></li>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <li><a className={classes.navBtns} href="#projects">Projects</a></li>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <li><a className={classes.navBtns} href="#about">About</a></li>
                        </ListItem>
                        <Divider />
                    </List>
                    <Grid container>
                        <Grid item>
                            <List>
                            <IconButton className={classes.icon}>
                                <LinkedInIcon/>
                            </IconButton>                    
                            <IconButton className={classes.icon}>
                                <GitHubIcon/>
                            </IconButton>                    
                            <IconButton className={classes.icon}>
                                <InstagramIcon/>
                            </IconButton>
                            </List>
                        </Grid>
                    </Grid>      
                    </Paper>
                    
                </Drawer>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;