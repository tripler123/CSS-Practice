function myFuntion(){
  var x = document.getElementById('snackBar')

  x.className = "show";

  setTimeout(function(){
    x.className = x.className.replace("show","");
  }, 3000);
}