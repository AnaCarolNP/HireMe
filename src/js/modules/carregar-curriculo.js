window.addEventListener('load', function() {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    let curriculoContainer = document.querySelector(".curriculo1");
    const curriculoNaoExiste = JSON.stringify(usuario.curriculo) === "{}";
    if (curriculoNaoExiste) {
        curriculoContainer.style.display = "none";
        alert("Nenhum curriculo criado");
    } else {
        popularCampos(usuario);
    }
})

function popularCampos(usuario) {
    const tituloCurriculo = document.getElementById('curriculo-titulo');
    const dataCriacaoCurriculo = document.getElementById('curriculo-data-criacao');

    tituloCurriculo.innerHTML = usuario.nome;
    dataCriacaoCurriculo.innerHTML = usuario.curriculo.dataCriacao;
}