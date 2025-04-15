function cadastrar() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    let tableRow = document.createElement("tr");

    let tabledataNome = document.createElement("td");
    let tabledataCPF = document.createElement("td");
    let tabledataEmail = document.createElement("td");
    let tabledataTelefone = document.createElement("td");

    tabledataNome.textContent = nome;
    tabledataCPF.textContent = cpf;
    tabledataEmail.textContent = email;
    tabledataTelefone.textContent = telefone;

    tableRow.appendChild(tabledataNome);
    tableRow.appendChild(tabledataCPF);
    tableRow.appendChild(tabledataEmail);
    tableRow.appendChild(tabledataTelefone);

    document.getElementById("corpoTabela").appendChild(tableRow);

    // Limpar os campos após o cadastro
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
}
