import 'moment';

import './public/style.css'
import './public/styles.scss';

console.log(">>>>> Hello Webpack");

const getTodos = () => import('./public/api');

const app = document.getElementById('root');

const box = document.createElement('div');
box.id = 'box';

app.appendChild(box);

// logic
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log(getTodos);
  getTodos().then(({ fetchTodos }) => {
    console.log(fetchTodos);
    fetchTodos().then(resp => console.log(resp));
  });
});