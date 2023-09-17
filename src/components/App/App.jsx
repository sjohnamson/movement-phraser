import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// page imports
import AboutPage from '../AboutPage/AboutPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NoProjectPage from '../NoProjectPage/NoProjectPage';
import Homepage from '../Homepage/Homepage';
import UpdatePage from '../UpdatePage/UpdatePage';
import AddClipPage from '../AddClipPage/AddClipPage';
import JoinProjectPage from '../JoinProjectPage/JoinProjectPage';
import MakeProjectPage from '../MakeProjectPage/MakeProjectPage';
import ModifyClipPage from '../ModifyClipPage/ModifyClipPage.jsx';
import BottomNavigationBar from '../BottomNavigationBar/BottomNavigationBar';
import MakePhrasePage from '../MakePhrasePage/MakePhrasePage';
import PhrasePage from '../PhrasePage/PhrasePage';
import AddClipPhrasePage from '../AddClipPhrasePage/AddClipPhrasePage';
// style imports
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  // changes to the material ui color palette
  let theme = createTheme({
    palette: {
      primary: {
        main: '#d5a021'
      },
      secondary: {
        main: '#ceeada',
      },
      error: {
        main: '#ff312e',
      },
      warning: {
        main: '#d81e5b',
      },
      info: {
        main: '#2D3047',
      },
      success: {
        main: '#566e3d'
      },
      contrastThreshold: 4.5,
      tonalOffset: 0.5,
    },
  });

  theme = createTheme(theme, {
    // Custom colors created with augmentColor 
    palette: {
      pink: theme.palette.augmentColor({
        color: {
          main: '#F8c7cc',
        },
        name: 'pink',
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/* <Nav />
        <BottomNavigationBar /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows Homepage else shows LoginPage
              exact
              path="/main"
            >
              <Nav />
              <BottomNavigationBar />
              <Homepage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows PhrasePage else shows LoginPage
              exact
              path="/phrases"
            >
              <Nav />
              <BottomNavigationBar />
              <PhrasePage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows AddClipPhrasePage else shows LoginPage
              exact
              path="/addclipphrase"
            >
              <Nav />
              <BottomNavigationBar />
              <AddClipPhrasePage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows UpdatePage else shows LoginPage
              exact
              path="/update"
            >
              <Nav />
              <BottomNavigationBar />
              <UpdatePage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              <Nav />
              <BottomNavigationBar />
              <InfoPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows AddClipPage else shows LoginPage
              exact
              path="/addclip"
            >
              <Nav />
              <BottomNavigationBar />
              <AddClipPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows ModifyClipPage else shows LoginPage
              exact
              path="/modifyclip"
            >
              <Nav />
              <BottomNavigationBar />
              <ModifyClipPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows MakePhrasePage else shows LoginPage
              exact
              path="/makephrase"
            >
              <Nav />
              <BottomNavigationBar />
              <MakePhrasePage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows JoinProject else shows LoginPage
              exact
              path="/joinproject"
            >
              <Nav />
              <BottomNavigationBar />
              <JoinProjectPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows MakeProject else shows LoginPage
              exact
              path="/makeproject"
            >
              <Nav />
              <BottomNavigationBar />
              <MakeProjectPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows ModifyClipPage else shows LoginPage
              exact
              path="/modifyclip"
            >
              <Nav />
              <BottomNavigationBar />
              <ModifyClipPage />
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /main page
                <Redirect to="/main" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/noproject"
            >
              {user.current_project ?
                // If the user has a current project, 
                // redirect to the /main page
                <Redirect to="/main" />
                :
                // Otherwise, show the noprojectpage page
                <>
                <Nav />
                <BottomNavigationBar />
                <NoProjectPage />
                </>
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/main" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/main" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
