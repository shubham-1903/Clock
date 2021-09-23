
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let day=time.getDay();
    am_pm = "AM";
  let hr=document.getElementById("hr");
  let m=document.getElementById("min");
  let s=document.getElementById("sec");
  let d=document.getElementById("day");
  let dt=document.getElementById("date");
  let mt=document.getElementById("month");
  let yr=document.getElementById("year");

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // if (hour > 12) {
    //     hour -= 12;
    //     am_pm = "PM";
    // }
    // if (hour == 0) {
    //     hr = 12;
    //     am_pm = "AM";
    // }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" 
        + min + ":" + sec ;

    // document.getElementById("demo")
    //     .innerHTML = currentTime;
    hr.innerHTML = hour;
    m.innerHTML = min;
    s.innerHTML = sec;
    d.innerHTML= days[day];
    dt.innerHTML=date;
    mt.innerHTML=months[month];
    yr.innerHTML=year;
    // console.log(currentTime)
}

showTime();
// console.log('hi')