import React from "react";
import { Route, Switch } from 'react-router-dom';
import Sidebar from './features/Sidebar';
import Body from './features/Content';
import Feed from './features/Feed';
import User from './features/User';
import Users from './features/Users';
import Search from './features/Search';

const Routes: React.FC = () =>
	<>
		<Sidebar />
		<Body>
			<Switch>
				<Route exact path="/" component={ Feed } />
				<Route path="/user/:user" component={ User } />
				<Route exact path="/users" component={ Users } />
				<Route exact path="/search" component={ Search } />
				<Route path="*" render={() => <div>Page Not Found</div>} />
			</Switch>
		</Body>
	</>;

export default Routes;