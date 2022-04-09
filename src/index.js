import './styles/main.css'
import './styles/contact.css'
import './styles/about.css'
import {makeList, creates, thirdy} from './gore.js'
console.log("21212")

const container = document.getElementById('content')
let gt = document.querySelector('.nav')


console.log('Yesh')

gt.addEventListener('click', () => {
  let e = event.target

  if (e.innerHTML == 'About us') {
      container.textContent = ''
      creates(container)
  } else if (e.innerHTML == 'Contact') {
      container.textContent = ''
      thirdy(container)
  } else if (e.innerHTML == 'Home') {
      container.textContent =''
      makeList(container)
  }
})

function doit() {
    const div = document.createElement('div')
    div.classList.add('starting')
}
doit()
makeList(container)
