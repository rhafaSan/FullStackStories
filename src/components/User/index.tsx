import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import ParamTypes from './types';
import UseRouteMatchTypes from './types';

const User = () =>  {
    const history = useHistory();
    const location = useLocation();
    const routeMatch = useRouteMatch<UseRouteMatchTypes>('/user/:id');

    useEffect(() => {
        console.log(location.pathname);
    }, [location])

    const handleBack = () => {
        history.goBack();
    }

    const handleNavigation = () => {
        history.push('/user/5');
    }

    return(
        <div>
            <div>This is the user page</div>
            {routeMatch ? (
                <div>user Id - {routeMatch.params.id}</div>
            ) : (
                <div>you are viewin your profile</div>
            )}
            <div>
                <button onClick={handleBack}>Go Back</button>
            </div>
            <div>
                <button onClick={handleNavigation}>Go to Different User</button>
            </div>

            
            
        </div>
    )
}

export default User;