import React from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux';

import { ThemeContext } from './../contexts/Theme';
import Login from './../scenes/login/Login';
import NovoUsuario from './../scenes/novoUsuario/NovoUsuario';
import Welcome from './../scenes/welcome/Welcome';
import Home from './../scenes/home/Home';
import { UserProvider } from './../contexts/UserContext';

const appTitle = 'RN Message';

export default props => (
    <UserProvider>
        <ThemeContext.Consumer>
            {theme =>
                <Router>
                    <Scene key="root" {...theme.router} firebase={props.firebase} >
                        <Scene
                            key='sceneLogin' component={Login} title="Login" type="refresh"
                            theme={theme} initial
                        />
                        <Scene
                            key='sceneCadastro' component={NovoUsuario} title="New user"
                            theme={theme} 
                        />
                        <Scene
                            key='sceneHome' component={Home} title={appTitle}
                            theme={theme} 
                            hideBackImage leftButtonImage={() => null} renderLeftButton={() => null}
                            backTitle=""
                        />
                        <Scene
                            key='sceneWelcome' component={Welcome} title="Welcome"
                            theme={theme} 
                            hideBackImage leftButtonImage={() => null} renderLeftButton={() => null}
                            backTitle="" 
                        />
                    </Scene>
                </Router>
            }
        </ThemeContext.Consumer>
    </UserProvider>
);
