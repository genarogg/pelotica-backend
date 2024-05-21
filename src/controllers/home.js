const homeGet = (req, res) => {
  res.render("home/home", {});
};

const homePost = (req, res) => {
  const { nombre, correo } = req.body;

  console.log(nombre, correo);
};

export { homeGet, homePost };
