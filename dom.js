let poto = document.querySelectorAll('.w');

let button = document.querySelectorAll('.button1');


// for (let i = 0; i < button.length; i++) {
//     button[i].onclick = () => {
//         poto[i].style.display = "none"
//         poto[i+1].style.display = "block"
//     }
// }

button[0].onclick = () => {
    poto[0].style.display = "none"
    poto[1].style.display = "block"
    poto[2].style.display = "none"
    poto[3].style.display = "none"
    poto[4].style.display = "none"
    poto[5].style.display = "none"
}
button[1].onclick = () => {
    poto[0].style.display = "none"
    poto[1].style.display = "none"
    poto[2].style.display = "block"
    poto[3].style.display = "none"
    poto[4].style.display = "none"
    poto[5].style.display = "none"
}
button[2].onclick = () => {
    poto[0].style.display = "none"
    poto[1].style.display = "none"
    poto[2].style.display = "none"
    poto[3].style.display = "block"
    poto[4].style.display = "none"
    poto[5].style.display = "none"
}
button[3].onclick = () => {
    poto[0].style.display = "none"
    poto[1].style.display = "none"
    poto[2].style.display = "none"
    poto[3].style.display = "none"
    poto[4].style.display = "block"
    poto[5].style.display = "none"
}
button[4].onclick = () => {
    poto[0].style.display = "none"
    poto[1].style.display = "none"
    poto[2].style.display = "none"
    poto[3].style.display = "none"
    poto[4].style.display = "none"
    poto[5].style.display = "block"
}

let open_modal = document.querySelector(".modalclass")
let modal = document.querySelector(".modal")

open_modal.onclick = () =>{
  modal.style.display = "block"
}

let close_modal = document.querySelector(".close_modal")

close_modal.onclick = () =>{
    modal.style.display = "none"
}