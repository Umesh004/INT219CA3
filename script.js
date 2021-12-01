searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function jass()
{
    
    let email=document.forms["form9"]["name9"].value;
    let passwd=document.forms["form9"]["name10"].value;
    if((email != "") && (passwd != ""))
    {
      swal("Good job!", "You are logged in as Umesh", "success");
    }
    else
    {
      swal("Invalid or Empty Credentials", "Try again", "error");
    }
}
function jezz()
{
  swal("Books are avalible in Featured Section", "Redirecting there!!", "info");
}
function jero()
{
  var f=document.forms["form11"]["name11"].value;
  if(f != "")
  {
    swal("Congrats!!", "You are a subscriber now", "success");
  }
  else
  {
    swal("Enter Email", "to Be a Subscriber", "error");
  }
}
function jaer()
{
  swal("Sorry! Blog content is not avalible now", "Stay Tuned for Updates!", "error");
}
function jerr()
{
  swal({
    title: "Are you sure?",
    text: "Once Purchased is confirmed it cant be backtracked",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Your Order is placed "," Payment Method : COD", {
        icon: "success",
      });
    } else {
      swal("You rejected your purchase");
    }
  });
}
function jqwe()
{
    var x=document.forms["form21"]["in21"].value;
    let listnames= ["Your Name","Music Rock","Sample Test","The Art City","Thanks In Everything","Black History Month","Love","Retro"]
    for(let i=0;i<=8;i++)
    {
        if(x==listnames[i])
        {
            swal("The required book is avalible in featured section");
        }
        else
        {
            swal("Sorry We dont have that book");
        }
    }
}