/**
 * Created by Administrator on 2018/4/11.
 */
import  css from "./CSS/main.css";
import sass from './CSS/style.scss';
import info from '../info.json'
// import $ from 'jquery'
var a=0;
var str="hello";
var oH1=document.getElementsByTagName("h1");
oH1.innerHTML="hello world";
let bbb="fellow20";
let obj={
        test:()=>{
            console.log("11")
        }
}
console.log(bbb+"hello");
$(".abc").html("hahaha");
$(".abc").html(`姓名`${info.name})