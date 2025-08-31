// =========================
// Salvar dados no cadastro
// =========================
function salvarCadastro(event) {
  event.preventDefault();

  const nomeUsuario = document.getElementById("nomeUsuario").value;
  const nomeCompleto = document.getElementById("nomeCompleto").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Validação simples
  if (!nomeUsuario || !nomeCompleto || !email || !senha) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Salvando dados no localStorage
  const usuario = {
    nomeUsuario,
    nomeCompleto,
    email,
    senha
  };

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  // Redirecionar para login
  window.location.href = "login.html";
}

// =========================
// Login
// =========================
function loginUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
    // Mantém o usuário logado
    localStorage.setItem("usuarioAtivo", JSON.stringify(usuarioSalvo));

    // Redireciona para o dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}

// =========================
// Carregar dados em minha-conta.html
// =========================
function carregarMinhaConta() {
  const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));

  if (usuarioAtivo) {
    // Mostrando inicial como "foto de perfil"
    const inicial = usuarioAtivo.nomeUsuario.charAt(0).toUpperCase();
    document.getElementById("perfilInicial").textContent = inicial;

    // Saudação
    document.getElementById("saudacaoUsuario").textContent = `Olá, ${usuarioAtivo.nomeUsuario}`;

    // Dados pessoais
    document.getElementById("nomeUsuarioInfo").textContent = usuarioAtivo.nomeUsuario;
    document.getElementById("nomeCompletoInfo").textContent = usuarioAtivo.nomeCompleto;
    document.getElementById("emailInfo").textContent = usuarioAtivo.email;
  } else {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "login.html";
  }
}

// =========================
// Logout
// =========================
function logout() {
  localStorage.removeItem("usuarioAtivo");
  window.location.href = "login.html";
}
