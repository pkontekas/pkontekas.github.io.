// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

  // var form = document.querySelector('.needs-validation');

  // form.addEventListener('submit', function(event)
  // {
  //   if (form.checkValidity() === false){
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   form.classList.add('was-validated');
  // })

 //$('#myModal form :input').val("");

function delAssForm(){
  jQuery("input").each(function(){
     jQuery(this).val('');
  });
  document.getElementById("courseSelect").selectedIndex = -1;
}

function delCourseForm(){
  jQuery("input").each(function(){
     jQuery(this).val('');
  });
  document.getElementById("stream").selectedIndex = -1;
  document.getElementById("type").selectedIndex = -1;
}

function delTrPerCoForm(){
  document.getElementById("trainerSelect").selectedIndex = -1;
  document.getElementById("courseSelect").selectedIndex = -1;
}

function delAssPerCoForm(){
  document.getElementById("assSelect").selectedIndex = -1;
  document.getElementById("courseSelect").selectedIndex = -1;
}

function delStPerCoForm(){
  document.getElementById("studentSelect").selectedIndex = -1;
  document.getElementById("courseSelect").selectedIndex = -1;
}

function deleteCSAForm(){
  document.getElementById("courseSelect").selectedIndex = -1;
  document.getElementById("studentSelect").selectedIndex = -1;
  document.getElementById("assSelect").selectedIndex = -1;
  jQuery("input").each(function(){
    jQuery(this).val('');
});}

function deleteForm(){
  jQuery("input").each(function(){
     jQuery(this).val('');
  });
}

// function alertOK(){
//   return console.log("Successful Creation!");
// }

function submitted() {
  if (confirm('Do you want to submit?')) {
      yourformelement.submit();
  } else {
      return false;
  }
}

// $('#my-multiples').chosen({
//   //Here you can change the value of the maximum allowed options
//   min_selected_options: 1
// });