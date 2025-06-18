function insert_Row() {
    //Write your code here
const table = document.getElementById("sampleTable");
const tr = document.createElement("tr");
      const td = document.createElement("td");
      const td1 = document.createElement("td");
      td.textContent = "New Cell1"
      td1.textContent = "New Cell2"
      tr.appendChild(td);
      tr.appendChild(td1);
      table.prepend(tr);
  
}
