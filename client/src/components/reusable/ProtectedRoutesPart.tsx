import React from "react";
import {ProtectedRoute} from "./ProtectedRoute";
import {ChangePage} from "../change/ChangePage";
import {UsersPage} from "../users/UsersPage";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export const ProtectedRoutesPart: React.FC = () => {

    const user = useSelector((store: RootState) => store.user);

    return (
        <>
            <ProtectedRoute
                component={ChangePage}
                path={'/change'}
                isAuth={!!user}/>
            <ProtectedRoute
                component={UsersPage}
                path={'/users'}
                isAuth={user.userCredential?.role === 'admin'}/>
        </>
    )
}