const resposta = `https://api.disneyapi.dev/character/4`;

async function chamar() {
    const resp = await fetch(resposta);

    const obj = await resp.json();
    const person = obj.data;
    document.getElementById(
        "personagem"
    ).innerHTML = `<img src="${person.imageUrl}"
    alt="${person.name}">`;
    document.getElementById(
        "nome"
    ).innerHTML = 'O nome do personagem: ${person,name}';
}

chamar();