const tablebody = document.getElementById("table-body");

let flights = [{
    time: "--:--",
    destination: "------",
    flight: "------",
    gate: "------",
    remark: "------"
},{
    time: "--:--",
    destination: "------",
    flight: "------",
    gate: "------",
    remark: "------"
},{
    time: "--:--",
    destination: "------",
    flight: "------",
    gate: "------",
    remark: "------"
},{
    time: "--:--",
    destination: "------",
    flight: "------",
    gate: "------",
    remark: "------"
},{
    time: "--:--",
    destination: "------",
    flight: "------",
    gate: "------",
    remark: "------"
}]

const time = ['01:15', '01:50', '03:30', '04:10', '07:30', '07:45', '09:05', '13:05', '15:00', '16:25', '17:10', '18:45', '19:20', '22:00', '21:05', '20:30', '23:05']
const destination = ['TOKYO', 'BERLIN', 'AMSTERDAM', 'MOSKOW', 'MILAN', 'PARIS', 'SYDNEY', 'CHICAGO', 'OSLO', 'DUBAI', 'ISTANBUL', 'LISBON', 'FRANKFURT', 'MONTREAL']
const flightt = ['NH 107', 'OA 501', 'HF 803', 'AF 041', 'YU 936', 'UU 504', 'TE 704', 'DU 968', 'AU 087']
const gate = ['A 01', 'A 04', 'B 07', 'B01', 'C 01', 'B 03', 'C 05']
const remark = ['ON TIME', 'ON TIME', 'ON TIME', 'ON TIME', 'CHECK-IN', 'CHECK-IN', 'CHECK-IN', 'DELAYED', 'DELAYED', 'CANCELLED', 'CLOSED']


function populateTable() {
    for (const flight of flights) {

        const row = document.createElement("tr")

        for (flightDetail in flight) {

            const tableCell = document.createElement("td")

            tableCell.innerText = flight[flightDetail]

            row.append(tableCell)

        }

        tablebody.append(row)

    }
}

populateTable()

function upp() {
    for (const flight of flights) {
        flight.time = time[Math.floor(Math.random() * time.length)]
        flight.destination = destination[Math.floor(Math.random() * destination.length)]
        flight.flight = flightt[Math.floor(Math.random() * flightt.length)]
        flight.gate = gate[Math.floor(Math.random() * gate.length)]
        flight.remark = remark[Math.floor(Math.random() * remark.length)]
    }
    tablebody.textContent = ""
    populateTable()
}

setInterval(upp, 1000)