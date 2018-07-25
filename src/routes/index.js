import React from 'react';
import { Switch } from 'react-router-dom';
// import PrivateRoutes from '../components/hoc/AuthRoute/privateRoute';
import PublicRoutes from '../components/hoc/AuthRoute/publicRoute';

import Home from '../containers/home';

const Routes = (props) => {
	return(
		<Switch>
			<PublicRoutes {...props} restricted={true} path='/' exact component={Home} />
		</Switch>
	)
}

export default Routes;