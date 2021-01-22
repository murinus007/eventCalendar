 let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
 let times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

//////////////////////////////////////////////////////EVENT PAGE//////////////////////////////


let events = [];

function create() {
    let event = {     
        name: document.getElementById("eventInput").value,
        participant: document.getElementById("namesEvent").value,    
        day: document.getElementById("dayEvent").value,
        time: document.getElementById("timeEvent").value
      };
      events.push(event);
      modal.style.display = "none";
      setdata();
}

function openWindow() {
    modal.style.display = "block";
}

let modal = document.getElementById("createEventModal");
let table = document.getElementById("table1");

function setdata() {
    
    events.forEach(setCell);
   
}

function setCell(item, index) {

    table.rows[times.indexOf(item.time) + 1].cells[days.indexOf(item.day) + 1].innerHTML = item.name;
    
}





