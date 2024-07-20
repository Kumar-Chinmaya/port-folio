let displayValue = document.querySelectorAll(".num");
let interval = 5000;

displayValue.forEach((displayValue) =>{
    let startValue = 0;
    let endValue = parseInt(displayValue.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval (function(){
        startValue +=1;
        displayValue.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});



const optionMenu = document.querySelector(".select-menu");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelectorAll(".option");
const btnText = document.querySelector(".btn-text");


selectBtn.addEventListener("click",()=>{
    optionMenu.classList.toggle("active");
})

options.forEach(option =>{
    option.addEventListener("click",()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        btnText.innerHTML = selectedOption;       

        optionMenu.classList.remove("active");
    })
})


function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex";
}
function closeSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none";
}