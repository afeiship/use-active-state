import{n as e,u as t,r as n,N as r,s as l,R as o,a}from"./vendor.908d599f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=l.div`
  width: 40%;
  margin: 30px auto 0;
  padding: 50px;
  border: 1px solid #ccc;
  .row {
    display: flex;
    margin-bottom: 10px;
    strong {
      display: inline-block;
      width: 120px;
    }
  }

  .result {
    background: #eee;
    padding: 20px;
    border: 1px dashed #f60;
    margin-top: 10px;
  }
`;var c=l=>{const{state:a,sync:c,get:i,$:m}=((l=e,o)=>{const a=t(),s=o||{};return n.exports.useRef(r.build(s,(()=>{l(),a()}))).current})((()=>{console.log("state:",a,i("username"))}));return console.log("state:",a),o.createElement(s,null,o.createElement("form",{autoComplete:"off"},o.createElement("label",{className:"row"},o.createElement("strong",null,"username:"),o.createElement("input",{type:"text",name:"username",onChange:c()})),o.createElement("label",{className:"row"},o.createElement("strong",null,"email:"),o.createElement("input",{type:"text",name:"email",onChange:c()})),o.createElement("label",{className:"row"},o.createElement("strong",null,"password:"),o.createElement("input",{type:"password",name:"password",onChange:c()})),o.createElement("div",{className:"actions"},o.createElement("button",{type:"button"},"Submit"),o.createElement("button",{type:"button",onClick:e=>{m.reset()}},"reset"))),o.createElement("div",{className:"result"},o.createElement("pre",null,o.createElement("code",null,JSON.stringify(a,null,2)))),o.createElement("div",{className:"result"},o.createElement("pre",null,o.createElement("code",null,"isTouched: ",String(m.touched())))))};a.render(o.createElement(o.StrictMode,null,o.createElement(c,null)),document.getElementById("root"));
