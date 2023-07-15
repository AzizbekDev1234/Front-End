//! For loop
for (let i = 0; i < 8; i++) {
  console.log(i);
}

let user = ["Aziz", "Olma", "Meva", "Salom"];
for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

let users = [{ name: "Aziz" }, { name: "Olma" }];
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

// ? Creating elements
// let div = document.createElement("div")
// let title = document.createElement("h1")
// title.classList.add("red")
// title.textContent = "ajndflklsn"
// div.append(title)
// document.body.appendChild(div)

// let heading = document.createElement("h1");
// let paragraph = document.createElement("p");
// paragraph.textContent = "oaojsfdnsjas";
// paragraph.classList = "pra";
// heading.append(paragraph);
// document.body.appendChild(heading);
// !object Methods
//  const users1 = {
//   name : "Azizbek",
//   surname : "Abduhakimov",
//   age: 19,
//   fullname(middleName){
//     return this.name + "" + this.surname +""+ middleName;
//   }
//  }

//  let value = users1.fullname("SIAKDHJHJS")
//  console.log(value)
// padStart and padEnd
let user1 = "Azizbek"
console.log(user1.padStart(  user1.length + 2, "1."    ))
let user2 = "Azizbek"
console.log(user.padEnd(  user1.length + 2, "1."    ))