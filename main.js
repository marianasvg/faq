document.querySelectorAll(".questao").forEach((questao) => questao.addEventListener("click", () => {

    if(questao.parentNode.classList.contains("active")) {

        questao.parentNode.classList.toggle("active")
    }
    else {
        document.querySelectorAll(".questao").forEach(questao => questao.parentNode.classList.remove("active")) 

        questao.parentNode.classList.add("active")
    }




}))