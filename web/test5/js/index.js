var show = document.getElementById("input");
var n = Number(show.value)
function add(){
  show.value = n + 1;
  n++;
}
function sub(){
    show.value = n - 1;
    
    if(show.value == 0){

        
    }else{
        n--;
    }
}