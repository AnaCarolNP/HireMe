var db_usuarios = {};

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const dadosIniciais = {
    usuarios : [
        {
            "id": generateUUID(),
            "email": "email@email.com.br",
            "nome": "adminCandidato",
            "sobrenome": "admin",
            "biografia": "Candidato default",
            "telefone": "99 99999-9999",
            "endereco": "Rua qualquer rua",
            "senha": "candidato123",
            "tipoUsuario": "candidato",
            "curriculo": {}
        },
        {
            "id": generateUUID(),
            "email": "email@email.com.br",
            "nome": "adminRecrutador",
            "sobrenome": "admin",
            "biografia": "Recrutador default",
            "telefone": "99 99999-9999",
            "nomeEmpresa": "Empresa empresa",
            "siteEmpresa": "google.com.br",
            "cnpj": "999999999",
            "cargo": "Recrutador",
            "linkedin": "linkedin.com",
            "senha": "recrutador123",
            "tipoUsuario": "recrutador",
        }
    ]
};

function initCadastros() {
    let usuariosJSON = localStorage.getItem('db_usuarios');
    if (!usuariosJSON) {
        db_usuarios = dadosIniciais;
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    } else {
        db_usuarios = JSON.parse(usuariosJSON);
    }
}

window.addEventListener('load', initCadastros());