import axios from 'axios';

import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewWalk = walkObject => axios.post(`${firebaseUrl}/walks.json`, walkObject);

export default { addNewWalk };
