export function buscarUsuarioLogado() {
  const usuarioLogado = JSON.parse(
    localStorage.getItem('@cidadania-brasil:usuario-logado')
  );

  if (usuarioLogado) {
    return usuarioLogado;
  } else {
    window.location.href = '../login/index.html';
  }
}
