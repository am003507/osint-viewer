import * as React from 'react';
import {
  Drawer,
  makeStyles,
  fade,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    minWidth: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  titleWrapper: {
    display: 'flex',
  },
  title: {
    marginLeft: 16,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.54)',
    marginTop: 8,
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Drawers: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}> OSINT</span>
          </div>
        </div>
        <Divider />
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button key="DASHBOARD">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="DASHBOARD" />
            </ListItem>
          </Link>
          <Link to="/ioc/list" className={classes.link}>
            <ListItem button key="ioc">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="IOC" />
            </ListItem>
          </Link>
          <Link to="/report/list" className={classes.link}>
            <ListItem button key="report">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="REPORT" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default Drawers;
