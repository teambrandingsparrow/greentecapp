let navbar = document.querySelector('.navigater');
let btn = document.querySelector('.hamberger a');
var html = document.documentElement;
document.querySelector('#hamberger').onclick =()=>{
    navbar.classList.add('active');
    btn.classList.add('hide')
}
document.querySelector('.close-menu').onclick =()=>{
    navbar.classList.remove('active');
    btn.classList.remove('hide');
}

html.onclick = function(event){
    if (event.target === html){
      navbar.classList.remove('active');
      btn.classList.remove('hide');
    }
  };