const email = document.getElementById('email');
const senha = document.getElementById('senha');
const formLogin = document.getElementById('form-login');

formLogin.addEventListener('submit', function() {
    const usuariosJSON = JSON.parse(localStorage.getItem("db_usuarios"));

    let usuarioLogado = {};
    usuariosJSON.usuarios.forEach(usuario => {
        if (email.value == usuario.email && senha.value == usuario.senha) {
            usuarioLogado = usuario;
        }
    }); 

    if (JSON.stringify(usuarioLogado) === "{}") {
        alert("Email ou senha incorretos");
        return;
    }
    
    sessionStorage.setItem('usuario', JSON.stringify(usuarioLogado));

    if (usuarioLogado.tipoUsuario == "candidato") {
        const perfilCandidato = "../html/perfil-candidato.html";
        window.location.replace(perfilCandidato)
    } else {
        const perfilRecrutador = "../html/recrutador.html";
        window.location.replace(perfilRecrutador);
    }
});