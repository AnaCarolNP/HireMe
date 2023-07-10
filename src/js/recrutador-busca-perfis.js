window.addEventListener('load', function () {
    const db_usuarios = JSON.parse(localStorage.getItem("db_usuarios"));
    const container = document.getElementById("perfis-cadastrados");
    
    db_usuarios.usuarios.forEach(usuario => {
        if (usuario.tipoUsuario == "candidato") {
            let usuarioPerfilContainer = criarCardUsuario(usuario);
            container.appendChild(usuarioPerfilContainer);
        }
    });
});

function criarCardUsuario(usuario) {
    const perfilContainer = document.createElement("div");
    perfilContainer.classList.add("perfil");

    const perfilDados = document.createElement("div");
    perfilDados.classList.add("dados");
    perfilDados.innerHTML = `
        ${usuario.nome} ${usuario.sobrenome}
        <p>Desenvolvedor</p>
        <p>${usuario.endereco}</p>
    `;
    perfilContainer.appendChild(perfilDados);

    const btnMensagem = document.createElement("button");
    btnMensagem.classList.add("botaoMensagem");
    btnMensagem.innerHTML = `
        <a href="../html/mensagens_recrutador.html">Enviar mensagem</a>
    `;
    perfilContainer.appendChild(btnMensagem);

    const btnPerfil = document.createElement("button");
    btnPerfil.classList.add("botaoPerfil");
    btnPerfil.innerHTML = `
        <a href="">Ver perfil completo</a>
    `;
    perfilContainer.appendChild(btnPerfil);

    let curriculoUsuario = usuario.curriculo;
    if (curriculoUsuario != undefined) {
        let perfilCorpo = document.createElement("div");
        perfilCorpo.classList.add("corpo");
        perfilCorpo.innerHTML = `
        ${curriculoUsuario.resumo}
        <p>Skills</p>
        <ul>
        <li>${curriculoUsuario.competencia1}</li>
        <li>${curriculoUsuario.competencia2}</li>
        <li>${curriculoUsuario.competencia3}</li>
        <li>${curriculoUsuario.competencia4}</li>
        <li>${curriculoUsuario.competencia5}</li>
        </ul>
        `;
        perfilContainer.appendChild(perfilCorpo);
    }

    return perfilContainer;
}

//RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}
