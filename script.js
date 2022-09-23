async function getUser(){
    const addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    const response =await fetch('https://randomuser.me/api/');
    const data = await response.json();
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
    const wealth = Math.floor((Math.random()*1000000)+1);
    const tableBody = document.getElementById('bodySection');
    let row = tableBody.insertRow(0) 
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerHTML=data.results[0].name.first+' '+data.results[0].name.last;
    cell2.innerHTML= wealth;
}
 
const  doubleMoney = () => {
    const addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    const allTd = document.querySelectorAll('td')
    let double=[],j=0;
    allTd.forEach((num,index) => {
        if(index%2 != 0){
            double.push(parseInt(num.innerHTML)*2)
            num.innerHTML = double[j];
            j++;
        }
    })
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
}

const showMillionaries = () => {
    const addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    let array=[];
    const allTd = document.querySelectorAll('td')
    allTd.forEach((item,index)=>{
        if(index%2 != 0){
            if(item.innerHTML >= 1000000){
                array.push(item.innerHTML);
                item.style.backgroundColor="green";
                item.style.color="white";
            }
        }
    })
    if (array.length ==0) {
        alert('No Millionaries person in the table')
    }
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
}

const sortByReachest = () => {
    const table = document.getElementById("myTable");
    var rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length-1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (parseInt(x.innerHTML)< parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

const TotalWealth = () => {
    const addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    const allTd = document.querySelectorAll('td');
    let sum=0;
    allTd.forEach((item,index)=>{
        if(index%2 != 0){
            sum = sum+parseInt(item.innerHTML);
        }
    })
    document.getElementById('totalWealth').innerHTML = 'Total Wealth = '+ sum;
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
}