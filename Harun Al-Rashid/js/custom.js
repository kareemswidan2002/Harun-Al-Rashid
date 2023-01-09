
var i = 0;
var images1 = ['images/news/1.png','images/news/1.1.jpg','images/news/1.2.jpg']

var newsimg1 = document.getElementById("newsimg1")
newsimg1.setAttribute("src",images1[i]);

function next1(){
    if(i<images1.length-1){
        i++;
       
    }else{
       i =0;
    }
    newsimg1.setAttribute("src",images1[i]);
}
function Previous1(){
    if(i>0){
        i--;
       
    }else{
       i =images1.length-1;
    }
    newsimg1.setAttribute("src",images1[i]);
}


var images2 = ['images/news/2.png','images/news/2.1.jpg','images/news/2.2.jpg']
var newsimg2 = document.getElementById("newsimg2")
newsimg2.setAttribute("src",images2[i]);

function next2(){
    if(i<images2.length-1){
        i++;
       
    }else{
       i =0;
    }
    newsimg2.setAttribute("src",images2[i]);
}
function Previous2(){
    if(i>0){
        i--;
       
    }else{
       i =images2.length-1;
    }
    newsimg2.setAttribute("src",images2[i]);
}

var images3 = ['images/news/3.png','images/news/3.1.jpg','images/news/3.2.jpg']
var newsimg3= document.getElementById("newsimg3")
newsimg3.setAttribute("src",images3[i]);

function next3(){
    if(i<images3.length-1){
        i++;
       
    }else{
       i =0;
    }
    newsimg3.setAttribute("src",images3[i]);
}
function Previous3(){
    if(i>0){
        i--;
       
    }else{
       i =images3.length-1;
    }
    newsimg3.setAttribute("src",images3[i]);
}

function yourop(){

}
