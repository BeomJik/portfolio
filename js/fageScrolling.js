// one fage scrolling
$(function(){
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    var $html = $("html");
    var page = 1;
    // 페이지 갯 수
    var lastPage = document.querySelectorAll('main section').length + 2;

    $(window).on("wheel", function(e){
        if($html.is(":animated")) return;

        if(e.originalEvent.deltaY > 0){
            if(page == lastPage) return;

            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;

            page--;
        }
        var posTop = (page-1) * $(window).height();

        $html.animate({scrollTop : posTop},500);
    });

    // 메뉴 버튼 눌렀을 떄 각 페이지 번호 변수에 저장
    var gnbHome = document.querySelector('header ul.gnb li a.home');
    var gnbAbout = document.querySelector('header ul.gnb li a.about');
    var gnbSkills = document.querySelector('header ul.gnb li a.skills');
    var gnbPortfolio = document.querySelector('header ul.gnb li a.portfolio');
    var gnbContact = document.querySelector('header ul.gnb li a.contact');
    var aTop = document.querySelector('footer a.top');

    // home
    gnbHome.addEventListener('click', function(e){
        e.preventDefault();
        page = 1;
    });
    // about
    gnbAbout.addEventListener('click', function(e){
        e.preventDefault();
        page = 2;
    });
    // skills
    gnbSkills.addEventListener('click', function(e){
        e.preventDefault();
        page = 3;
    });
    // portfolio
    gnbPortfolio.addEventListener('click', function(e){
        e.preventDefault();
        page = 4;
    });
    // contact
    gnbContact.addEventListener('click', function(e){
        e.preventDefault();
        page = 5;
    });
    // 탑버튼
    aTop.addEventListener('click', function(e){
        e.preventDefault();
        page = 1;
    });
    
});