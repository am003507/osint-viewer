import * as React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  Container,
  fade,
} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Drawers from './components/molecules/Drawers';
import Routers from './components/molecules/Routers';

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
  wrapper: {
    padding: 50,
  },
}));
const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              OSINT
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawers />
        <Container maxWidth="xl">
          <div className={classes.toolbar} />
          <div className={classes.wrapper}>
            <Routers />
          </div>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
