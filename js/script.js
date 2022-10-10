
$('.single-item').slick();
var options = {
    strings: ['Please...', 'Fill Form...'],
    typeSpeed: 50,
    backSpeed:40,
    backDelay:2000,
    loop:true,
  };
  var typed = new Typed('.element', options);
  category = ["buy me some food", "ask me out for movie date", "buy me a gift"];
    let subCategory = [
      { name: "what do you wanna eat?", category_id: 0 },
      { name: "what movie would you love?", category_id: 1 },
      { name: "what do you want as a love gift?", category_id: 2 }
    ];
    category.map(function (el, index) {
      $("#c").append(`<option class="py-2 fs-6 ps-2" value="${index}">${el}</option>`);
    });

    subCategory.map(function (el, index) {
      $("#sc").append(`<option value="${index}" class="color-form-bg p-5  fw-bold text-white text-center" data-category="${el.category_id}">${el.name}</option>`);

    });

    $("#c").on("change", function () {
      let currentCategoryId = $(this).val();
      $("#sc option").hide();
      $(`[data-category=${currentCategoryId}]`).show();
    });
    
    $("#last-next").on("change",function(){
      $(".element").hide()
      $(".bird-img").addClass("bird-position-submit")
      $(".typed-cursor").hide()
      $(".slick-arrow").hide()
      $("#last-next").hide()
      $("#submit-btn").removeClass("d-none").addClass("d-block animate__animated animate__pulse infinite");
      $("#thanks-text").removeClass("d-none").addClass("d-block")
    })



