$(document).ready(function(){
    // responsive menu
$('.menu-bar').click(function(){
    $('.responsive-menu').removeClass('closeUsers')
    $('.responsive-menu').addClass('openUsers')
})
$('.responsive-menu .btn-close').click(function(){
    $('.responsive-menu').removeClass('openUsers')
    $('.responsive-menu').addClass('closeUsers')
})
   // anyway
   $(document).on('click', function (event) {
       if($('.responsive-menu').hasClass('openUsers')){
        if (!$(event.target).closest('.responsive-menu, .menu-bar').length) {
            $('.responsive-menu').removeClass('openUsers')
            $('.responsive-menu').addClass('closeUsers')
        }
       }
   
});
// single-branch
$('.single-branch').click(function(){
    url = "./branchDetails.html";
    window.location.href = url
})
// single-branch
$('.new .new-pic').click(function(){
    url = "./singleNew.html";
    window.location.href = url
})
//search menu
$('.search-menu').click(function(){
    $('.menu-header .filter-search').fadeToggle('fast');
})

       // anyway
   $(document).on('click', function (event) {
    if($('.menu-header .filter-search').css('display') === 'block' && $(window).width() < 992){
     if (!$(event.target).closest('.menu-header .filter-search, .search-menu').length) {
        $('.menu-header .filter-search').fadeOut('fast');

     }
    }

});
// search result 

$(".filter-search input").on("input", function(){
    if( !$(this).val() ) {
        $(this).parents('.filter-search').find('.search-result').fadeOut();
  }else{
      $(this).parents('.filter-search').find('.search-result').fadeIn();

  }
});
/* when document is ready */
    // scroll to top
    $('body').append('<section class="upTop"><div><i class="fas fa-arrow-up"></i></div></section>')
    $('.single-program').click(function(){
        window.location = '../single-program.html'
    })
    // Up to top button
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.upTop').fadeIn();
    } else {
      $('.upTop').fadeOut();
    }
  });
$(".upTop").click(function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
});