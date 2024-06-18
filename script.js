let g;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
setInterval(() => {
  g = new Date();
  date = g.toLocaleDateString(undefined, options);
  time = g.getHours().toString().padStart(2, '0') + ':' + g.getMinutes().toString().padStart(2, '0') + ':' + g.getSeconds().toString().padStart(2, '0');
  document.getElementById('time').innerHTML = time + " <br> on " + date;
}, 1000);