(function($){
  $(function(){

    $(document).ready(function() {
      $('select').material_select();
    });

    $(document).ready(function(){
      $('.scrollspy').scrollSpy();
    });


    $(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on click
      alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
      gutter: 0, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    });
    
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .9, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      // ready: function() { alert('Ready'); }, // Callback for Modal open
      // complete: function() { alert('Closed'); } // Callback for Modal close
    });

    $("#cta__why").click(function() {
      $('html, body').animate({
        scrollTop: $("#why").offset().top
      }, 2000);
    });

    $("#cta__nav").click(function() {
      $('html, body').animate({
        scrollTop: $("#contact-form").offset().top
      }, 2000);
    });

    $("#cta__p").click(function() {
      $('html, body').animate({
        scrollTop: $("#contact-form").offset().top
      }, 2000);
    });

    $("#cta__main").click(function() {
      $('html, body').animate({
        scrollTop: $("#because-I-do-everything").offset().top
      }, 2000);
    });

    $("#cta__pricing").click(function() {
      $('html, body').animate({
        scrollTop: $("#pricing").offset().top
      }, 2000);
    });

    $("#cta__faq").click(function() {
      $('html, body').animate({
        scrollTop: $("#faq").offset().top
      }, 2000);
    });

    $('#form-element').submit(function(event){
      event.preventDefault();

        var firstName, lastName, email, option, textarea;
        firstName=$("#firstName").val();
        email=$("#email").val();
        company=$("#company").val();
        option=$("option[selected]").val();
        textarea=$("#textarea1").val();

        $.post("/contact", { name:firstName, last:lastName, email:email, option:option, text:textarea }, function () { })
          .success(function() { toast('Email sent! Talk to you soon.', 3000); })
          .error(function() { toast('Please complete all form fields.' , 3000);  });
          
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space
