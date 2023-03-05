            //============= sticky navbar script =============
            const body = document.querySelector("body");
            const navbar = document.querySelector(".navbar");
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

            //============= scroll-up button show/hide script =============
            $(document).ready(function(){
                $(window).scroll(function(){
                    if(this.scrollY > 10){
                        $('.scroll-up-btn').addClass("add");
                    }else{
                        $('.scroll-up-btn').removeClass("add");
                    }
                });
            });

            //============= slide-up script =============
            $('.scroll-up-btn').click(function(){
                $('html').animate({scrollTop: 0});
                $('html').css("scrollBehavior", "auto");
            });

            $('.navbar .menu li a').click(function(){
                $('html').css("scrollBehavior", "smooth");
            });

            
            