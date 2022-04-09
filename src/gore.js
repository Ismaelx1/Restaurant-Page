export function makeList(smana) {
    const ul = document.createElement('ul')
    const list = document.createElement('li')

    smana.append(ul)
    ul.append(list)
    list.textContent = 'Ye gay'
    list.textContent += 'Ye moch'
    ul.append(list)


}

export function creates(okay) {
const div = document.createElement('div')
const ul = document.createElement('ul')
const list = document.createElement('li')

okay.append(div)

div.append(ul)
ul.append(list)

list.textContent = "second page"



}


export function thirdy(dr) {
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    const list = document.createElement('li')
    

    
    div.append(ul)
    ul.append(list)
    
    list.textContent = "Contact page"
    const hey = document.createElement('h1')

    hey.classList.add('mymagic')
    hey.textContent = 'third page'
    dr.append(hey)

}