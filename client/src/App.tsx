import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Layout} from "antd";
import {Provider, useSelector} from "react-redux";
import {RootState, store} from "./store/store";
import {Navbar} from './components/navbar/Navbar';
import {MainPage} from "./components/main/MainPage";
import {CreateAccountPage} from "./components/create/CreateAccountPage";
import {ProtectedRoutesPart} from "./components/reusable/ProtectedRoutesPart";

const App: React.FC = () => {

    return (
        <HashRouter>
            <Layout className="layout">
                <Provider store={store}>
                <Navbar/>
                <Switch>
                    <Route path={'/'} component={MainPage} exact={true}/>
                    <Route path={'/user'} component={CreateAccountPage}/>
                    <ProtectedRoutesPart/>
                </Switch>
                </Provider>
            </Layout>
        </HashRouter>
    );
}

export default App;
