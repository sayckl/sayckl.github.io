let nowDate = new Date();
let today = nowDate.getDate();
let currentMonth = nowDate.getMonth();
let currentYear = nowDate.getFullYear();
let temp = new Date(currentYear, currentMonth+1, 0);
let lastDay = temp.getDate();

function displayMonth() {
  let day = new Date(currentYear, currentMonth, 1);
  let t = day.getDay()-1;
  if (t < 0) {
    t = 6;
  }
  let a = 0;
  while(day.getMonth() == currentMonth){
    const tr = document.createElement('tr');
    let i = 0;
    while(i < 7){
      const td = document.createElement('td');
      if (a == 0){
        if (i > t){
          td.innerHTML = '';
        }else{
          td.innerHTML = day.getDate();
          day.setDate(day.getDate() + 1);
        }
      }else{
        td.innerHTML = day.getDate();
        day.setDate(day.getDate() + 1);
      }
      tr.appendChild(td)
      i++;
      if (day.getDate() == lastDay){
        break;
      }
    }
    document.getElementById('t').appendChild(tr);
    a++;
  }
}
