// ============= theme starts=================
var theme = document.querySelectorAll('.themes');

theme.forEach((item, i) => {
  item.addEventListener('change',function(){
if(item.checked && item.value == 'two'){
  document.querySelector('html').setAttribute("data-theme",'two');
}
if(item.checked && item.value == 'one'){
  document.querySelector('html').removeAttribute("data-theme")
}
if(item.checked && item.value == 'three'){
    document.querySelector('html').setAttribute("data-theme",'three');
}
  })
});
// ============= calculator functionality =================

var btns = document.querySelectorAll('button');
var $screen = document.querySelector("#screen")
btns.forEach((item, i) => {
  item.addEventListener('click',function(){
    if(item.innerText.match(/[0-9]/)){

$screen.value =$screen.value+ Number(item.innerText);
    }
    if(item.innerText.match(/[+]|[-]|[/]/)){
      $screen.value =$screen.value+ item.innerText;

    }
    if(item.innerText.match(/[x]/)){
      $screen.value =$screen.value+"*" ;

    }
    if(item.innerText == ".") {
        $screen.value =$screen.value+ item.innerText;
      }
    if(item.innerText.match(/RESET/)){
      $screen.value = ""
    }
    if(item.innerText.match(/DEL/)){
      $screen.value[-1] =""
      let arr = $screen.value.split("")
      arr.pop()
      arr.join("")
      $screen.value = arr.join("");
    }
    if(item.innerText.match(/[=]/)){
      try{
        $screen.value =eval($screen.value);
      }catch{
        $screen.value ="Error!";
      }
    }


  })

});
// ====================Validation=================
$screen.addEventListener('input',function(e){
  if(e.target.value.match(/[A-Za-z]/)){
    $screen.value = "";
  }
})
