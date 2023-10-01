var wrapper = document.getElementsByClassName("wrapper");
wrapper[0].style.width = "1920px";
wrapper[0].style.margin = " 0 auto";



var container = document.getElementsByClassName("container");

container[0].style.width = "1920px"
container[0].style.display = "flex";
container[0].style.justifyContent = "space-between";
container[0].style.margin = "0 auto";
// container[0].style.marginLeft = "346px";

var h2 = document.getElementsByTagName("h2");
h2[0].style.marginTop = "32px";
h2[0].style.marginBottom = "25px";
h2[0].style.color = "#637f83";
h2[0].style.marginLeft = "375px";


var ul = document.getElementsByTagName("ul");

ul[0].style.listStyleType = "none";
// ul[0].style.PaddingLeft = "372px";
ul[0].style.marginRight = "372px";


var li = document.getElementsByTagName("li");

for (var i = 0; i < li.length; i++) {
	li[i].style.display = "inline-block";
    li[i].style.marginTop = "32px";
    li[i].style.marginBottom = "25px";

}

var a = document.getElementsByTagName("a");

for (var i = 0; i < a.length; i++) {
    a[i].style.textDecoration = "none";
    a[i].style.marginRight = "50px";
    a[i].style.textAlign = "center";
    a[i].style.color = "#637f83";
}
var home = document.getElementsByClassName("home");
home[0].style.color = "#e4551d";


var banner = document.getElementById('banner');
banner.style.backgroundImage = 'url("images/banner.png")';
// banner.style.backgroundSize = "cover";
banner.style.width = "1920px";
// banner[0].document.style.backgroundImage = 'url("images/banner.png")';
// banner[0].style.backgroundSize = "500px 100%";

// var banner = document.getElementById("banner");

banner.style.height = "400px";


var banner_h2 = document.getElementsByClassName("banner_h2");

banner_h2[0].style.paddingTop = "125px";
banner_h2[0].style.paddingBottom = "30px";
banner_h2[0].style.textAlign = "center";
banner_h2[0].style.color = "#ccc";
banner_h2[0].style.textDecoration = "underline";
// banner_h2[0].style.fontFamily = "Myriad Pro light";

var banner_p = document.getElementsByClassName("banner_p");

banner_p[0].style.textAlign = "center";
banner_p[0].style.paddingBottom = "35px";
banner_p[0].style.color = "#ccc";

var circle = document.getElementsByClassName("circle");

circle[0].style.marginLeft = "930px";



var overview_h1 = document.getElementsByClassName("overview_h1");
overview_h1[0].style.marginLeft = "785px";
overview_h1[0].style.marginTop = "45px";
overview_h1[0].style.marginBottom = "15px";
overview_h1[0].style.color = "#637f83";
overview_h1[0].style.fontFamily = "Source Sans Pro Bold";
overview_h1[0].style.fontSize = "34px";

var overview_p = document.getElementsByClassName("overview_p");
overview_p[0].style.marginLeft = "654px";
overview_p[0].style.paddingBottom = "45px";
overview_p[0].style.color = "#7e9497";
overview_p[0].style.fontFamily = "Source Sans Pro light";
overview_p[0].style.fontSize = "24px";



var main = document.getElementsByClassName('main');
main[0].style.backgroundColor = "#f6f6f6";
main[0].style.width = "1920px";
main[0].style.height = "376px";
main[0].style.display = "flex";
main[0].style.paddingLeft = "414px";
main[0].style.paddingRight = "414px";

var main_image = document.getElementsByClassName("main_image");

for (let i = 0; i < main_image.length; i++) { 
    main_image[i].style.marginRight = "44px";
    main_image[i].style.textAlign = "center";
    main_image[i].style.marginTop = "40px";

}

var main_h3 = document.getElementsByClassName("main_h3");

for (let i = 0; i < main_h3.length; i++) {
    main_h3[i].style.marginBottom = "25px";
    main_h3[i].style.marginTop = "35px";
    main_h3[i].style.color = "#637f83";

}

var main_p = document.getElementsByClassName("main_p");

for (let i = 0; i < main_p.length; i++) {
    main_p[i].style.marginBottom = "25px";
    main_p[i].style.color = "#9d9c9c";
    main_p[i].style.fontFamily = "Source Sans Pro Regular";
    main_p[i].style.fontSize = "14px";

}

var button = document.getElementsByTagName("button");

for (let i = 0; i < button.length; i++) {
    button[i].style.width = "70px";
    button[i].style.height = "35px";
    button[i].style.borderRadius = "5px";
    button[i].style.border = "none";
    button[i].style.backgroundColor = "#637f83";
    button[i].style.color = "#ffffff";
    button[i].style.fontFamily = "Source Sans Pro Black";
    button[i].style.fontSize = "16px";

}




