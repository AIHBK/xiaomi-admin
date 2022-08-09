var slideShow = document.getElementById('slideShow');
var slideShowBtn = document.getElementsByClassName('list-btn');
var pageList = document.getElementsByClassName('page-list');
var startFlag = false;
var add = 1;
slideShowBtn[0].onclick=()=>{
    switchOver(-1220);
};
slideShowBtn[1].onclick=()=>{
    switchOver(1220);
};
function clearBackground(){
    for(let x = 0; x < pageList[0].children.length; x++){
        pageList[0].children[x].style.background = ''
    }
}
pageList[0].children[0].style.background = 'hsla(0,0%,100%,.3)';
function switchOver(setLeft){
    var speed = setLeft / 20;
    var newLeft = parseInt(slideShow.style.left)+setLeft; 
    clearBackground();

    test = '' + parseInt(slideShow.style.left);
    pageSlidSite = test.substring(1,5)/1220;
    
    // pageList[0].children[parseInt(pageSlidSite)-1].style.background = 'hsla(0,0%,100%,.3)'

    function Animations(){
        startFlag = true;
        if((speed<0 && parseInt(slideShow.style.left)>newLeft) || (speed>0 && parseInt(slideShow.style.left)<newLeft)){
            slideShow.style.left = parseInt(slideShow.style.left) + speed + 'px';
            setTimeout(Animations, 10);
        }else{
            if(newLeft>-1220){
                slideShow.style.left = -3660+'px'; 
            }
            if(newLeft<-3660){
                slideShow.style.left = -1220+'px'; 
            }
            startFlag = false;
        }
    }
    Animations();
}
(function(){
    for(let i = 0; i < pageList[0].children.length; i++){
        pageList[0].children[i].id = 'pageList'+i;
        pageList[0].children[i].onclick=function(){
            clearBackground();
            slideShow.style.left = -1220 * (parseInt(this.id.substring(this.id.length-1,this.id.length))+1) +'px'
            this.style.background = 'hsla(0,0%,100%,.3)';
        }
    }
}())
function autoSwitchOver(){
    slideShow.onmouseover = ()=>{
        clearInterval(auto);
    } 
    slideShow.onmouseout = ()=>{
        autoSwitchOver();
    } 
   var auto = setInterval(() => {
        add++;
        if(add>3){
            add=1;
        }
        slideShow.style.left = add*-1220+'px';
        var x = add-1;
        for(var i = 0;i<pageList[0].children.length;i++)
        {
            clearBackground();
            // pageList[0].children[i].style.background="";            
            // if(x==i){
                pageList[0].children[x].style.background="hsla(0,0%,100%,.3)";            
            // }
        }
        // pageList[0].children[pageSlidSite-1].style.background = 'hsla(0,0%,100%,.3)'
    }, 3000);
}
// autoSwitchOver();



