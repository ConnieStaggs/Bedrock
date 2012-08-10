$(document).ready(function() {

    // $('.contactInfo').load('/country.php');

    // $("ul.offers").tabs("div.offerContentWrap > div", {
    //     tabs: 'li',
    //     current: 'active',
    //     effect: 'fade'
    // });

    // // Equal Heights Columns
    // $(".box-group").each( function(){
    //     $(this).jayxcol({
    //         colclass : 'box'
    //     });
    // });

    // $("#use-case").each( function(){
    //     $(this).jayxcol({
    //         colclass : 'box'
    //     });
    // });

    $(".tabs-nav").tabs("div.tabs-content > div.tab-pane");

    // $(".accordion").tabs(".accordion div.accordion-pane", {tabs: '.accordion-tab', effect: 'slide'});

    $( ".accordion" ).accordion({ header: '.accordion-tab' });

    $(".has-tip[title]").tooltip();

    // // Sticky support bar

    // //Calculate the height of <header>
    // //Use outerHeight() instead of height() if have padding
    // var aboveHeight = $('#admin-menu-wrapper').outerHeight();

    // //when scroll
    // $(window).scroll(function() {
    //     //if scrolled down more than the header’s height
    //     if ($(window).scrollTop() > aboveHeight){
    //         // if yes, add “fixed” class to the <nav>
    //         // add padding top to the #content (value is same as the height of the nav)
    //         $('.support-bar').addClass('fixed');

    //     } else {
    //         // when scroll up or less than aboveHeight, remove the “fixed” class, and the padding-top
    //         $('.support-bar').removeClass('fixed');
    //     }
    // });

    // // Smooth Scrolling
    // $(function() {
    //     $('a.btn').bind('click',function(event) {
    //         var $anchor = $(this);
    //         $('html, body').stop().animate({
    //                 scrollTop: $($anchor.attr('href')).offset().top
    //         }, 1500,'easeInOutExpo');
    //         /*
    //         if you don't want to use the easing effects:
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top
    //         }, 1000);
    //         */
    //         event.preventDefault();
    //     });
    // });
});