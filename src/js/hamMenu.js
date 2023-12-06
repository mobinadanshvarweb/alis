document.getElementById('ham').addEventListener('click',()=>{
    document.getElementById('menu').style.opacity='1'
    document.getElementById('menu').style.transform='translateX(0)'
})
document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('menu').style.opacity='0'
    document.getElementById('menu').style.transform='translateX(100%)'
})