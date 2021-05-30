const places = [
    "약국",
    "종교시설",
    "식당",
    "카페",
    "노인정",
    "식당"
]

const infectionMAX = 3;

let peopleList = [];

let count = 0;
function People(people) {
    this.place = places[parseInt((places.length - 1) * Math.random())];
    this.id = count;
    if(people) {
        this.who = people.id;
    }
    else {
        this.who = "first";
    }
    this.infections = [];
    ++count


    for (let i = 0; i < infectionMAX * Math.random() - 1; i++) {
        if(count > 20) {
            return;
        }
        let p = new People(this)
        this.infections.push(p);
        peopleList.push(p);
    }
}


let first = new People();

console.log("first", first);
console.log("list", peopleList);