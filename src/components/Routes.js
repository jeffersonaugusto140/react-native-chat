import React from 'react';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';

import { ThemeContext } from './Theme';

import Login from './../scenes/login/Login';
import NovoUsuario from './../scenes/novoUsuario/NovoUsuario';

export default props => (
    <ThemeContext.Consumer>
        {theme =>
            <Router>
                <Scene key="root" {...theme.router} >
                    <Scene key='sceneLogin' component={Login} title="Login" init />
                    <Scene key='sceneCadastro' component={NovoUsuario} title="Cadastro" />
                </Scene>
            </Router>
        }
    </ThemeContext.Consumer>
);