var fix = document.getElementsByClassName("fix");
fix[0].style.backgroundColor = "#f6f6f6";
fix[0].style.float = "Right";
fix[0].style.height = "234px";
fix[0].style.width = "525px";

var info_h = document.getElementsByClassName("info_h");
info_h[0].style.float = "left";

var info_h1 = document.getElementsByClassName("info_h1");

info_h1[0].style.marginLeft = "794px";
info_h1[0].style.marginTop = "40px";
info_h1[0].style.marginBottom = "5px";
info_h1[0].style.color = "#637f83";
info_h1[0].style.fontFamily = "Source Sans Pro Bold";
info_h1[0].style.fontSize = "34px";


var info_p = document.getElementsByClassName("info_p");

info_p[0].style.marginLeft = "630px";
info_p[0].style.color = "#96a7a9";
info_p[0].style.marginBottom = "30px";
info_p[0].style.fontFamily = "Source Sans Pro light";
info_p[0].style.fontSize = "24px";

var space = document.getElementsByClassName("space");
space[0].style.display = "flex";
space[0].style.marginLeft = "650px";

var spacer1 = document.getElementsByClassName("spacer1");
spacer1[0].style.marginRight = "272px";

var spacer2 = document.getElementsByClassName("spacer2");
spacer2[0].style.marginLeft = "-100px";

var circle2 = document.getElementsByClassName("circle2");
circle2[0].style.margin = "0 15px";

var info_portfolio = document.getElementsByClassName("info_portfolio");

info_portfolio[0].style.margin = "0 0 0 375px";


var button_portfolio = document.getElementsByClassName("button_portfolio");

button_portfolio[0].style.backgroundColor = "#e4551d";
button_portfolio[0].style.color = "#fffff";
button_portfolio[0].style.display = "block";
button_portfolio[0].style.width = "150px";
button_portfolio[0].style.height = "50px";
button_portfolio[0].style.alignItem = "center";
button_portfolio[0].style.margin = "40px 0 58px 885px";
button_portfolio[0].style.fontFamily = "Source Sans Pro Bold";
button_portfolio[0].style.fontSize = "18px";


var information = document.getElementsByClassName("information");

information[0].style.margin = "0 375px 0";
information[0].style.paddingTop = "50px";

var information_1 = document.getElementsByClassName("information_1");

information_1[0].style.display = "flex";
information_1[0].style.paddingBottom = "30px";

var information_i = document.getElementsByClassName("information_i");
for (let i = 0; i < information_i.length; i++) {
    
    information_i[i].style.display = "flex";
}

var information_2 = document.getElementsByClassName("information_2");

information_2[0].style.display = "flex";
information_2[0].style.paddingBottom = "60px";

var information_p = document.getElementsByClassName("information_p");
for (let i = 0; i < information_p.length; i++) {  
    information_p[i].style.display = "flex";
}

var information_img = document.getElementsByClassName("information_img");
for (let i = 0; i < information_img.length; i++) {
    information_img[i].style.borderRadius = "5px";
    information_img[i].style.marginRight = "28px";
}

var information_h3 = document.getElementsByClassName("information_h3");
for (let i = 0; i < information_h3.length; i++) {  
    information_h3[i].style.marginBottom = "15px"
    information_h3[i].style.fontFamily = "Source Sans Pro Bold";
    information_h3[i].style.fontSize = "24px";
    information_h3[i].style.color = "#637f83";

}

var information_para = document.getElementsByClassName("information_para");
for (let i = 0; i < information_para.length; i++) {  
    information_para[i].style.fontFamily = "Source Sans Pro Regular";
    information_para[i].style.fontSize = "14px";
    information_para[i].style.color = "#959494";

}

var span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
    span[i].style.color = "#e65117";
    
}

var info_space = document.getElementsByClassName("info_space");
    info_space[0].style.marginRight = "60px";

var info_space2 = document.getElementsByClassName("info_space2");
    info_space2[0].style.marginRight = "40px";
    

var section = document.getElementsByClassName("section");

section[0].style.backgroundColor = "#637f83";
section[0].style.width = "1920px";
section[0].style.height = "340px";


var section_h = document.getElementsByClassName("section_h");

section_h[0].style.marginLeft = "794px";
section_h[0].style.paddingTop = "45px";
section_h[0].style.marginBottom = "4px";
section_h[0].style.color = "#ffffff";
section_h[0].style.fontFamily = "Source Sans Pro Bold";
section_h[0].style.fontSize = "34px";


var section_p = document.getElementsByClassName("section_p");

section_p[0].style.marginLeft = "630px";
section_p[0].style.color = "#ffffff";
section_p[0].style.marginBottom = "35px";
section_p[0].style.fontFamily = "Source Sans Pro light";
section_p[0].style.fontSize = "24px";


