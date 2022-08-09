window.onload=function(){
    sliderShow('show-wrap','page-list')
    cutSlid('doubt-item','content-item');

    function sliderShow(imgItem,listItem){
        var showWrap = document.getElementsByClassName(imgItem);
        var pageList = document.getElementsByClassName(listItem);
        for(let i = 0;i < pageList[0].children.length;i++){
            pageList[0].children[0].setAttribute('style','background:hsla(0,0%,100%,.3);border:2px solid rgba(0,0,0,.4);');
            pageList[0].children[i].onclick=function(){
                for(let x = 0;x < pageList[0].children.length;x++){
                    pageList[0].children[x].setAttribute('style','background:rgba(0,0,0,0.4);border:2px solid hsla(0,0%,100%,.3);');
                }
                this.setAttribute('style','background:hsla(0,0%,100%,.3);border:2px solid rgba(0,0,0,.4);');
                if(i==0){
                    console.log(123)
                }
                showWrap[0].children[0].style.left = -1200*(i+1)+'px'
                console.log(showWrap[0].children[0].style.left)
            }
        }
    }
    function cutSlid(item,Content){
        var itemTitle = document.getElementsByClassName(item);
        var itemContent = document.getElementsByClassName(Content);
        itemTitle[0].setAttribute('style','background:#ff6700;color:#fff;')
        itemContent[0].style.display = 'block';
        for(let i = 0;i < itemTitle.length;i++){
                itemTitle[i].onmouseover = function(){
                    for(let x = 0;x < itemContent.length;x++){
                        itemContent[x].style.display  = 'none';    
                        itemTitle[x].setAttribute('style','background:#fff;color:#000;')
                    }
                    itemContent[i].style.display  = 'block';
                    this.setAttribute('style','background:#ff6700;color:#fff;');
                }
        }
        
    }
    

}