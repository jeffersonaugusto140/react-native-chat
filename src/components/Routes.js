import React from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux';

import { ThemeContext } from './../contexts/Theme';
import Login from './../scenes/login/Login';
import NovoUsuario from './../scenes/novoUsuario/NovoUsuario';
import { UserProvider } from './../contexts/UserContext';

export default () => (
    <UserProvider>
        <ThemeContext.Consumer>
            {theme =>
                <Router>
                    <Scene key="root" {...theme.router} >
                        <Scene
                            key='sceneLogin' component={Login} title="Login" type="refresh"
                            theme={theme} initial
                        />
                        <Scene
                            key='sceneCadastro' component={NovoUsuario} title="Cadastro"
                            theme={theme} 
                        />
                    </Scene>
                </Router>
            }
        </ThemeContext.Consumer>
    </UserProvider>
);
