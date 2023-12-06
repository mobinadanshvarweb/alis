let wso = 0
let titl1 = document.getElementById('tit1')
let titl2 = document.getElementById('tit2')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let pro1 = document.getElementById('pro1')
let pro2 = document.getElementById('pro2')
let pro3 = document.getElementById('pro3')
let pro4 = document.getElementById('pro4')
let pro5 = document.getElementById('pro5')
let pro6 = document.getElementById('pro6')
let pro7 = document.getElementById('pro7')
let pro8 = document.getElementById('pro8')

console.log(titl1.offsetTop);
let header = document.getElementById('head')
document.addEventListener('scroll',(e)=>{
    let wsn = window.scrollY
    function headerScroll(){
        if( wsn > wso){
            // console.log('scroll down');
            if( wsn >=50 && wsn <= 200 ){
                fun1()
            }else if (wsn > 200){
                 fun2()
            }else if(wsn <=50){
                fun2() 
            }
        }else{
            // console.log('scroll up');
            fun1()
            if(wsn <=50){
                fun2()
            }
        }wso = wsn
    }
    function contentScroll(){
        // console.log('wsn'+wsn);
        // console.log('title1'+titl1.offsetTop);
        if((wsn+400) >= titl1.offsetTop){
            titl1.style.transform='translateX(0)'
            console.log('hi');
        }else{
            titl1.style.transform='translateX(100%)' 
        }

        if((wsn+400) >= p1.offsetTop){
            p1.style.transform='translateX(0)'
            console.log('hi');
        }else{
            p1.style.transform='translateX(100%)'  
        }

        if((wsn+600) >= img1.offsetTop){
            img1.style.opacity='1'
            console.log('hi');
        }else{
            img1.style.opacity='0'
        }
        if((wsn+600) >= img2.offsetTop){
            img2.style.opacity='1'
            console.log('hi');
        }else{
            img2.style.opacity='0'
        }

        if((wsn+600) >= img3.offsetTop){
            img3.style.opacity='1'
            console.log('hi');
        }else{
            img3.style.opacity='0'
        }

        if((wsn+400) >= titl2.offsetTop){
            titl2.style.transform='translateX(0)'
            console.log('hi');
        }else{
            titl2.style.transform='translateX(100%)'
        }
        if((wsn+400) >= p2.offsetTop){
            p2.style.transform='translateX(0)'
            console.log('hi');
        }else{
            p2.style.transform='translateX(100%)' 
        }

        if((wsn+400) >= pro1.offsetTop){
            pro1.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro1.style.transform='scale(0)' 
        }
        if((wsn+400) >= pro2.offsetTop){
            pro2.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro2.style.transform='scale(0)' 
        }

        if((wsn+400) >= pro3.offsetTop){
            pro3.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro3.style.transform='scale(0)' 
        }

        if((wsn+400) >= pro4.offsetTop){
            pro4.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro4.style.transform='scale(0)' 
        }

        if((wsn+400) >= pro5.offsetTop){
            pro5.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro5.style.transform='scale(0)' 
        }

        if((wsn+400) >= pro6.offsetTop){
            pro6.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro6.style.transform='scale(0)' 
        }

        if((wsn+400) >= pro7.offsetTop){
            pro7.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro7.style.transform='scale(0)' 
        }

        if((wsn+400) >= pro8.offsetTop){
            pro8.style.transform='scale(1)'
            console.log('hi');
        }else{
            pro8.style.transform='scale(0)' 
        }
    }
    headerScroll()
    contentScroll()
})

function fun1(){
    header.style.position='fixed'
    header.style.backgroundColor='white'
}
function fun2(){
    header.style.position='static'
    header.style.backgroundColor='transparent'
}