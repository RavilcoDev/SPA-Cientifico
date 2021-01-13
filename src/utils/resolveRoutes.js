const resolveRoutes = route => {
  if (route.length <= 3) {
    let valitRoute = route === '/' ? route : '/:id';
    return valitRoute;
  }

  return `/${route}`;
};

export default resolveRoutes;
