(function(){

    $('.__slider').slick({
        draggable: true,
        arrows: false,
        dots: false,
        fade: true,
        speed: 900,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplay:true
      });

      var view_port = window.innerHeight;

      $(".btn__scroll").on('click', function(){

          $("body, html").animate({
            scrollTop: view_port
          }, 500)
        
      });

      var timeEnd = new Date("dec 4, 2021 16:00:00").getTime();


      var end = setInterval(function(){
          var now = new Date().getTime();
          var timeNow = timeEnd - now;
          var day = Math.floor(timeNow / (1000 * 60 * 60 * 24));
          var hour = Math.floor((timeNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var min = Math.floor((timeNow % (1000 * 60 * 60)) / (1000 * 60));
          var sec = Math.floor((timeNow % (1000 * 60)) / 1000);

          if(day < 10){day = "0" + day}else{day = day};   
          if(hour < 10){hour = "0" + hour}else{hour = hour};   
          if(min < 10){min = "0" + min}else{min = min};   
          if(sec < 10){sec = "0" + sec}else{sec = sec};   

          $("#day").text(day);
          $("#hour").text(hour);
          $("#minute").text(min);
          $("#seconds").text(sec);

          if(timeNow < 0){
              clearInterval(end);

              $("#day").text("00");
              $("#hour").text("00");
              $("#minute").text("00");
              $("#seconds").text("00");
          }
          
      }, 1000);

    
      var audio = new Audio();
      var source = 'dez_coracao.mp3';
  
      audio.volume = 0.5;
      audio.autoplay = true;
      audio.src = source;
  
      $(".btn__sound").on('click', function(){
  
          if(audio.paused){
              audio.src = source;
              audio.play();
          }
          else{
              audio.pause();
              audio.src = '';
              $("#sound").addClass("fa-volume-down");
              $("#sound").removeClass("fa-volume-up");
          }
      })
  
      $(audio).on('playing', function(){
          $("#sound").removeClass("fa-volume-down");
          $("#sound").addClass("fa-volume-up");
      })
  
      $(audio).on('pause', function(){
          $("#sound").addClass("fa-volume-down");
          $("#sound").removeClass("fa-volume-up");
      })

})();