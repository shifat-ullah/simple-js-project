
let value  = 0;

document.getElementById('blue-btn').addEventListener('click', function(){
    document.getElementById('counter').innerText ;
    value += 1;
    document.getElementById('counter').innerText=value ;

})


document.getElementById('btn-success').addEventListener('click', function(){
    document.getElementById('counter').innerText ;
    value -= 1;
    document.getElementById('counter').innerText=value ;

})