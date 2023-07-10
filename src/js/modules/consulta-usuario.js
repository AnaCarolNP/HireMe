const usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"));

window.addEventListener('load', function() {
    let path = window.location.pathname;
    let pagina = path.split("/").pop();
    switch (pagina) {
        case "perfil-candidato.html":
            consultarCandidato(usuarioLogado);
            break;
        case "recrutador.html":
            consultarRecrutador(usuarioLogado);        
            break;
        default:
            console.log("Pagina não encontrada");
            break;
    }
})

function popularElemento(elemento, propriedade) {
    elemento.innerHTML = usuarioLogado[propriedade];
}

function consultarCandidato() {
    const nome = document.getElementById("nome");
    popularElemento(nome, "nome");

    const biografia = document.getElementById("biografia");
    popularElemento(biografia, "biografia");

    const email = document.getElementById("email");
    popularElemento(email, "email");

    const telefone = document.getElementById("telefone");
    popularElemento(telefone, "telefone");
    
    const endereco = document.getElementById("endereco");
    popularElemento(endereco, "endereco");

    const cargo = document.getElementById("cargo");
    if (usuarioLogado.curriculos.length != 0) {
        cargo.innerHTML = usuarioLogado.curriculos[0].cargo;
    } else {
        cargo.innerHTML = "Sem informações"
    }
}

function consultarRecrutador() {
    const nome = document.getElementById("nome");
    popularElemento(nome, "nome");

    const cargo = document.getElementById("cargo");
    popularElemento(cargo, "cargo");

    const empresa = document.getElementById("empresa");
    popularElemento(empresa, "nomeEmpresa");

    const email = document.getElementById("email");
    popularElemento(email, "email");

    const telefone = document.getElementById("telefone");
    popularElemento(telefone, "telefone");

    const cnpj = document.getElementById("cnpj");
    popularElemento(cnpj, "cnpj");

    const linkedin = document.getElementById("linkedin");
    popularElemento(linkedin, "linkedin");

    const siteEmpresa = document.getElementById("site-empresa");
    popularElemento(siteEmpresa, "siteEmpresa");

}