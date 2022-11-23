$(function () {
  //스크롤 상단
  var moveTop = null;
  //var h = $("body").outerHeight() * 4;
  //console.log(h);
  $(".scroll").each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var event = e.originalEvent;
      var d = 0;
      if (event.detail) {
        d = event.detail * -40;
      } else {
        d = event.wheelDelta;
      }
      // 마우스휠을 위에서 아래로
      if (d < 0) {
        if ($(this).next().length) {
          moveTop = $(this).next().offset().top;
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(this).prev().length) {
          moveTop = $(this).prev().offset().top;
        }
      }

      // 화면 이동 0.8초(800)
      if ((index != 4 && d < 0) || (index <= 4 && d > 0)) {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: moveTop + "px",
            },
            500
          );
      }
    });
  });
  //스크롤하면 헤더 로고 없애기
  $(window).scroll(function () {
    var sTop = $(this).scrollTop();
    var headHeight = $("header").outerHeight();

    if (sTop > headHeight) {
      $("header").css("display", "none");
    } else {
      $("header").css("display", "block");
    }
  });

  var fixHeight = $(".fix").outerHeight();
  console.log("fix" + fixHeight);
  //햄메뉴
  $(".ham").click(function () {
    $(".wrap").stop().animate(
      {
        left: 0,
      },
      500
    );
    $(".allBg").css("display", "block");
    $("html").css({
      overflow: "hidden",
      height: "100%",
    });
  });
  //767px 햄메뉴
  $(".ham2").click(function () {
    $(".wrap").stop().animate(
      {
        left: 0,
      },
      500
    );
    $(".allBg").css("display", "block");
    $("html").css({
      overflow: "hidden",
      height: "100%",
    });
  });
  //햄메뉴 닫기
  $(".close").click(function () {
    $(".wrap").stop().animate(
      {
        left: "-80%",
      },
      500
    );
    $(".allBg").css("display", "none");
    $("html").css({
      overflow: "auto",
      height: "100%",
    });
  });

  //메뉴 css
  $(".sub li").click(function () {
    $(this).toggleClass("active").siblings().removeClass("active");
  });
  $(".close").click(function () {
    $(".sub li").removeClass("active");
  });
  //메뉴 슬라이드

  $(".sub>li>a").click(function () {
    $(this).next("ul").stop().slideToggle(300);
    $(this).parent().siblings().children(".sub2").stop().slideUp(300);
  });

  $(".sub2>li>a").click(function () {
    $(this).siblings(".sub3").stop().slideToggle(300);
    $(this).parent().siblings().children(".sub3").stop().slideUp(300);
  });
  //슬라이드 펼쳐진거 리셋
  $(".close").click(function () {
    $(".sub>li>a").siblings(".sub2").stop().slideUp(300);
    $(".sub2>li>a").siblings(".sub3").stop().slideUp(300);
  });

  //마이페이지

  //swipe visual

  $("#visual").swipe({
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") {
        //왼쪽
        $(".aBtn2").trigger("click");
      } else if (direction == "right") {
        //오른쪽
        threshold: 0;
        $(".aBtn1").trigger("click");
      }
    },
  });
  //비쥬얼 슬라이드
  //visual 버튼

  var sNum = 0;

  $("#visual .slider>li").click(function (e) {
    e.preventDefault();
    sNum = $(this).index();
    $(".banner>li").eq(sNum).fadeIn(1000).siblings().fadeOut(1000);
    $(this).addClass("active").siblings().removeClass("active");
  });

  $("#visual .aBtn1").click(function (e) {
    e.preventDefault();

    console.log(sNum);
    if (sNum == 0) {
      sNum = 2;
    } else {
      sNum--;
    }
    $(".banner>li").eq(sNum).fadeIn(1000).siblings().fadeOut(1000);
    $("#visual .slider>li")
      .eq(sNum)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $("#visual .aBtn2").click(function (e) {
    e.preventDefault();
    //console.log(e)

    if (sNum == 2) {
      sNum = 0;
    } else {
      sNum++;
    }

    $(".banner>li").eq(sNum).fadeIn(1000).siblings().fadeOut(1000);
    $("#visual .slider>li")
      .eq(sNum)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  //비쥬얼 자동 슬라이드
  var auto = setInterval(function () {
    $("#visual .aBtn2").trigger("click");
  }, 4000);

  $("#visual").mouseover(function () {
    clearInterval(auto);
  });
  $("#visual").mouseout(function () {
    auto = setInterval(function () {
      $("#visual .aBtn2").trigger("click");
    }, 4000);
  });

  //767 new item fade
  var num = 0;

  function time() {
    num++;
    if (num % 2 == 0) {
      $(".mNewP").fadeIn(1000);
      $(".mNewSub").fadeOut(1000);
    } else {
      $(".mNewSub").fadeIn(1000);
      $(".mNewP").fadeOut(1000);
    }
  }
  var timer = setInterval(function () {
    time();
  }, 3000);
});
