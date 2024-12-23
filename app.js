let section = document.getElementById("resultados-pesquisa")
let resultados = ""
for (autor of autores)
    resultados += `
<div class="item-resultado">
        <h2>
        <a href="#" target="_blank">${autores.genero}</a>
        </h2>
        <p class="descricao-meta">${autores.nome}</p>
        <a href=${autores.descricao} target="_blank"></a>
`

section.innerHTML = resultados