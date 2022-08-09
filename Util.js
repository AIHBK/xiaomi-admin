// window.onload = function(){
    function ajax(options){
        var xhr = new XMLHttpRequest();
        var sendParams = '';
        // 无修改使用默认
        defaults={
            Type:'get',
            Url:'',
            Data:{},
            Header:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            Url:'http://127.0.0.1/user',
            Success:function(reqData){
                console.log(reqData)
            },
            Error:function(){
            }
        }
        Object.assign(defaults,options);
        for(let key in defaults.Data){
            sendParams += key+'='+defaults.Data[key]+'&'; 
        }
        sendParams = sendParams.substring(0,sendParams.length-1)
        console.log(sendParams)
        if(defaults.Type=='post'){
            var contentType = defaults.Header['Content-Type'];
            xhr.open(defaults.Type,defaults.Url);
            xhr.setRequestHeader('Content-Type',contentType);
            if(contentType=='content-Type'){
                xhr.send(JSON.stringify(defaults.Data))
            }else{
                xhr.send(sendParams);
            }
        }else{
            xhr.open(defaults.Type,defaults.Url+'?'+sendParams);
            xhr.send();
        }
        xhr.onload=function(){
            var contentType = xhr.getResponseHeader('Content-Type');
                var responseText = xhr.responseText;
                if(contentType.includes('application/json')){
                    responseText = JSON.stringify(responseText);
                } 
                if(xhr.status == 200){
                    defaults.Success(xhr.responseText);
                }else{
                    defaults.Error(xhr.responseText,xhr);
                }
        }
    }
// }