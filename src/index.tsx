import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyles from './global-styles';
import Layout from './components/Layout';
import store from './store';
import history from './history';
import Routes from './routes';

const App: React.FC = () => {
	return (
		<Provider store={ store }>
			<ConnectedRouter history={ history }>
				<Layout>
					<Routes />
				</Layout>
				<GlobalStyles />
			</ConnectedRouter >
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));