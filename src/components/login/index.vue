<template>
    <video autoplay loop muted="none">
        <source src="../login/video/background.mp4" type="video/mp4">
    </video>
    <div class="left" @click="jumptologin" @mouseenter="(e)=>enter(e,'b1')" @mouseleave="leave">
        <div class="show1" >
            <a href=""><h1>Sign in</h1></a>
        </div>
    </div>
    <div class="midleft" @mouseenter="(e)=>enter(e,'b2')" @mouseleave="leave">
        <div class="show2" >
            <a href="../login/login.vue"><h1>Sign up</h1></a>
        </div>
    </div>
    <div class="midright"  @mouseenter="(e)=>enter(e,'b3')" @mouseleave="leave">
        <div class="show3" >
            <a href="#"><h1>Feedback</h1></a>
        </div>
    </div>
    <div class="right" @mouseenter="(e)=>enter(e,'b4')" @mouseleave="leave">
        <div class="show4">
            <a href="#"><h1>Manual</h1></a>
        </div>
    </div>
</template>
<script setup>

import router from "@/router/index.js"
const enter = (e,name)=>{
  e.target.style.backgroundImage = 'url(' + require('../login/img/'+name+'.png') + ')'
  e.target.childNodes[0].style.display = 'block'
}
const leave = (e)=>{
  e.target.style.backgroundImage = 'url("")'
  e.target.childNodes[0].style.display = 'none'
}
function jumptologin(){
    router.push('/login')
}
    





</script>
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

