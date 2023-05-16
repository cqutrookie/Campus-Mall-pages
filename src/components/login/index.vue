<template>
    <video autoplay loop muted="none">
        <source src="../login/video/background.mp4" type="video/mp4">
    </video>
    <div class="left" id="left">
        <div class="show1" id="show1">
            <a href=""><h1>Sign in</h1></a>
        </div>
    </div>
    <div class="midleft" id="midleft">
        <div class="show2" id="show2">
            <a href="#"><h1>Sign up</h1></a>
        </div>
    </div>
    <div class="midright" id="midright">
        <div class="show3" id="show3">
            <a href="#"><h1>Feedback</h1></a>
        </div>
    </div>
    <div class="right" id="right">
        <div class="show4" id="show4">
            <a href="#"><h1>Manual</h1></a>
        </div>
    </div>
</template>

<style>
*{
    padding: 0;
    margin: 0;
}
body {
    background-image: none;
}
video {
    position:absolute;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    z-index:-11;

}
source{
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;

}
.left {
    background-color: rgba(100, 100, 100, 0.5);
    width: 25%;
    height: 100%;
    position: absolute;
    display:inline-block;
    border-right:3px solid #fff;
}
@keyframes box{
    0% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(-60px);
    }
}
.show1{
    display: none;
    border-top: 5px solid #fff;
    border-bottom: 5px solid #fff;
    width: 200px;
    height: 50px;
    position: relative;
    top: 400px;
    margin: auto;
    animation: box 2s;
    color: #fff;
}

.show1 a {
    color: #fff;
    text-decoration: none;
}
.show1:hover {
    background-color: gray;
}
.show2{
    display: none;
    border-top: 5px solid #fff;
    border-bottom: 5px solid #fff;
    width: 200px;
    height: 50px;
    position: relative;
    top: 400px;
    margin: auto;
    animation: box 2s;
    color: #fff;
}

.show2 a {
    color: #fff;
    text-decoration: none;
}
.show2:hover {
    background-color: gray;
}
.show3{
    display: none;
    border-top: 5px solid #fff;
    border-bottom: 5px solid #fff;
    width: 200px;
    height: 50px;
    position: relative;
    top: 400px;
    margin: auto;
    animation: box 2s;
    color: #fff;
}

.show3 a {
    color: #fff;
    text-decoration: none;
}
.show3:hover {
    background-color: gray;
}
.show4{
    display: none;
    border-top: 5px solid #fff;
    border-bottom: 5px solid #fff;
    width: 200px;
    height: 50px;
    position: relative;
    top: 400px;
    margin: auto;
    animation: box 2s;
    color: #fff;
}

.show4 a {
    color: #fff;
    text-decoration: none;
}
strong:hover {
    font-size: 30px;
}
h1 {
    text-align: center;
}
.show4:hover {
    background-color: gray;
}
.right {
    background-color: rgba(100, 100, 100, 0.5);
    width: 25%;
    height: 100%;
    position: absolute;
    left: 75%;
    display: inline-block;
}
.midleft {
    background-color: rgba(100, 100, 100, 0.5);;
    width: 25%;
    height: 100%;
    position: absolute;
    left: 25%;
    display: inline-block;
    border-right:3px solid #fff;
}
.midright {
    background-color: rgba(100, 100, 100, 0.5);;
    width: 25%;
    height: 100%;
    position: absolute;
    left: 50%;
    display: inline-block;
    border-right:3px solid #fff;
}
.navleft  {
    width: 150px;
    height: 200px;
}
.navleft li{
    height: 45px;
    line-height: 45px;
    list-style: none;
}
.navleft ul li a {
    display: block;
    height: 45px;
    font-size: 22.4px;
    color: rgba(255, 255, 255, 0.671);
    font-weight: bold;
    font-family:'Helvetica', sans-serif;
    padding: 0 20px;
}
.navmidleft  {
    width: 350px;
    height: 200px;
    position: relative;
}
.navmidleft li{
    height: 45px;
    line-height: 45px;
    list-style: none;
}
.navmidleft ul li a {
    display: block;
    height: 45px;
    font-size: 22.4px;
    color: rgba(255, 255, 255, 0.671);
    font-weight: bold;
    font-family:'Helvetica', sans-serif;
    padding: 0 20px;
}
.navmidright  {
    width: 350px;
    height: 200px;
}
.navmidright li{
    height: 45px;
    line-height: 45px;
    list-style: none;
}
.navmidright ul li a {
    display: block;
    height: 45px;
    font-size: 22.4px;
    color: rgba(255, 255, 255, 0.671);
    font-weight: bold;
    font-family:'Helvetica', sans-serif;
    padding: 0 20px;
}
.navright  {
    width: 350px;
    height: 200px;
}
.navright li{
    height: 45px;
    line-height: 45px;
    list-style: none;
}
.navright ul li a {
    display: block;
    height: 45px;
    font-size: 22.4px;
    color: rgba(255, 255, 255, 0.671);
    font-weight: bold;
    font-family:'Helvetica', sans-serif;
    padding: 0 20px;
}

</style>

<script>
var navleft = document.getElementById("left")
var navright = document.getElementById("right")
var navmidright = document.getElementById("midright")
var navmidleft = document.getElementById("midleft")
var show1 = document.getElementById("show1")
var show2 = document.getElementById("show2")
var show3 = document.getElementById("show3")
var show4 = document.getElementById("show4")

navleft.onmouseover = function (){
   navleft.style.backgroundImage = "url('webpages/login/img/b1.png')"
   show1.style.display = "block"
}
navleft.onmouseout = function (){

   navleft.style.backgroundImage = "url('')"
   show1.style.display = "none"
}

navright.onmouseover = function (){

   navright.style.backgroundImage = "url('webpages/login/img/b4.png')"
   show4.style.display = "block"
}
navright.onmouseout = function (){
   navright.style.backgroundImage = "url('')"
   show4.style.display = "none"
}
navmidright.onmouseover = function (){

   navmidright.style.backgroundImage = "url('webpages/login/img/b3.png')"
   show3.style.display = "block"
}
navmidright.onmouseout = function (){
   navmidright.style.backgroundImage = "url('')"
   show3.style.display = "none"
}
navmidleft.onmouseover = function (){

   navmidleft.style.backgroundImage = "url('webpages/login/img/b2.png')"
   show2.style.display = "block"
}
navmidleft.onmouseout = function (){
   navmidleft.style.backgroundImage = "url('')"
   show2.style.display = "none"
}
</script>