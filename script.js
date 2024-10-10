const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secDeg = ((seconds/60)*360) + 90;
    const minDeg = ((minutes/60)*360) + 90;
    const hourDeg = ((hours/12)*360) + 90;
    if(secDeg == 90)
    {
        secHand.style.transition = 'none';
    }else{
        secHand.style.transition = 'all 0.5s;'
    }
    if(minDeg == 90)
    {
        minHand.style.transition = 'none';
    }else{
        minHand.style.transition = 'all 0.5s;'
    }
    if(hourDeg == 90)
    {
        hourHand.style.transition = 'all 0.5s;'
    }else{
        hourHand.style.transition = 'all 0.5s;'
    }
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setDate,1000);