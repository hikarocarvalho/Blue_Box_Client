import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Perfil from "./pages/perfil/Perfil";
import Manager from "./pages/manager/Manager";
import Library from "./pages/library/Library";
import Store from "./pages/store/Store";
import NotFound from "./pages/notFound/NotFound";
import Description from "./pages/description/Description";
import CreateGame from "./pages/createGame/CreateGame";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
export default function Routes(){
    return(
        <Switch>
            <GuardedRoute exact path="/" component={Store} />
            <Route exact path="/register" component={Register} />
             
            <GuardedRoute exact path="/perfil" component={Perfil} />
            <GuardedRoute exact path="/library" component={Library} />
            <Route exact path="/login">
                <Login></Login>
            </Route>
            <GuardedRoute exact path="/manager" component={Manager} />
            <GuardedRoute exact path="/description/:id" component={Description} />
            <GuardedRoute exact path="/creategame" component={CreateGame} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}