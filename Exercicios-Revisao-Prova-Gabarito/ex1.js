function cadastrar() {

    let nom = document.querySelector('#nom').value;
    let cpf = document.querySelector('#cpf').value;
    let eml = document.querySelector('#eml').value;
    let tlf = document.querySelector('#tlf').value;

    if(nom && cpf && eml && tlf) {
        document.querySelector('#erro').textContent = '';

        let tableRow = document.createElement('tr');

        let tableDataNom = document.createElement('td');
        let tableTextNom = document.createTextNode(nom);
        tableDataNom.append(tableTextNom);
    
        let tableDataCpf = document.createElement('td');
        let tableTextCpf = document.createTextNode(cpf);
        tableDataCpf.append(tableTextCpf);
    
        let tableDataEml = document.createElement('td');
        let tableTextEml = document.createTextNode(eml);
        tableDataEml.append(tableTextEml);
    
        let tableDataTlf = document.createElement('td');
        let tableTextTlf = document.createTextNode(tlf);
        tableDataTlf.append(tableTextTlf);
    
        tableRow.append(tableDataNom);
        tableRow.append(tableDataCpf);
        tableRow.append(tableDataEml);
        tableRow.append(tableDataTlf);
    
        document.querySelector('#tbl').append(tableRow);

    } else {
        let erro = document.createTextNode('Há pelo menos um campo vazio. Informe todos.');
        document.querySelector('#erro').append(erro);
    }
}