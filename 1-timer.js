import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const o=document.querySelector("[data-start]"),r=document.getElementById("datetime-picker"),y=document.querySelector("[data-days]"),D=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let a=null,u=null;flatpickr(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(alert("Please choose a date in the future"),o.disabled=!0):(a=t,o.disabled=!1)}});o.addEventListener("click",()=>{a&&(o.disabled=!0,r.disabled=!0,u=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(u),l(0),r.disabled=!1;return}l(t)},1e3))});function l(e){const{days:t,hours:s,minutes:c,seconds:d}=p(e);y.textContent=n(t),D.textContent=n(s),S.textContent=n(c),b.textContent=n(d)}function p(e){const i=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:m,minutes:f,seconds:h}}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map