var subscribe = document.getElementsByClassName("subscribe");

subscribe[0].style.padding = " 38px 375px 50px";
subscribe[0].style.display = "flex";

var subscribe_msg = document.getElementsByClassName("subscribe_msg");
subscribe_msg[0].style.display = "flex";
subscribe_msg[0].style.marginBottom = "27px";


var subscribe_h = document.getElementsByClassName("subscribe_h");
 
subscribe_h[0].style.color = "#ffffff";
subscribe_h[0].style.fontFamily = "Source Sans Pro Bold";
subscribe_h[0].style.fontSize = "18px";

var sub_img = document.getElementsByClassName("sub_img");
sub_img[0].style.color = "#ffffff";
sub_img[0].style.marginRight = "20px";


var subscribe_p = document.getElementsByClassName("subscribe_p");
 
subscribe_p[0].style.color = "#ffffff";
subscribe_p[0].style.fontFamily = "Source Sans Pro Light";
subscribe_p[0].style.fontSize = "14px";


var sub_input = document.getElementsByClassName("sub_input");
sub_input[0].style.display = "flex";

var input = document.getElementsByTagName("input");
input[0].style.width = "455px";
input[0].style.height = "40px"
input[0].style.marginRight = "10px";
input[0].style.border = "2px solid #597275";
input[0].style.backgroundColor = "#597275";
input[0].style.borderRadius = "5px";

var submit = document.getElementsByTagName("submit");

submit[0].style.width = "100px";
submit[0].style.height = "40px";
submit[0].style.border = "2px solid #597275";
submit[0].style.backgroundColor = "#597275";
submit[0].style.borderRadius = "5px";
submit[0].style.color = "#ffffff";
submit[0].style.textAlign = "center";
submit[0].style.paddingTop = "8px";
submit[0].style.fontFamily = "Source Sans Pro Black";
submit[0].style.fontSize = "18px";
submit[0].style.marginRight = "27px";

var subscribe_twitter = document.getElementsByClassName("subscribe_twitter");

subscribe_twitter[0].style.border = "2px solid #597275";
subscribe_twitter[0].style.backgroundColor = "#597275";
subscribe_twitter[0].style.borderRadius = "5px";
subscribe_twitter[0].style.display = "flex";
subscribe_twitter[0].style.padding = "25px 0";



var sub_img2 = document.getElementsByClassName("sub_img2");
sub_img2[0].style.color = "#ffffff";
sub_img2[0].style.margin = "0 25px 0 30px";

var sub_p = document.getElementsByClassName("sub_p");
sub_p[0].style.color = "#ffffff";
sub_p[0].style.fontFamily = "Source Sans Pro Regular";
sub_p[0].style.fontSize = "14px";
sub_p[0].style.color = "#b5c7c9";

var john = document.getElementsByClassName("john");
john[0].style.color = "#ffffff";
john[0].style.textDecoration = "underline";


var follow = document.getElementsByClassName("follow");
follow[0].style.display = "flex";
follow[0].style.padding = "30px 375px ";

var follow_topic = document.getElementsByClassName("follow_topic");

for (let i = 0; i < follow_topic.length; i++) {
    follow_topic[i].style.display = "flex";
    follow_topic[i].style.marginRight = "92px";
}

var icon = document.getElementsByClassName("icon");
for (let i = 0; i < icon.length; i++) {
   icon[i].style.marginRight = "20px";
    
}

var social = document.getElementsByClassName("social");
for (let i = 0; i < social.length; i++) {
    social[i].style.paddingTop = "16px";
    
}

var social_h = document.getElementsByClassName("social_h");
for (let i = 0; i < social_h.length; i++) {
    social_h[i].style.fontFamily = "Source Sans Pro Bold";
    social_h[i].style.fontSize = "18px";  
    social_h[i].style.color = "#637f83";
}

var social_p = document.getElementsByClassName("social_p");
for (let i = 0; i < social_p.length; i++) {
    social_p[i].style.fontFamily = "Source Sans Pro Regular";
    social_p[i].style.fontSize = "14px";  
    social_p[i].style.color = "#c0cfd1";
}

var footer = document.getElementsByTagName("footer");
footer[0].style.backgroundColor = "#637f83";
footer[0].style.width = "1920px";
footer[0].style.height = "90px";

var footer_p = document.getElementsByClassName("footer_p");
footer_p[0].style.color = "#ffffff";
footer_p[0].style.textAlign = "center";
footer_p[0].style.paddingTop = "35px";
footer_p[0].style.fontFamily = "Source Sans Pro Regular";
footer_p[0].style.fontSize = "14px";
