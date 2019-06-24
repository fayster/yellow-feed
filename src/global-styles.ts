import { createGlobalStyle   } from 'styled-components';

export default createGlobalStyle`
	a {
		text-decoration: none;
		font-weight: 700;
	}
	
	a:hover {
		text-decoration: underline;
	}
	
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	html {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		font-family: "PT Sans", Helvetica, Arial, sans-serif;
		font-size: 14px;
	}
	
	body {
		display: flex;
		flex: auto;
		flex-direction: column;
		padding: 0;
		margin: 0;
		background: #e6ecf0;
	}
	
	#app {
		display: flex;
		flex: auto;
		flex-direction: column;
	}
`;