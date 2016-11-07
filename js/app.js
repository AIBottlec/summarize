/**
 * Created by Administrator on 2016/7/15.
 */
$(function () {
    var arrs = [
        ["img", "03", "img/bc.png", "中国银行", "img/sx.png", "2016.03.28", "张实、景春波、于晓乐、郭慧敏", "img/js.png", "scene1","img/1.png","http://icardworld.cn/1","1"],
        ["img", "04", "img/bc.png", "中国银行", "img/sx.png", "2016.04.03", "刘增伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene2","img/2.png","http://icardworld.cn/3","2"],
        ["img", "04", "img/bc.png", "中国银行", "img/sx.png", "2016.04.03", "张实、景春波、于晓乐、郭慧敏", "img/js.png", "scene4","img/4.png","http://icardworld.cn/AIBottle/trans","4"],
        ["img", "04", "img/bc.png", "中国银行", "img/sx.png", "2016.04.03", "全瑞廷、景春波、于晓乐、郭慧敏", "img/js.png", "scene5","img/5.png","http://icardworld.cn/dati","5"],
        ["img", "04", "img/bc.png", "民生银行", "img/sx.png", "2016.04.07", "全瑞廷、景春波、于晓乐、郭慧敏", "img/js.png", "scene14","img/14.png","http://icardworld.cn/AIBottle/xiaoweiren","14"],
        ["img", "04", "img/bc.png", "中国银行", "img/sx.png", "2016.04.12", "刘增伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene3","img/3.png"," http://icardworld.cn/monkey","3"],
        ["img", "04", "img/bc.png", "中国银行", "img/sx.png", "2016.04.12", "吴玮、景春波、于晓乐、郭慧敏", "img/js.png", "scene6","img/6.png","http://icardworld.cn/dxhb","6"],
        ["img", "04", "img/bc.png", "中国银行", "img/wsx.png", "2016.04.15", "贺普罗、刘曾伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene18","img/19.png","http://icardworld.cn/xinyongka/","18"],
        ["img", "04", "img/bc.png", "民生银行", "img/sx.png", "2016.04.23", "贺普罗、景春波、于晓乐、郭慧敏", "img/js.png", "scene17","img/17.png","http://icardworld.cn/zjqiqiao2/mp4.html","17"],
        ["img", "05", "img/bc.png", "中国银行", "img/wsx.png", "2016.05.09", "刘增伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene8","img/8.png","http://icardworld.cn/fbiao1","8"],
        ["img", "05", "img/bc.png", "中国银行", "img/ta.png", "2016.05.15", "张实、景春波、于晓乐、郭慧敏", "img/js.png", "scene11","img/11.png","http://icardworld.cn/lyay","11"],
        ["img", "05", "img/bc.png", "中国银行", "img/wsx.png", "2016.05.28", "刘增伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene13","img/13.png","http://icardworld.cn/shuaka","13"],
        ["img", "06", "img/bc.png", "太阳堂", "img/wsx.png", "2016.06.01", "贺普罗、刘增伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene19","img/18.png","http://icardworld.cn/aika/","19"],
        ["img", "06", "img/bc.png", "中国银行", "img/sx.png", "2016.06.08", "贺普罗、景春波、于晓乐、郭慧敏", "img/js.png", "scene7","img/7.png","http://icardworld.cn/EuroCup","7"],
        ["img", "06", "img/bc.png", "中国银行", "img/sx.png", "2016.06.13", "贺普罗、刘增伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene16","img/16.png","http://icardworld.cn/zhongmei3","16"],
        ["img", "06", "img/bc.png", "中国银行", "img/wsx.png", "2016.06.20", "全瑞廷、景春波、于晓乐、郭慧敏", "img/js.png", "scene9","img/9.png","http://icardworld.cn/gyisheng","9"],
        ["img", "06", "img/bc.png", "中国银行", "img/wsx.png", "2016.06.20", "全瑞廷、景春波、于晓乐、郭慧敏", "img/js.png", "scene10","img/10.png","http://icardworld.cn/AIBottle/boy","10"],
        ["img", "07", "img/bc.png", "民生银行", "img/sx.png", "2016.07.11", "边伟、景春波、于晓乐、郭慧敏", "img/js.png", "scene15","img/15.png","http://icardworld.cn/AIBottle/invention2","15"],
    ];
    for (var i = 0, html = ""; i < arrs.length; i++) {
        html += '<div class="swiper-slide"><div class="' + arrs[i][0] + '"> <ul class="' + arrs[i][8] + '"> <li class="layer" data-depth="0.3"><a href="'+arrs[i][10]+'"><img src="' + arrs[i][9] + '"></a></li> </ul></div>'
            + '<b>' + arrs[i][1] + '</b>'
            + '<img class="i" src="' + arrs[i][2] + '" alt="">'
            + '<span class="jiao"></span><br>'
            + '<b>' + arrs[i][3] + '</b>'
            + '<div class="sx"><img src="' + arrs[i][4] + '" alt=""><span>' + arrs[i][5] + '</span></div>'
            + '<p>' + arrs[i][6] + '</p>'
            + '<img class="ii" value="'+arrs[i][11]+'" src="' + arrs[i][7] + '" alt=""></div>'
    }
    $(".swiper-slide").before(html)
    var myScript = new Swiper(".swiper-container", {
        //freeMode: true,
        //freeModeMomentumRatio: 3,//移动惯量
        //freeModeSticky: true
        loop:true
    });
    var scene = $(".scene1")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene2")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene3")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene4")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene5")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene6")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene7")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene8")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene9")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene10")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene11")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene13")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene14")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene15")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene16")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene17")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene18")[0];
    var parallax = new Parallax(scene);
    var scene = $(".scene19")[0];
    var parallax = new Parallax(scene);
    var ld=[
        {"id":"1","nr":"<p>严格控制了页面各部分的动画时间页面整体效果非常和谐,给人工作之余带来轻松感 </p>"},
        {"id":"2","nr":"<p>模拟手指的跟随和屏幕擦一擦功能</p>"},
        {"id":"3","nr":"<p>通过点击页面内容提示进入浏览器,从而在'App Store'打开链接</p>"},
        {"id":"4","nr":"<p>旋转动画的兼容性问题,利用CSS动画属性实现加载页平缓的摇摆手臂</p>"},
        {"id":"5","nr":"<p>利用js实现了对每次答题选项的记忆功能,并可以给出相应的分数,在答题完毕给出不同的分数和评语</p>"},
        {"id":"6","nr":"<p>js与css结合,实现了小车穿越重重迷宫的效果</p>"},
        {"id":"7","nr":"<p>首次与后台结合完成完整项目</p>"},
        {"id":"8","nr":"<p>实现了对声音片段的处理</p>"},
        {"id":"9","nr":"<p>1、使用纯JQ框架是实现页面的切屏效果</p><p>2、利用太阳堂代码库实现动画效果 </p>"},
        {"id":"10","nr":"<p>分享页的3D旋转</p>"},
        {"id":"11","nr":"<p>实现移动端调取本地文件</p>"},
        {"id":"13","nr":"<p>首页的刷卡</p>"},
        {"id":"14","nr":"<p>第二个页面的幕布上拉</p>"},
        {"id":"15","nr":"<p>页面5中百度地图API的调用</p>"},
        {"id":"16","nr":"<p>首页面局部滑动，点击后蒙版滑动，双侧上下滑动技术</p>"},
        {"id":"17","nr":"<p>1、页面中首次加入音乐及视频</p> <p>2、将多个页面合成一个页面呈现</p><p>3、7000条数据借助外部工具用纯前端技术实现</p>"},
        {"id":"18","nr":"<p>由于数据量较大，使用数据整合技术</p>"},
        {"id":"19","nr":"<p>实现页面整合技术</p>"}
    ]
    $(".ii").click(function () {
        for(var i=0;i<ld.length;i++){
            if(ld[i].id==$(this).attr("value")){
                $(".box div").html(ld[i].nr)
            }
        }
        $("#mb").animate({
            "top": "0"
        })
    });
    $("#mb span").click(function () {
        $("#mb").animate({
            "top": "100%"
        })
    })
    $(".layer a").click(function(){
        $(".kong").show();
        $("iframe").attr("src",$(this).attr("href"))
        return false;
    });
    $(".guanbi").bind("touchstart",function(){
        $(".kong").hide()
    })
})