import 'moment';
import MainPage from './pages/MainPage';
import OtherPage from './pages/OtherPage';
import Router from './Router';

import './public/styles.scss';

console.log(">>>>> Hello Webpack");

const pages = [
  { page: MainPage, path: 'main' },
  { page: OtherPage, path: 'other' },
];

const router = new Router({ pages });