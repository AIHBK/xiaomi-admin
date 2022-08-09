$(function () {
    let Flag = false;
    $('.toggle-wrap .button-login').click(function () {
        $('.bottom-line').animate({
            left: 0
        }, 200)
        $('.log-signIn-wrap').animate({
            left: 45
        }, 200)
    })
    $('.toggle-wrap .button-signIn').click(function () {
        $('.bottom-line').animate({
            left: 50
        }, 200)
        $('.log-signIn-wrap').animate({
            left: -350
        }, 200)
    })
    $('.user').click(function () {
        var $this = $(this);
        $(this).children('label').animate({
            top: -5,
            fontSize: 12
        }, 200);
        $(this).children('input').animate({
            height: 30,
            fontSize: 17,
            top: -5
        }, 200);
        $(this).children('input').blur(function () {
            $this.children('label').animate({
                top: 2,
                fontSize: 14
            }, 200);
            $this.children('input').animate({
                height: 20,
                fontSize: 14,
                top: 0,
            }, 200);
            if (($('#userPassword').val() != '' && $('#userPassword').val() != null) && ($('#userId').val() != '' && $('#userId').val() != null)) {
                $('#submitBtn').css({
                    opacity: 1
                })
            }

        })

    });
    $('.site').on('click', function (e) {
        $('#selectWrap').slideDown(200).siblings().children('#selectWrap').slideUp(200);
    })
    $('#selectCountry').children('ul').children('li').click(function () {
        if ($(this).attr('class') == undefined) {
            $("#defCountry").text($(this).text());
            console.log($(this).text());
        }

    })
    // $('#searchCountry').children('.search-country-content').focus()
    console.log($('#loginWrap'))

})
// window.onload=function(){
//     var searchCountry = document.getElementById('searchCountry');
//         searchCountry.children[0].onclick = function(){
//             this.style.border = '1px solid #ff6700'

//         }
// }
// setInterval(function () {
//     // var test = document.getElementsByTagName("button");
//     if (test[43].children[0].innerText == '选择') {
//         test[43].click();
//         test[72].click();
//     } else {
//         return alert("成功");
//     }
// }, 200);
// (function(name,time) {
//     // name:课程名  string
//     // time: ms/次  number
//     // 打开浏览器 -->按F12(fn+F12) --> 控制台(console) --> 复制 --> 粘贴
//     var courseName = document.getElementsByClassName('el-table__row')
//     var interval;
//     for(var i = 0; i < courseName.length;i++){
//         if(courseName[i].children[1].children[0].children[0].children[0].innerHTML.includes(name)){
//         console.log('课程内容为:'+courseName[i].children[1].children[0].children[0].children[0].innerHTML);
//         var btn = document.getElementsByTagName("button");
//         var temp = courseName[i].children[8].children[0].children[0];
//         interval = setInterval(() => {
//                 if (temp.children[0].innerHTML.includes("选择")) {
//                     temp.click();
//                     btn[72].click();
//                 } else {
//                     clearInterval(interval);
//                     return alert("成功");
//                 }
//             },time);
//         }
//     } 
// }('法学通论',300)); //修改name，time即可


// document.getElementsByClassName('el-table__row')[0].children[8].children[0].children[0].children[0].innerHTML='sdfsf';