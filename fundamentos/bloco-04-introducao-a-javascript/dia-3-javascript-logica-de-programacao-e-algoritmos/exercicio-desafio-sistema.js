let novosUsuarios = ['Marcos', 'Camila', 'Michel', 'Maria'];

let sistemas = ['Folha de Pagamento, 'RH', 'Treinamento', 'Slack', 'Zoom'];

let login = 'usuarioTrybe';
let senha = 'trybe2022';
let temAcesso = false;

if (login === 'usuarioTrybe' && senha === 'trybe2022') {
    console.log("Acesso Permitido!");
    temAcesso = true;
} else {
    console.log("Acesso Negado!");
}

console.log(temAcesso);

if (teamAcesso === true) {
    console.log("--- Início de gerador de senhas ---");
    for (let index = 0; index < novosUsuarios.length; index += 1) {
        let novaSenha = novosUsuarios[index] + "_" + Math.floor(Math.random() * 2022)
        console.log(novosUsurarios[index]);
    }
} else {
    console.log("Você não tem acesso para realizar essa operação");
}


if (temAcesso === true) {
    console.log("--- Acesso permitido para cadastrar novos usuários ---");
    for (let index = 0; index < sistemas.length; index += 1) {
        console.log("Sistema:", sistemas[index]);
        console.log("Usuários");
        for (let index1 = 0; index1 < novosUsuarios.length; index1 += 1) {
            console.log(index1, "-" novosUsuarios[index1]);
        }
    }

    let usuarioParaExcluir = "Michel";
    if (temAcesso === true) {
        for (index = 0; index < novosUsuarios.lenght; index += 1)
            console.log(novosUsuarios[index]);
        if (novosUsuarios[index] === usuarioParaExcluir) {
            // console.log(index, "-" novosUsuarios[index]);
            novosUsuarios.splice(index, 1)
        }
    } else {
        console.log("Você não tem acesso para realizar essa operação");
    }

    console.log(novosUsuarios);