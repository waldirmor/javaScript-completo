//a tag que vai ser criada
var novoParagrafo = document.createElement("p"); 
// criando o texto para ficar dentro da tag
var texto = document.createTextNode("Este é o conteúdo do paragráfo"); 
//inserindo texto na tag
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);
//buscando elemento body
var body = document.querySelector("body");

console.log(body);
//colocando a tag criada junto ao body
body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById("container");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);