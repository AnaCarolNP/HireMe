const LOGIN_URL = "../html/login.html";

const formCadastro = document.getElementById('form-cadastro');
const email = document.getElementById('email');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirm-senha');
const usuarioOpts = document.getElementById('form-options');
const termosRadio = document.getElementById('termos');

formCadastro.addEventListener('submit', function() {
    let novoId = generateUUID();
    let novoUsuario = {};

    if (senha.value != confirmaSenha.value) {
        alert("As senhas precisam ser iguais");
        return;
    }

    if (!termosRadio.checked) {
        alert("Aceite os termos");
        return;
    }
    
    if (usuarioOpts.value == "candidato") {
        novoUsuario = {
            "id" : novoId,
            "email": email.value.toLowerCase(),
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "biografia": null,
            "telefone": null,
            "endereco": null,
            "senha": senha.value,
            "tipoUsuario": usuarioOpts.value, 
            "curriculo": {}
        }
    } else {
        novoUsuario = {
            "id" : novoId,
            "email": email.value,
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "biografia": null,
            "telefone": null,
            "nomeEmpresa": null,
            "siteEmpresa": null,
            "cnpf": null,
            "linkedin": null,
            "senha": senha.value,
            "tipoUsuario": usuarioOpts.value
        }
    }

    db_usuarios.usuarios.push(novoUsuario);
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

    window.location.replace(LOGIN_URL);
    
});