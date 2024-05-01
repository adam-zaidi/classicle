var request = new XMLHttpRequest();  
request.open("GET", 'classicle_data.csv', false);   
request.send(null);  

var csv_data = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
  csv_data.push(jsonObject[i].split(','));
}

let order = [4,0,5,2,3,1]

const start_date = new Date("2024", "3", "30");
const date = new Date();
let classicle_day = Math.round((date - start_date) / (1000 * 60 * 60 * 24))%order.length;
console.log(classicle_day);

let day = classicle_day;
let pieces = [];
for (var i = 1; i < csv_data.length; i++) {
  pieces.push(csv_data[i][0]);
}

let correct_data = csv_data[day];
let correct_name = csv_data[day][0];
let link = csv_data[day][1];


for (var i = 4; i < 10; i++) {
  correct_data[i] = correct_data[i].split(' ');
  for (var j = 0; j < correct_data[i].length; j++) {
    correct_data[i][j] = correct_data[i][j].split(':');
  }
}