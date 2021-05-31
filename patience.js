const places = [
    "의료시설-A",
    "의료시설-B",
    "종교시설-A",
    "종교시설-B",
    "종교시설-C",
    "식당",
    "카페",
    "노인정",
    "다중운동시설",
    "대중교통"
]

const infectionMAX = 5;

let peopleList = [];

let count = 0;
let startdate = new Date(1606921200000);

function randomDate(start) {
    // 86400000 = one day
    var date = new Date(+start + Math.random() * 86400000);
    var hour = 9 + Math.random() * (20 - 9) | 0;
    date.setHours(hour);
    return date;
}

function People(people) {
    if(people) {
        this.place = places[parseInt((places.length - 1) * Math.random())];
        this.who = people.id;
        this.date = randomDate(startdate);
    }
    else {
        this.place = places[2];
        this.who = "first";
        this.date = startdate;
        this.id = 0;
    }
    this.id = peopleList.length;
    this.infections = [];
    ++count;


    for (let i = 0; i < infectionMAX * Math.random() - 1; i++) {
        if(count > 30 * Math.random()) {
            return;
        }
        let p = new People(this);
        this.date = randomDate(startdate);
        this.infections.push(p);
        peopleList.push(p);
    }
}

function nextPeople(people){
    count = 0;
    this.place = places[parseInt((places.length - 1) * Math.random())];
    this.who = people.id;
    this.id = peopleList.length;
    this.infections = [];
    this.date = people.date;
    ++count;

    for (let i = 0; i < infectionMAX * Math.random() - 1; i++) {
        if(count > 30 * Math.random()) {
            return;
        }
        let p = new People(this);
        let date1 = people.date.getTime();
        date1 += 86400000;
        this.date = date1;
        this.infections.push(p);
        peopleList.push(p);
    }
}

let first = new People();

console.log("first", first);
console.log("list", peopleList);
let next = new nextPeople(peopleList[0]);
console.log("list", peopleList);