const res = document.getElementById('result')
const filtro = document.getElementById('filter')
const itensLista = []

getData()

filtro.addEventListener('input', (e) => filtrarDados(e.target.value))

async function getData() {
    const r = await fetch ('https://randomuser.me/api?results=50')
    // const data = await r.json()
    // //console.log(data)
    // data.results.forEach (user => {  //sem usar deconstructor, data.resulta (chaves do array)
    //     console.log(user)
    // })
    
    const {results} = await r.json() //deconstructor para puxar apenas os results de data

    res.innerHTML=''//Limpar res

    results.forEach( user => {
        console.log(user)
        const li = document.createElement('li')
        itensLista.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
                <p>${user.email} <br> ${user.phone}</p>
            </div>
        `

        res.appendChild(li)
    })
}

function filtrarDados(searchTerm){  //searchTerm vai receber tudo o q for escrito no teclado
   // console.log(searchTerm)     //console log de input ed teclado
   itensLista.forEach( item => {
       if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
           item.classList.remove('hide')
       } else {
           item.classList.add('hide')
       }
   })
}