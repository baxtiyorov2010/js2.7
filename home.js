let users = [JSON.parse(localStorage.getItem(`student`))]
let wrapper = document.querySelector(`.wrapper`)

console.log(users)

const ReadUsersFunction = () => {
    users.map((v) => {
        let div = document.createElement(`div`)

        div.innerHTML = `<p>ismi:${v.fullname}</p><p>coin:${v.coin}</p><p>tel raqami:${v.phone}</p>`
        wrapper.appendChild(div)
        div.classList.add(`aaa`)
    })
}

ReadUsersFunction()