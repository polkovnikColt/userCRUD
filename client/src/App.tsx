import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Layout} from "antd";
import {Provider, useSelector} from "react-redux";
import {RootState, store} from "./store/store";
import {Navbar} from './components/navbar/Navbar';
import {MainPage} from "./components/main/MainPage";
import {CreateAccountPage} from "./components/create/CreateAccountPage";
import {ProtectedRoute} from "./components/reusable/ProtectedRoute";
import {ChangePage} from "./components/change/ChangePage";
import {UsersPage} from "./components/users/UsersPage";

const App: React.FC = () => {

    const user = useSelector((store:RootState) => store.user);

    return (
        <HashRouter>
            <Layout className="layout">
                <Provider store={store}>
                <Navbar/>
                <Switch>
                    <Route path={'/'} component={MainPage} exact={true}/>
                    <ProtectedRoute
                        component={CreateAccountPage}
                        path={'/user'}
                        isAuth={!!user} />
                    <ProtectedRoute
                        component={ChangePage}
                        path={'/change'}
                        isAuth={!!user}/>
                    <ProtectedRoute
                        component={UsersPage}
                        path={'/users'}
                        isAuth={user.userCredential?.role === 'admin'}/>
                </Switch>
                </Provider>
            </Layout>
        </HashRouter>
    );
}

export default App;
