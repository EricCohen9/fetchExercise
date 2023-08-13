const button = document.getElementById("button");
button.addEventListener("click", () => {
  async function getData() {
    const response = await fetch("https://randomuser.me/api");
    if (!response.ok) {
      const message = "ANYTHING" + response.status;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  }
  getData()
    .then((text) => console.log(text.results[0]))
    .catch((error) => console.log(error.message));
});
// 1.2
let main = document.getElementById("div");
const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
  async function getDataFive() {
    let i = 0;
    while (i < 5) {
      const respone = await fetch("https://randomuser.me/api");
      const deta = await respone.json();
      if (deta.results[0].gender === "male") {
        i++;
        let img = document.createElement("img");
        let div = document.createElement("div");
        let pergrafh = document.createElement("p");
        img.src = deta.results[0].picture.large;
        pergrafh.innerText =
          deta.results[0].name.first +
          "" +
          deta.results[0].name.last +
          "" +
          deta.results[0].email;
        div.appendChild(img);
        div.appendChild(pergrafh);
        main.appendChild(div);
        console.log(
          deta.results[0].name.first +
            "" +
            deta.results[0].name.last +
            "" +
            deta.results[0].email
        );
      } else {
        console.log("uu");
      }
    }
  }
  getDataFive();
});
// 2
const button3 = document.getElementById("api");
button3.addEventListener("click", () => {
  async function getJoks() {
    let jok = document.createElement("p");
    let mainDiv = document.getElementById("joks");
    const respoApi = await fetch(
      "https://api.humorapi.com/jokes/search?api-key=af14eb5e7a60456a99a43f95c2d32277"
    );
    const result = await respoApi.json();
    jok.innerText = result.jokes[0].joke;
    console.log(result.jokes[0].joke);
    console.log("l");
    mainDiv.appendChild(jok);
  }
  getJoks();
});
// 3
const buttonProuduct = document.getElementById("buttonProuduct");
buttonProuduct.addEventListener("click", () => {
  async function getProuduct() {
    let list = await fetch("https://fakestoreapi.com/products");
    let resultList = await list.json();
    for (let k = 0; k < 20; k++) {
         
    console.log(resultList[k].title)
    }
  }
  getProuduct();
});
// 4
let firstName=document.createElement("input")
let lastName=document.createElement("input")
let email=document.createElement("input")
let age=document.createElement("input")
let buttonInput=document.createElement("button")
buttonInput.innerText="submit"
let inputDiv=document.getElementById("inputDiv")
firstName.placeholder="first name"
lastName.placeholder="last name"
email.placeholder="email "
age.placeholder="age"
inputDiv.appendChild(firstName)
inputDiv.appendChild(lastName)
inputDiv.appendChild(email)
inputDiv.appendChild(age)
inputDiv.appendChild(buttonInput)
buttonInput.addEventListener("click", async ()=>{
    const reqOptions = {
        method: 'post',
        body: JSON.stringify({ name: firstName.value, lastname:lastName.value,email:email.value,age:age.value}),
        headers: {
        'Content-Type': 'application/json'
        }
        }
     fetch(" https://jsonplaceholder.typicode.com/users",reqOptions)
     .then(json => console.log(json));
     console.log( reqOptions )
})