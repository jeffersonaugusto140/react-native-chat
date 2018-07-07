import React from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux';

import { ThemeContext } from './../contexts/Theme';
import { UserContext } from './../contexts/UserContext';

import Login from './../scenes/login/Login';
import NovoUsuario from './../scenes/novoUsuario/NovoUsuario';

export default () => (
    <ThemeContext.Consumer>
        {theme =>
            <UserContext.Consumer>
                {user =>
                    <Router>
                        <Scene key="root" {...theme.router} >
                            <Scene 
                                key='sceneLogin' component={Login} title="Login" 
                                theme={theme} user={user} init
                            />
                            <Scene 
                                key='sceneCadastro' component={NovoUsuario} title="Cadastro" 
                                theme={theme} 
                            />
                        </Scene>
                    </Router>}
            </UserContext.Consumer>
        }
    </ThemeContext.Consumer>
);
