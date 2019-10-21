document.querySelectorAll('.nav-item').forEach(e => {
    e.addEventListener('click',()=>{
        document.querySelector('.navbar-collapse').classList.remove('show');
    })
})
document.querySelector('#donate').addEventListener('click',()=>{
    prompt("How much you want to donate?")
})