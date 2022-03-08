document.addEventListener("DOMContentLoaded", sort(1,'text14','p','card_item'));

function resetButtonBind() {
    $(document).on('click', '.reset_button'), function() {
        $(this).parents('form').reset();        
}
}

function filtr(a,b,clicked_id,c){

    //a-class критерия фильтрации
    //b-id контейнера фильтрации
    //clicked_id = this.id
    //c-class элемента контейнера

    x = document.getElementById(b).children.length;      
  
    var spans = document.getElementById(clicked_id).getElementsByTagName('span');       
        value=spans[0].innerText.replace(/[^0-9]/g,"")
        
    for (let i = 0; i < x; i++) {
        value2 = document.getElementsByClassName(a)[i].innerHTML;
        value2 = value2.replace(/[^0-9]/g,"")
        
        if(document.getElementById(clicked_id).getElementsByTagName("input")[0].checked)
        {
            if(value==value2)
            {
                (document.getElementsByClassName(c)[i].style.display = "block");                
            }
        }else{
            if(value==value2)
            {
                (document.getElementsByClassName(c)[i].style.display = "none");                
            }
        }
    }       
}

function filtr2(a){
    let el = document.querySelector(".card_item"+a);
    if(document.getElementById("square"+a).checked)
    {
        el.style.display = "block";
    }else    
    {
        el.style.display = "none";
    }    
}

function sort(a ,b , c, d){ 
    
   // количество элементов в контейнере
x = document.getElementById(b).children.length;    

var value=[];
var card_item=[];
var card_item_value=[];

for (let i = 0; i < x; i++) {
    card_item_value[i]=0;
}

for (let i = 0; i < x; i++) {     
    var t = document.getElementsByClassName(c)[i].innerHTML;       
    value[i]=t.replace(/[^0-9]/g,"")     
}

for (let index = 0; index < x; index++) {        
    card_item[index]=value[index];    
}

if(a==1){
    for (let i = 0; i < x; i++) {  
        for(let j = 0; j < x; j++){
            if(card_item[i]>=value[j]){
                card_item_value[i]=card_item_value[i]+1
            }
        } 
    }
}else{
    for (let i = 0; i < x; i++) {  
        for(let j = 0; j < x; j++){
            if(card_item[i]<value[j]){
                card_item_value[i]=card_item_value[i]+1
            }
        } 
    }
}

for(let i = 0; i <x; i++){    
    let el = document.getElementsByClassName(d)[i];                  
    el.style.order = card_item_value[i];        
    }    
}


function target(){
    for(var i=0; i<document.body.childNodes.length; i++) {        
            var child = document.body.childNodes[i]        
            alert(child.tagName)        
    }        
}

function select(){   
    document.getElementById("select3").style.display = "flex";
    document.getElementById("select_active").style.display = "none";
}
function select2(){
    document.getElementById("select3").style.display = "none";
    document.getElementById("select_active").style.display = "flex";        
}

function select3(x1){
    document.getElementById("select_active").innerHTML=document.getElementById("select_item"+x1).innerHTML;
    select2();
}

function open_filtr(){
    document.querySelector(".filtr").className="filtr2";
    document.querySelector('.select_box_button').style.opacity = "0.2";
    document.querySelector('.card').style.opacity = "0.2";
    document.querySelector('header').style.opacity = "0.2";
}

function closed_filtr(){
    document.querySelector(".filtr2").className="filtr";
    document.querySelector('.select_box_button').style.opacity = "1";
    document.querySelector('.card').style.opacity = "1";
    document.querySelector('header').style.opacity = "1";
}

function menu() {    
    document.querySelector(".header_mobile").style.display="flex";
    document.querySelector("header").style.display="none";
}

function menu_closed() {    
    document.querySelector(".header_mobile").style.display="none";
    document.querySelector("header").style.display="flex";
}

function bron() {    
    document.querySelector(".bron").style.display="flex";
    document.querySelector('.page').style.opacity = "0.2";   
}

function bron_closed(){
    document.querySelector(".bron").style.display="none";
    document.querySelector('.page').style.opacity = "1"; 
}

function bron_alert(){
    document.querySelector(".bron_alert").style.display="flex";
    document.querySelector('.page').style.opacity = "0.2"; 
}

function bron_alert_closed(){
    document.querySelector(".bron_alert").style.display="none";
    document.querySelector('.page').style.opacity = "1"; 
}










