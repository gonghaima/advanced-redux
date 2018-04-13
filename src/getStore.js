import {
    createStore
} from 'redux';
import { initializeDB } from '../server/db/initializeDB';
import { users } from '../server/db/User';
import { getDefaultState } from '../server/getDefaultState';

initializeDB();

const currentUser = users[0];

const defaultState = getDefaultState(currentUser);

console.log('====================================');
console.log(`defaultState:${defaultState}`);
console.log('====================================');

const reducer = state => state;

const store = createStore(reducer,defaultState);

export const getStore = ()=>store;
