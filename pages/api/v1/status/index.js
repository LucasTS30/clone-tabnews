function status(request, response) {
  response.status(200).json({ chave: "tá tudo certo!" });
}

export default status;
