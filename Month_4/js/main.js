//! For loop
for(let i = 0; i < 8; i++){
  console.log(i)
}

let user = ["Aziz", "Olma", "Meva","Salom"]
for(let i = 0; i < user.length; i++){
  console.log(user[i])
}

let users = [{name:"Aziz"},{name:"Olma"}]
for(let i = 0; i < users.length; i++){
  console.log(users[i].name)
}

// ? Creating elements
let div = document.createElement("div")
let title = document.createElement("h1")
title.classList.add("red")
title.textContent = "ajndflklsn"
div.append(title)
document.body.appendChild(div)