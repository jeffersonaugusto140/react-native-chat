import React from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux';

import { ThemeContext } from './../contexts/Theme';
import Login from './../scenes/login/Login';
import NovoUsuario from './../scenes/novoUsuario/NovoUsuario';
import Home from './../scenes/home/Home';
import { UserProvider } from './../contexts/UserContext';

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
                            key='sceneCadastro' component={NovoUsuario} title="Cadastro"
                            theme={theme} 
                        />
                        <Scene
                            key='sceneHome' component={Home} title="RN Message"
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
