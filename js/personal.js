$(function(){
    // 변수
    $htmlbody = $("html,body");
    aboutTop = $("#about").offset().top;
    skillsTop = $("#skills").offset().top;
    portfolioTop = $("#portfolio").offset().top;
    contactTop = $("#contact").offset().top;
    aboutH = $("#about").height();
    skillsH = $("#skills").height();
    portfolioH = $("#portfolio").height();
    contactH = $("#contact").height();
    gnbBtn = $("header ul.gnb li a");
    gnbHome = $("header ul.gnb li a.home");
    gnbAbout = $("header ul.gnb li a.about");
    gnbSkills = $("header ul.gnb li a.skills");
    gnbPortfolio = $("header ul.gnb li a.portfolio");
    gnbContact = $("header ul.gnb li a.contact");

    /////////////////////////////////// 헤더

    // 대메뉴 홈 버튼 색 변경, 밑 줄
    $(gnbHome).addClass("current underline");

    // 타이틀 폰트 애니메이션 클래스
    $("#title hgroup").addClass("slideright");

    // 대메뉴 애니메이션
    $("header ul.gnb").addClass("gnbShow");

    // 대메뉴 버튼 누르면 밑줄
    $(gnbBtn).click(function(){                
        $(this).addClass("underline");
        $(gnbBtn).not(this).removeClass("underline");
    });
            
    // 메뉴 버튼 누르면 각 위치로 이동
    //home
    $(gnbHome).click(function(){
        $htmlbody.animate({scrollTop : 0});
        return false;
    });
    //about
    $(gnbAbout).click(function(){
        $htmlbody.animate({scrollTop : aboutTop});
        return false;
    });
    //skills
    $(gnbSkills).click(function(){
        $htmlbody.animate({scrollTop : skillsTop});
        return false;
    });
    //portfolio
    $(gnbPortfolio).click(function(){
        $htmlbody.animate({scrollTop : portfolioTop});
        return false;
    });
    //contact
    $(gnbContact).click(function(){
        $htmlbody.animate({scrollTop : contactTop});
        return false;
    });

    /////////////////////////////////// 메인
                
    // contact info 누르면 정보 내려옴 // slideToggle 이용
    $("#contact div.ad h3").click(function(){
        $(this).toggleClass("rot180");
        $(this).siblings("#contact div.ad .p").slideToggle(300);
    });
    $("#contact div.ad .p").hide();

    // 포트폴리오 클릭 필터

    // all
    $(".filterAll").click(function(){
        $("#portfolio ul.list li").removeClass("liHide");
        return false;
    });
    // 반응형
    $(".filterResponsive").click(function(){
        $("#portfolio ul.list li").removeClass("liHide");
        $("#portfolio ul.list li:contains('반응형')").removeClass("liHhow");
        $("#portfolio ul.list li").not("#portfolio ul li:contains('반응형')").addClass("liHide");
        return false;
    });
    // 제이쿼리
    $(".filterJquery").click(function(){
        $("#portfolio ul.list li").removeClass("liHide");
        $("#portfolio ul.list li:contains('jQuery')").removeClass("liHhow");
        $("#portfolio ul.list li:contains('Js')").removeClass("liHhow");
        $("#portfolio ul.list li").not("#portfolio ul li:contains('jQuery')").addClass("liHide");
        $("#portfolio ul.list li").not("#portfolio ul li:contains('Js')").addClass("liHide");
        return false;
    });

    // 버튼 크런트
    $(".filterAll").addClass("currentBt");
    $("#portfolio .filterBt li a").click(function(){
        $(this).addClass("currentBt");
        $("#portfolio .filterBt li a").not(this).removeClass("currentBt");
    });

    /////////////////////////////////// 하단

    // 상단 이동버튼
    $("footer a.top").click(function(){
        $htmlbody.animate({scrollTop: 0});
        return false;
    });
    // 스크롤 이벤트
    $(window).scroll(function(){
        
        // 1 home 영역
        if($(window).scrollTop() < aboutTop ){ 
            // 글씨 색 생김 클래스 붙임 
            $(gnbHome).addClass("current");
            // 나머지 글씨 색 사라짐 클래스 지움
            $(gnbBtn).not(gnbHome).removeClass("current");
            // 밑 줄 생김
            $(gnbHome).addClass("underline");
            // 나머지 밑 줄 사라짐
            $(gnbBtn).not(gnbHome).removeClass("underline");
            // 타이틀 폰트 애니메이션 클래스 
            $("#title hgroup").addClass("slideright");
        } 

        // 2 about 영역
        if($(window).scrollTop() >= aboutTop - aboutH / 2 ){
            // 글씨 색 생김 클래스 붙임 
            $(gnbAbout).addClass("current"); 
            // 나머지 글씨 색 사라짐 클래스 지움
            $(gnbBtn).not(gnbAbout).removeClass("current");
            // 밑 줄 생김
            $(gnbAbout).addClass("underline");
            // 나머지 밑 줄 사라짐
            $(gnbBtn).not(gnbAbout).removeClass("underline");    
            // 타이틀 폰트 애니메이션 클래스 지움
            $("#title hgroup").removeClass("slideright");                      
        } 
        // 2 about 영역 제목 애니메이트
        if($(window).scrollTop() >= aboutH / 3){
            $("#about .subject").addClass("currentH2");
        }
        if($(window).scrollTop() <= aboutH / 3){
            $("#about .subject").removeClass("currentH2");
        }

        // 3 skills 영역
        if($(window).scrollTop() >= skillsTop - skillsH / 2 ){
            // 글씨 색 생김 클래스 붙임 
            $(gnbSkills).addClass("current");
            // 나머지 글씨 색 사라짐 클래스 지움
            $(gnbBtn).not(gnbSkills).removeClass("current"); 
            // 밑 줄 생김
            $(gnbSkills).addClass("underline");
            // 나머지 밑 줄 사라짐
            $(gnbBtn).not(gnbSkills).removeClass("underline");                                    
        } 
        // 3 skills 영역 제목 애니메이트
        if($(window).scrollTop() >= aboutTop + skillsH / 2 ){
            $("#skills .subject").addClass("currentH2");
        }       
        if($(window).scrollTop() <= aboutTop + skillsH / 2 ){
            $("#skills .subject").removeClass("currentH2");
        }                     

        // 4 portfolio 영역
        if($(window).scrollTop() >= portfolioTop - portfolioH / 2 ){
            // 글씨 색 생김 클래스 붙임 
            $(gnbPortfolio).addClass("current");
            // 나머지 글씨 색 사라짐 클래스 지움
            $(gnbBtn).not(gnbPortfolio).removeClass("current"); 
            // 밑 줄 생김
            $(gnbPortfolio).addClass("underline");
            // 나머지 밑 줄 사라짐
            $(gnbBtn).not(gnbPortfolio).removeClass("underline");                     
            
        } 
        // 4 portfolio 영역 제목 애니메이트
        if($(window).scrollTop() >= skillsTop + portfolioH / 4 ){
            $("#portfolio .subject").addClass("currentH2");
        }     
        if($(window).scrollTop() <= skillsTop + portfolioH / 4 ){
            $("#portfolio .subject").removeClass("currentH2");
        }     
            
        // 5 contact 영역
        if($(window).scrollTop() >= contactTop - 56 - contactH / 2){
            // 글씨 색 생김 클래스 붙임 
            $(gnbContact).addClass("current");
            // 나머지 글씨 색 사라짐 클래스 지움
            $(gnbBtn).not(gnbContact).removeClass("current");    
            // 밑 줄 생김
            $(gnbContact).addClass("underline");
            // 나머지 밑 줄 사라짐
            $(gnbBtn).not(gnbContact).removeClass("underline");                                                                
        }   

        // 5 contact 영역 제목 애니메이트            
        if($(window).scrollTop() >= portfolioTop + contactH / 3 ){
            $("#contact .subject").addClass("currentH2");
        }
        if($(window).scrollTop() <= portfolioTop + contactH / 3 ){
            $("#contact .subject").removeClass("currentH2");
        }  

        // contact 진입 시 info 정보 내려옴 
        if($(window).scrollTop() >= contactTop ){
            $("#contact div.ad h3").addClass("rot180");
            $("#contact div.ad .p").slideDown(300);
        }
        // contact 이탈 시 info 정보 올라감 
        if($(window).scrollTop() < contactTop ){
            $("#contact div.ad h3").removeClass("rot180");
            $("#contact div.ad .p").slideUp(300);
        }
        
        // a.top
        if($(window).scrollTop() >= aboutTop / 2 ){ // 상단 이동 버튼 보이게
            $("footer a.top").addClass("atopShow");
        }
        if($(window).scrollTop() <= aboutTop / 2 ){ // 상단이동 버튼 안보이게
            $("footer a.top").removeClass("atopShow");
        }

        // resize 브라우저창 크기 변경시
        $(window).resize(function(){
            aboutTop = $("#about").offset().top;
            skillsTop = $("#skills").offset().top;
            portfolioTop = $("#portfolio").offset().top;
            contactTop = $("#contact").offset().top;
        });
        
    });
    // 포트폴리오 배경 each, attr 사용 변경
    var pfNumber = $("#portfolio ul.list li").index(); 
    $("#portfolio ul.list li").each(function(){
        bgImgNumber = $("#portfolio ul.list li:eq("+pfNumber+")").attr("data-n");
        $(this).css("background-image","url(img/pf"+bgImgNumber+".png)");
        pfNumber++;
    });  
    // 포트폴리오 preview 버튼 클릭시 미리보기 팝업창
    var portfolioWrap = $("#portfolio .wrap");
    var previewBt = $("#portfolio ul.list li .previewBt");
    // var preview = $(".preview");
    $(previewBt).click(function(){
        $(".preview").remove();
        $(portfolioWrap).append("<div class='preview'></div>");
        preview = $(".preview");
        $(preview).hide().fadeIn();
        imgNumber = $(this).parents("li").attr("data-n");
        $(preview).css("background-image","url(img/pf"+imgNumber+".png)");
        // 클릭시 미리보기 창 사라짐
        $(preview).click(function(){
            $(this).fadeOut();
        });
        $(portfolioWrap).click(function(){
            $(preview).fadeOut();
        });
        return false;
    });    
    // 스크롤 이벤트 포트폴리오 영역 벗어나면 미리보기 팝업 제거
    $(window).scroll(function(){
        preview = $(".preview");
        // 3 skills 영역
        if($(window).scrollTop() <= portfolioTop - portfolioH / 2 ){
            // 포트폴리오 미리보기 팝업 제거
            $(preview).fadeOut();
        }  
        // 5 contact 영역
        if($(window).scrollTop() >= contactTop - 56 - contactH / 2 ){            
            // 포트폴리오 미리보기 팝업 제거
            $(preview).fadeOut();
        }  
    });

    // 스위퍼
    var swiper = new Swiper("#portfolio .swiper", {
        spaceBetween: 30,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
});
