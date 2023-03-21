const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/cofee1.jpeg" },
  { name: "Voluptatem", image: "images/cofee2.webp" },
  { name: "Explicabo", image: "images/cofee3.webp" },
  { name: "Rchitecto", image: "images/cofee4.jpeg" },
  { name: " Beatae", image: "images/cofee5.webp" },
  { name: " Vitae", image: "images/cofee6.webp" },
  { name: "Inventore", image: "images/cofee7.webp" },
  
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}