// getElementById (element)

const element = document.getElementById('blog-title')
console.log(element)

// getElementsByClassName (HTMLCollection)

const element2 = document.getElementsByClassName('one')
console.log(element2)

// getElementsByTagName (HTMLCollection)

document.getElementsByTagName('body')
document.getElementsByTagName('h1')

// querySelector (element)

// pega o primeiro que achar no código html

document.querySelector('.one')
document.querySelector('[src]')
document.querySelector('meta')

// querySelectorAll (Nodelist)

// seleciona todos os nós e forma um NodeList, onde eu consigo selecionar os elementos através de um for.

// NodeList != HTMLCollection 

// textContent (Manipulando conteúdo)

element.textContent = 'Agora o título é esse'

const element3 = document.querySelector('h2')
console.log(element3)

element3.textContent = 'testando 123'

// innerText

// innerHTML - Adicionar HTML através do Javascript

element3.innerHTML = 'testando <small>123</small>'

// Value

const element_input = document.querySelector('input')
element_input.value = 'Valor definido Javascript'

// Atributos

const header = document.querySelector('header')
header.setAttribute('id','header')

const headerID = document.querySelector('#header')
console.log(headerID)

console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))

// header.removeAttribute('id')

header.setAttribute('class','novo-nome')
console.log(headerID.getAttribute('class'))

// Alterando estilos com style

const element4 = document.querySelector('body')
//element4.style.backgroundColor = '#F9F3D2'

// Alterando estilos com classList

element4.classList.add('active', 'green') //adiciona o estilo criado no head
element4.classList.remove('green') //remove o estlo criado no head
element4.classList.toggle('active') //inverte o estado atual do estilo (on/off)

// Navegando pelos elementos
// parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentElement)

// childNodes children

console.log(body.childNodes) // Coleta os espaços de text (NodeList)
console.log(body.children) // HTMLCollection

// firstChild firstElementChild

console.log(body.firstChild) //considera o espaço vazio text
console.log(body.firstElementChild)

// lastChild lastElementChild

console.log(body.lastChild) //considera o espaço vazio text
console.log(body.lastElementChild)

// nextSibling nextElementSibling

console.log(body.nextSibling) //considera o espaço vazio text
console.log(body.nextElementSibling)

// previousSibling previousElementSibling

console.log(body.previousSibling) //considera o espaço vazio text
console.log(body.previousElementSibling)


