// toggles the expansion of the visibility of an iframe
    // var coll = document.getElementsByClassName("collapsible");
    // var i;
    
    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var content = this.nextElementSibling;
    //     if (content.style.display === "block") {
    //       content.style.display = "none";
    //     } else {
    //       content.style.display = "block";
    //     }
    //   });
    // }


// filter categories
$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.folio-item').show('1000');
    } else {
      $('.folio-item').not('.'+value).hide('1000');
      $('.folio-item').filter('.'+value).show('1000');
    }
  })
})   

$('.list').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})

    console.log("hello from index.js");