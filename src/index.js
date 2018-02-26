import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import MusicDirectory from "./container/MusicDirectory/MusicDirectory";
import Playlist from "./container/Playlist/Playlist";

ReactDOM.render(<Router>
	<Switch>
		<Route exact path="/" component={MusicDirectory}/>
		<Route path="/playlist" component={Playlist} />
	</Switch>
</Router>, document.getElementById('root'));
registerServiceWorker();
