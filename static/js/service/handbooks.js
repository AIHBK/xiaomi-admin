var flag = false;
cutSlid('title-item','content-item');
clickShow('list-title');
function cutSlid(item,Content){
    var itemTitle = document.getElementsByClassName(item);
    var itemContent = document.getElementsByClassName(Content);
    for(let x = 0;x < itemContent.length;x++){
        itemContent[x].style.display  = 'none';    
        itemTitle[x].setAttribute('style','color:#757575;')
    }
    itemTitle[3].setAttribute('style','color:#ff6700;')
    itemContent[3].style.display = 'block';
    for(let i = 0;i < itemTitle.length;i++){
            itemTitle[i].onclick = function(){
                for(let x = 0;x < itemContent.length;x++){
                    itemContent[x].style.display  = 'none';    
                    itemTitle[x].setAttribute('style','color:#757575;')
                }
                itemContent[i].style.display  = 'block';
                this.setAttribute('style','color:#ff6700;');
            }
    }
    
}
function clickShow(clickEl){
    let el = document.getElementsByClassName(clickEl);
        for(let i = 0;i < el.length;i++){
            el[i].children[0].onclick = function(){
                for(let x = 0;x < el.length;x++){
                    el[x].nextElementSibling.style.display = 'none';   
                }
                if(!flag){        
                    this.parentNode.nextElementSibling.style.display = 'block';
                }else{
                    this.parentNode.nextElementSibling.style.display = 'none';
                }
                flag = !flag;
            }
        }
}