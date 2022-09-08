$(document).ready(()=>{
    $('#audio').click(()=>{
        playAudio();
        $('#n1').css({
            'display':'none'
        })
        $('#n2').css({
            'display':'block'
        })
    })
    $('#audio1 ').click(()=>{
        stopAudio();
        $('#n1').css({
            'display':'block'
        })
        $('#n2').css({
            'display':'none'
        })
    })
})
var music=document.getElementById('music');
var playAudio = function(){
    music.play();
}
var stopAudio=function(){
    music.pause()
}


var img=[
    "3-hoat-dong-don-Trung-Thu-thu-vi-cung-gia-dinh.jpg",
    // "background-trung-thu-7.jpg",
    "img/hinh-anh-trung-thu.jpg",
    // "tet-trung-thu.jpg",
    // "trung-thu1-0922.webp",
    // "trung-thu-2022-la-ngay-nao-01.jpg"
    
]
var index=1;
var pic=document.getElementById('img');
document.getElementById('next').onclick=()=>{
    pic.src=img[index];
    if(index==img.length-1){
        index=0
    }
    else{
        index=index+1;

    }
}

var pic=document.getElementById('img');
document.getElementById('back').onclick=()=>{
    pic.src=img[index];
    if(index==0){
        index=img.length-1;
    }
    else{
        index=index-1;
        
    }
}
setInterval(function(){
    pic.src=img[index];
    if(index==img.length-1){
        index=0
    }
    else{
        index=index+1;

    }
},10000)
