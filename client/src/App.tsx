import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Layout} from "antd";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Navbar} from './components/navbar/Navbar';
import {MainPage} from "./components/main/MainPage";

const App: React.FC = () => {

    return (
        <HashRouter>
            <Layout className="layout">
                <Provider store={store}>
                <Navbar/>
                <Switch>
                    <Route path={'/'} component={MainPage} exact={true}/>
                    <Route path={'/user'}/>
                </Switch>
                </Provider>
            </Layout>
        </HashRouter>
    );
}

export default App;
