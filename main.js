let show = document.getElementById("show")
let pass = document.getElementById("pass")

show.addEventListener("click", ()=>{
    pass.classList.toggle("showIt")
    if(show.innerHTML === `<i class="fa-solid fa-eye"></i>`){
        show.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }else if(show.innerHTML === `<i class="fa-solid fa-eye-slash"></i>`){
        show.innerHTML = `<i class="fa-solid fa-eye"></i>`
    }
})