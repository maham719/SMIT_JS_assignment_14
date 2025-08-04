
var swiperWrapper=document.querySelector(".container");
var generate=document.getElementById("generate");
var genProfile=document.getElementById("generateProfileCard");

function Student(name,age,email,course,image){
  this.name=name;
  this.age=age;
  this.course=course;
  this.email=email;
  this.image=image;
}

var newcards=null;
var student;

generate.addEventListener("click",()=>{
var stdname=document.getElementById("name").value;
var age=document.getElementById("age").value;
var email=document.getElementById("email").value;
var course=document.getElementById("course").value;
var filesrc=document.getElementById("formFile");
 const file = filesrc.files[0];
const image = file ? URL.createObjectURL(file):"/images/default.jpg";
student=new Student(stdname,age,course,email,image);
   var card= `  
<div class="profile-card">
        <div class="image">
            <img src=${student.image} alt="" class="profile-img">
        </div>
        <div class="text-data">
            <span class="name">${student.name}</span>
    
        </div>
        <div class="details">
                    <span class="age"><p>${student.age} Years old</p></span>
            <span class="course"><i class="ri-graduation-cap-fill"></i><p>${student.course}</p></span>
            <span class="email"><i class="ri-mail-fill"></i><p>${student.email}</p></span>
        </div>
        
       
        <div class="media-buttons">
            <a href="www.linkedin.com/in/syeda-maham-amjad-4467b1295"  style="background-color: #0a66c2;"class="link">
                <i class='bx bxl-linkedin'></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088904124091" style="background-color: #0866ff ;" class="link">
                <i class='bx bxl-facebook-circle' ></i>
            </a>
            <a href="https://github.com/maham719"  style="background-color: #1f2328;"class="link">
                <i class='bx bxl-github' ></i>
            </a>
            <a href="#" style="background-color: #5865f2 ;" class="link">
                <i class='bx bxl-discord-alt'></i>
            </a>
        </div>
    </div> `;
  

  newcards = document.querySelector(".newcards");    
  newcards.innerHTML+=card;
  Swal.fire({
  title: "Card Generated Successfully",
  text: "scroll the slider to check your card!",
  icon: "success"
});
 stdname=document.getElementById("name").value="";
 age=document.getElementById("age").value="";
 email=document.getElementById("email").value="";
 course=document.getElementById("course").value="";
 filesrc=document.getElementById("formFile")="";
})


// swiper 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween:10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
    
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        
        0: {
            slidesPerView: 1,
            spaceBetween: 20,

        }
    }
    });
// student object 
const students = [
  {
    name: "Emily Parker",
    age: 20,
    course: "Computer Science",
    email: "EmilyParker@gmail.com",
    image: "/images/femalestudent1.jpg"
  },
  {
    name: "James Carter",
    age: 22,
    course: "Software Engineering",
    email: "JamesCarter@yahoo.com",
    image: "/images/malestudent1.jpg"
  },
  {
    name: "Sophia Reynolds",
    age: 19,
    course: "Artificial Intelligence",
    email: "Sophia Reynolds@gmail.com",
    image: "/images/femalestudent2.jpg"
  },
  {
    name: "William Anderson",
    age: 23,
    course: "Data Science",
    email: "William Anderson@gmail.com",
    image: "/images/malestudent2.jpg"
  },
  {
    name: "Olivia Mitchell",
    age: 21,
    course: "Cyber Security",
    email: "OliviaMitchell@gmail.com",
    image: "/images/femalestudent3.jpg"
  },
  {
    name: "Daniel Thompson",
    age: 20,
    course: "Information Technology",
    email: "DanielThompson@yahoo.com",
    image: "/images/malestudent3.jpg"
  },
  {
    name: "Mehwish Tariq",
    age: 22,
    course: "Cloud Computing",
    email: "mehwish.tariq@example.com",
    image: "/images/femalestudent4.jpg"
  },
  {
    name: "Michael Harris",
    age: 24,
    course: "Robotics",
    email: "MichaelHarris@gmail.com",
    image: "/images/malestudent4.jpg"
  },
  {
    name: "Isabella Cooper",
    age: 20,
    course: "Web Development",
    email: "IsabellaCooper@gmail.com",
    image: "/images/femalestudent5.jpg"
  },
  {
    name: "Christopher Bennett",
    age: 21,
    course: "UI/UX Design",
    email: "ChristopherBennett@gmail.com",
    image: "/images/malestudent4.jpg"
  }
];



students.forEach(elem => {
    var card= `         <div class="swiper-slide">
<div class="profile-card">
        <div class="image">
            <img src=${elem.image} alt="" class="profile-img">
        </div>
        <div class="text-data">
            <span class="name">${elem.name}</span>
    
        </div>
        <div class="details">
                    <span class="age"><p>${elem.age} Years old</p></span>
            <span class="course"><i class="ri-graduation-cap-fill"></i><p>${elem.course}</p></span>
            <span class="email"><i class="ri-mail-fill"></i><p>${elem.email}</p></span>
        </div>
        
       
        <div class="media-buttons">
            <a href="www.linkedin.com/in/syeda-maham-amjad-4467b1295"  style="background-color: #0a66c2;"class="link">
                <i class='bx bxl-linkedin'></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088904124091" style="background-color: #0866ff ;" class="link">
                <i class='bx bxl-facebook-circle' ></i>
            </a>
            <a href="https://github.com/maham719"  style="background-color: #1f2328;"class="link">
                <i class='bx bxl-github' ></i>
            </a>
            <a href="#" style="background-color: #5865f2 ;" class="link">
                <i class='bx bxl-discord-alt'></i>
            </a>
        </div>
    </div>
</div>`;
swiperWrapper.innerHTML+=card;
});