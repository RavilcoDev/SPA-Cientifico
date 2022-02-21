import Header from '../templates/Header';
import Home from '../pages/Home';
import Characters from '../pages/Characters';
import About from '../pages/About';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Characters,
  '/contact': 'Contact',
  '/about': About
};
const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = Header();

  const hash = getHash();
  console.log(hash)
  const route = resolveRoutes(hash);
  const render = routes[route] ? routes[route] : Error404();

  console.log(render)
  content.innerHTML = await render();
};

export default router;
