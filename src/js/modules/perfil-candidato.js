// RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}


//FOTO
const previewImage = document.getElementById('previewImage');
const customUpload = document.getElementById('customUpload');

uploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    previewImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

customUpload.addEventListener('click', function() {
  uploadInput.click();
});


//RETORNO DADOS CADASTRO
let usuarioString = sessionStorage.getItem('usuario');
let usuariojson = JSON.parse(usuarioString);

window.addEventListener('load', carregarInfosCandidato());

//FORMULARIO MODAL
const modal = document.getElementById("modal-form-candidato");
const btnEditCandidato = document.getElementById("edit");
const btnFecharModal = document.getElementsByClassName("close")[0];
const formEditCandidato = document.getElementById("form-edit-candidato");

let formBiografia = document.getElementById("form-biografia");
let formTelefone = document.getElementById("form-phone");
let formResidencia = document.getElementById("form-residencia");
let formCargo = document.getElementById("form-cargo");

btnEditCandidato.addEventListener('click', function() {
  modal.style.display = "block";
  carregarCamposForm();
});

btnFecharModal.addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

formEditCandidato.addEventListener('submit', function() {
  usuariojson.biografia = formBiografia.value
  usuariojson.telefone = formTelefone.value;
  usuariojson.endereco = formResidencia.value;
  usuariojson.curriculo.cargo = formCargo.value;

  usuarioString = JSON.stringify(usuariojson);
  sessionStorage.setItem("usuario", usuarioString);

  let banco = JSON.parse(localStorage.getItem("db_usuarios"));
  banco.usuarios.forEach(usuario => {
    if (usuario.email == usuariojson.email && usuario.senha == usuariojson.senha) {
      usuario = usuariojson;
    }
  });
  localStorage.setItem("db_usuarios", JSON.stringify(banco));

  document.getElementById("form-edit-candidato").reset();
  modal.style.display = "none";
  carregarInfosCandidato();
});

function carregarInfosCandidato() {
  document.getElementById("nome").innerHTML = usuariojson.nome;
  document.getElementById("email").innerHTML = usuariojson.email;
  document.getElementById("biografia").innerHTML = usuariojson.biografia
  document.getElementById("phone").innerHTML = usuariojson.telefone;
  document.getElementById("residencia").innerHTML = usuariojson.endereco;
  document.getElementById("cargo").innerHTML = usuariojson.curriculo.cargo;
}

function carregarCamposForm() {
  formBiografia.value = usuariojson.biografia;
  formTelefone.value = usuariojson.telefone;
  formResidencia.value = usuariojson.endereco;
  formCargo.value = usuariojson.curriculo.cargo;
}