function search_webdev() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('web');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
function linearSearch(value, list) {
    let found = false;
    let position = -1;
    let index = 0;
 
    while(!found && index < list.length) {
        if(list[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
}

let numbers = [1, 4, 1, 2, 7, 5, 2];
let count = [];
let output =[];
let i = 0;
let max = Math.max(...numbers);

// initialize counter
for (i = 0; i <= max; i++) {
  count[i] = 0;
}

// initialize output array
for (i = 0; i < numbers.length; i++) {
  output[i] = 0;
}

for (i = 0; i < numbers.length; i++) {
  count[numbers[i]]++;
}

for (i = 1; i < count.length; i++) {
  count[i] += count[i-1];
}

for (i = numbers.length - 1; i >= 0; i--) { 
  output[--count[numbers[i]]] = numbers[i];
}

// output sorted array
for (i = 0; i < output.length; i++) {
  console.log(output[i]);
}