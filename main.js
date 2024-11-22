// let baza = [
//     {
//         fullname: `Tora Baxtiyorov`,
//         phone: "+9988880334575",
//         coin: `550`,
//         hp: `300`,
//         teacher: `Bexruz Satimbayev`,
//         groupNum: `F1-1700`,
//         ModemId: `1111`,
//         password: `1111`
//     }
// ]

// let input = document.querySelectorAll(`.input`)
// let loginBtn = document.querySelector(`.loginBTN`)

// const check = ()=>{
//     input[0].addEventListener(`input`,()=>{
//         loginBtn.style.display = "block";
//     })
// }

// const FilteredUsers = () => {
//     baza.filter((v) => {
//         if (v.ModemId === input[0].value && v.password === input[1].value) {
//             localStorage.setItem(`student`, JSON.stringify(v))
//         window.location.href = `./home.html`
//         }
//         else {
//             alert(`iltimos login yoki passworfmi togri yering`)
//         }
//     })
// }



// loginBtn.addEventListener(`click`, () => {
//     FilteredUsers()
//     check()
// })











let baza = [
    {
        fullname: `Tora Baxtiyorov`,
        phone: "+9988880334575",
        coin: `550`,
        hp: `300`,
        teacher: `Bexruz Satimbayev`,
        groupNum: `F1-1700`,
        ModemId: `1111`,
        password: `1111`
    },
    {
        fullname: `Abdulloh Hayriddinov`,
        phone: "+998990900909",
        coin: `5`,
        hp: `30`,
        teacher: `Bexruz Satimbayev`,
        groupNum: `F1-1700`,
        ModemId: `2222`,
        password: `2222` 
    }
];

let input = document.querySelectorAll(`.input`);
let loginBtn = document.querySelector(`.loginBTN`);

input.forEach(inp => {
    inp.addEventListener("input", () => {
        if (input[0].value.trim() !== "" && input[1].value.trim() !== "") {
            loginBtn.style.display = "block"
        } else {
            loginBtn.style.display = "none"
        }
    })
})

const FilteredUsers = () => {
    const user = baza.find(v => v.ModemId === input[0].value && v.password === input[1].value);

    if (user) {
        localStorage.setItem(`student`, JSON.stringify(user))
        window.location.href = `./home.html`
    } else {
        alert(`Iltimos, login yoki parolni to'g'ri kiriting`)
    }
}

loginBtn.addEventListener(`click`, () => {
    FilteredUsers()
})

