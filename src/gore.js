
export function home(smana) {

    let arr = ['Potatoo', 'Death Cous', 'WHAT', 'Spicy Hooves!']
    const hey = document.createElement('h2')
    const div = document.createElement('div')
    const ul = document.createElement('ul')



    hey.classList.add('heya')
    hey.textContent = 'Our most popular meals!'
    smana.append(hey)
    div.classList.add('homediv')
    smana.append(div)
    div.append(ul)

    arr.forEach((item) => {
        const li = document.createElement('li')
        li.innerText = item,
        ul.appendChild(li)

    })

 
}

export function about(dr) {
    let arr = ['We pride ourselves in our top-class chefs', 'World-class ingredients', 'Gorgeous view by the milky way']
    const hey = document.createElement('h2')
    const div = document.createElement('div')
    const ul = document.createElement('ul')



    hey.classList.add('heya')
    hey.textContent = "We are a very new upcoming restaurant in planet Wayoming"
    dr.append(hey)
    div.classList.add('homediv')
    dr.append(div)
    div.append(ul)

    arr.forEach((item) => {
        const li = document.createElement('li')
        li.innerText = item,
        ul.appendChild(li)

    })
    const heyo = document.createElement('h3')

    heyo.classList.add('heya')
    heyo.textContent = "Overall the best restaurant in the galaxy!"
    dr.append(heyo)




}


export function contact(dr) {

    let arr = ['69 Sunset Boulevard', 'Planet Wayoming', 'Road of the homeless', "Near Ahmed's Gay Mansion"]
    const hey = document.createElement('h2')
    const div = document.createElement('div')
    const ul = document.createElement('ul')



    hey.classList.add('heya')
    hey.textContent = "We'll be looking forward to see you in our restaurant!"
    dr.append(hey)
    div.classList.add('homediv')
    dr.append(div)
    div.append(ul)

    arr.forEach((item) => {
        const li = document.createElement('li')
        li.innerText = item,
        ul.appendChild(li)

    })




}