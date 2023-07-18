const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.querySelector('#nome').value;
    const telefone = document.querySelector('#telefone').value;
    const nascimento = document.querySelector('#nascimento').value;
    const idade = document.querySelector('#idade').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const termo = document.querySelector('#termos').value;

    console.log(`
       Nome: ${nome}
       Telefone: ${telefone}
       Data Nascimento: ${nascimento}
       Idade: ${idade}
       E-mail: ${email}
       Senha: ${senha}
       Termo: ${termo}
    `);
})