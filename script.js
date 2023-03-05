  
  // navbar
  $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 10){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script 
    var typed = new Typed('.typing-text', {
      strings: ["Konsultasi..", "Kesehatan.."],
      typeSpeed:100,
      backSpeed:100,
      loop:true,
      // typeSpeed: 100,
      smartBackspace: true,
      backDelay: 2000,
      // loop: true,
      showCursor: true,
      cursorChar: 'l',
      startDelay: 500,
      // fadeOut: true,
  });

  // image slider script
  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 3500);

  //   scroll spy code //
  $(document).ready(function(){
    var sectionIds = $('a.nav-link');
    $(document).scroll(function(){
        sectionIds.each(function(){
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom - 350 && scrollPosition >= containerOffset - 350){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }  
        });
    });
  });


    const body = document.querySelector("body");
    const navbar = document.querySelector(".navigation");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }

});