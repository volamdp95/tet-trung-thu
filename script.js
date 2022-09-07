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