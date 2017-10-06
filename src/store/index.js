import { createStore } from 'redux';
import reducer from '../reducers/index';
import constants from './constants';

const store = createStore(reducer) ;

export default store;