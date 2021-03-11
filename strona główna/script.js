$('.arrow').on('click', function () {
     $('body, html').animate({
     scrollTop: $('.rubbishTwo').offset().top
    }, 500)
    })
const btnFirst=document.querySelector('button.pink');
const btnSecond=document.querySelector('button.blue');
const btnThird=document.querySelector('button.red');
const sectionOne=document.querySelector('section.firstPage');
const sectionTwo=document.querySelector('section.secondPage');
const sectionLast=document.querySelector('section.lastPage');
const arrow=document.querySelector('.arrow');
const rubbish2=document.querySelector('img.rubbishTwo');
const rubbish3=document.querySelector('img.rubbishThree');
const rubbish4=document.querySelector('img.rubbishFour');
const navOne=document.querySelector('#one p');
const navOneSpan=document.querySelector('#one span');
const navTwo=document.querySelector('#two p');
const navTwoSpan=document.querySelector('#two span');
const navThree=document.querySelector('#three p');
const navThreeSpan=document.querySelector('#three span');
let pageActive=0;


const showFirstSection=()=>{

     
     if(pageActive===2){
          navTwo.classList.remove('active');
          navTwoSpan.classList.remove('active');
          sectionTwo.style.display="none";     
          rubbish2.style.display="block";
          btnFirst.style.display="block";
     }else if(pageActive===3){
          navThree.classList.remove('active');
          navThreeSpan.classList.remove('active');
          sectionLast.style.display="none";     
          rubbish2.style.display="block";
          btnFirst.style.display="block";
     }

     document.body.style.overflow="auto"
     btnSecond.style.display="none";
     btnThird.style.display="none";
     rubbish3.style.display="none";
     rubbish4.style.display="none";
     sectionOne.style.display="flex";
     rubbish2.style.top="77vh";
     navOne.classList.add('active');
     navOneSpan.classList.add('active');
     arrow.style.display="none";
     console.log(pageActive)
     pageActive=1;
     console.log(pageActive)

}

const showSecondSection=()=>{

     btnSecond.style.top="125vh";
     btnSecond.style.left="4vw";

     if(pageActive===1){
          navOne.classList.remove('active');
          navOneSpan.classList.remove('active');
          sectionOne.style.display="none";     
          rubbish3.style.display="block";
          btnSecond.style.display="block";
     }else if(pageActive===3){
          navThree.classList.remove('active');
          navThreeSpan.classList.remove('active');
          sectionLast.style.display="none";     
          rubbish3.style.display="block";
          btnSecond.style.display="block";
     }

     document.body.style.overflow="auto"
     sectionTwo.style.display="flex";
     rubbish2.style.display="none";
     rubbish4.style.display="none";
     rubbish3.style.top="90vh";
     arrow.style.display="none";
     btnThird.style.display="none";
     btnFirst.style.display="none";
     navTwo.classList.add('active');
     navTwoSpan.classList.add('active');
     console.log(pageActive);
     pageActive=2;
     console.log(pageActive);


     const signs=[...document.querySelectorAll('.sign')];
     
     function chengeSign(){
          signs.forEach(sign=>sign.setAttribute('src','/GRAFIKI/ZNACZNIK.png'))
          this.setAttribute('src','/GRAFIKI/ZNACZNIK_FOCUS.png');
          
     }
     signs.forEach(sign=> {
          sign.addEventListener('click',chengeSign)
     })

}


const showLastSection=()=>{

     if(pageActive===1){
          navOne.classList.remove('active');
          navOneSpan.classList.remove('active');
          sectionOne.style.display="none";     
          rubbish4.style.display="block";
          btnThird.style.display="block";
     }else if(pageActive===2){
          navTwo.classList.remove('active');
          navTwoSpan.classList.remove('active');
          sectionTwo.style.display="none";     
          rubbish4.style.display="block";
          btnThird.style.display="block";
     }

     document.body.style.overflow="auto"
     btnThird.style.bottom="141vh";
     rubbish2.style.display="none";
     rubbish3.style.display="none";
     rubbish4.style.bottom="83vh";
     btnSecond.style.display="none";
     btnFirst.style.display="none";
     arrow.style.display="none";
     navThree.classList.add('active');
     navThreeSpan.classList.add('active');
     sectionLast.style.display="flex";

     pageActive=3;
}


btnFirst.addEventListener('click',showFirstSection);
btnSecond.addEventListener('click',showSecondSection);
btnThird.addEventListener('click',showLastSection);
document.querySelector('div#one').addEventListener('click',showFirstSection);
document.querySelector('div#two').addEventListener('click',showSecondSection);
document.querySelector('div#three').addEventListener('click',showLastSection);