import axios from 'axios';

import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/walks.json`)
    .then((res) => {
      const walks = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        walks.push(res.data[fbKey]);
      });
      resolve(walks);
    })
    .catch(err => reject(err));
});

const addNewWalk = walkObject => axios.post(`${firebaseUrl}/walks.json`, walkObject);

const deleteWalk = walkId => axios.delete(`${firebaseUrl}/walks/${walkId}.json`);

export default { getWalks, addNewWalk, deleteWalk };
