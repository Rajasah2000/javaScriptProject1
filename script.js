async function getUser(){
    var addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    const response =await fetch('https://randomuser.me/api/');
    const data = await response.json();
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
    const wealth = Math.floor((Math.random()*1000000)+1);
    var tableBody = document.getElementById('bodySection')
    var row = tableBody.insertRow(0) 
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    cell1.innerHTML=data.results[0].name.first+' '+data.results[0].name.last;
    cell2.innerHTML= wealth;
}
 
const  doubleMoney = () => {
    var addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    var allTd = document.querySelectorAll('td')
    console.log(allTd);
    var double=[],j=0;
    for(i=0;i<allTd.length;i++)
    {
        if(i%2!=0){
            double.push(parseInt(allTd[i].innerHTML)*2);
            allTd[i].innerHTML = double[j];
            j++;
        }
    }
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
}

const showMillionaries = () => {
    var addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    var array=[];
    var allTd = document.querySelectorAll('td')
    for(i=0;i<=allTd.length;i++){
        if(i%2!=0){
           if(allTd[i].innerHTML >= 1000000){
            array.push(allTd[i].innerHTML);
                allTd[i].style.backgroundColor="green";
                allTd[i].style.color="white";      
           }
        }
    }
    if (array.length ==0) {
        alert('No Millionaries person in the table')
    }
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
}

const sortByReachest = () => {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
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
    var addUserButton = document.querySelectorAll('button')
    addUserButton.forEach((number) => {
        number.disabled=true;
    })
    var allTd = document.querySelectorAll('td');
    var sum=0;
    for(i=0;i<=allTd.length;i++){
        if(i%2!=0){
           sum =sum+parseInt( allTd[i].innerHTML);
        }
    }
    document.getElementById('totalWealth').innerHTML = 'Total Wealth = '+ sum;
    addUserButton.forEach((number) => {
        number.disabled=false;
    })
}