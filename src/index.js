import './styles/main.css'
import './styles/contact.css'
import './styles/about.css'
import {home, about, contact} from './gore.js'


const container = document.getElementById('content')
let gt = document.querySelector('.nav')


console.log('Yesh')

gt.addEventListener('click', () => {
  let e = event.target

  if (e.innerHTML == 'About us') {
      container.textContent = ''
      about(container)
  } else if (e.innerHTML == 'Contact') {
      container.textContent = ''
      contact(container)
  } else if (e.innerHTML == 'Home') {
      container.textContent =''
      home(container)
  }
})


home(container)
