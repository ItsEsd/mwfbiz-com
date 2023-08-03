// Function to add a custom checkbox to the list
function addCustomCheckbox() {
    const customItemNameInput = document.getElementById('customItemNameInput');
    const itemName = customItemNameInput.value.trim();
  
    // Check if the input field is not empty
    if (itemName !== '') {
      const checkboxContainer = document.getElementById('custmnm');
  
      const checkboxLabel = document.createElement('div');
      checkboxLabel.className = 'checkbox-label form-check';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = itemName;
      checkbox.className = 'checkbox-input form-check-input';
  
      const checkboxText = document.createTextNode(itemName);
  
      checkboxLabel.appendChild(checkbox);
      checkboxLabel.appendChild(checkboxText);
      checkboxContainer.appendChild(checkboxLabel);
  
      // Clear the input field
      customItemNameInput.value = '';
    }
  }
  
        // Global variable to store selected items
    let selectedItems = [];
  
  // Function to handle item selection form submission
  function handleItemSelection(event) {
    event.preventDefault();
  
    // Clear the selected items array
    selectedItems = [];
  
    // Get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    // Check which checkboxes are selected
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedItems.push(checkbox.value);
      }
    });
  
    
    // Enable or disable the Next button based on the selected item count
    const nextButton = document.getElementById('nextButton');
    if(selectedItems.length > 0){
    
    document.getElementById('itemSelection').style.display = 'none';
    document.getElementById('tableCreation').style.display = 'block';
    var elem = document.createElement('input');
    elem.value = selectedItems.length;
    elem.id="itemnum";
    elem.style.display='none';
    document.body.appendChild(elem);
    }
  
    // Create collapsible divs and tables for selected items
    createCollapsibleDivs();
  
  
  }
  
  // Function to create collapsible divs and tables for selected items
  function createCollapsibleDivs() {
    const collapsibleContainer = document.getElementById('collapsibleContainer');
  
    // Create collapsible div for each selected item
    selectedItems.forEach(function (item, index) {
      const collapsibleDiv = document.createElement('div');
      collapsibleDiv.className = 'card mt-3 collapsible-item';
      collapsibleContainer.appendChild(collapsibleDiv);
  
      const collapsibleHeader = document.createElement('div');
      collapsibleHeader.className = 'collapsible-header card-header';
      collapsibleHeader.setAttribute('id', 'heading-' + index);
      collapsibleDiv.appendChild(collapsibleHeader);
  
      const collapsibleBtn = document.createElement('button');
      collapsibleBtn.className = 'btn btn-link collapsed';
      collapsibleBtn.setAttribute('type', 'button');
      collapsibleBtn.setAttribute('data-toggle', 'collapse');
      collapsibleBtn.setAttribute('data-target', '#collapse-' + index);
      collapsibleBtn.setAttribute('aria-expanded', 'false');
      collapsibleBtn.setAttribute('aria-controls', 'collapse-' + index);
      collapsibleBtn.innerHTML = '<i class="fas fa-plus"></i>' + item;
      collapsibleHeader.appendChild(collapsibleBtn);
  
      const collapsibleContent = document.createElement('div');
      collapsibleContent.className = 'collapse';
      collapsibleContent.setAttribute('id', 'collapse-' + index);
      collapsibleContent.setAttribute('aria-labelledby', 'heading-' + index);
      collapsibleDiv.appendChild(collapsibleContent);
  
      const table = document.createElement('table');
      table.className = 'table table-bordered mt-3';
  
      const thead = document.createElement('thead');
      const tr = document.createElement('tr');
  
      const serialTh = document.createElement('th');
      serialTh.textContent = 'Serial';
      tr.appendChild(serialTh);
  
      const nameTh = document.createElement('th');
      nameTh.textContent = 'Name';
      tr.appendChild(nameTh);
  
      const quantityTh = document.createElement('th');
      quantityTh.textContent = 'Qty.';
      tr.appendChild(quantityTh);
  
      const purchaseDateTh = document.createElement('th');
      purchaseDateTh.textContent = 'Purchase Date';
      tr.appendChild(purchaseDateTh);
  
      const paymentTh = document.createElement('th');
      paymentTh.textContent = 'Payment';
      tr.appendChild(paymentTh);
  
      const rowaction = document.createElement('th');
      rowaction.textContent = 'Action';
      tr.appendChild(rowaction);

      thead.appendChild(tr);
      table.appendChild(thead);
  
      const tbody = document.createElement('tbody');
      table.appendChild(tbody);
  
      collapsibleContent.appendChild(table);
  
      // Add event listener to "Add Row" button
      const addRowBtn = document.createElement('button');
      addRowBtn.className = 'btn btn-primary mt-3 w-100 addrw';
      addRowBtn.textContent = 'Add Row';
      collapsibleContent.appendChild(addRowBtn);
      addRowBtn.addEventListener('click', addRow.bind(null, tbody));
  
      // Hide the collapsible content by default
      collapsibleContent.style.display = 'none';
  
      // Add event listener to toggle the collapsible content
      collapsibleBtn.addEventListener('click', function () {
        const expanded = collapsibleContent.style.display === 'block';
  
        if (expanded) {
          collapsibleContent.style.display = 'none';
          collapsibleBtn.setAttribute('aria-expanded', 'false');
          collapsibleBtn.innerHTML = '<i class="fas fa-plus"></i> ' + item;
        } else {
          collapsibleContent.style.display = 'block';
          collapsibleBtn.setAttribute('aria-expanded', 'true');
          collapsibleBtn.innerHTML = '<i class="fas fa-minus"></i> ' + item;
        }
      });
  
      // Add a line break after the collapsible div
      collapsibleContainer.appendChild(document.createElement('hr'));
    });
  }
  
  // Function to add a new row to the table
  function addRow(tbody) {
     var checkinput = document.getElementsByClassName('form-control');
     
    var list = checkinput.length;
    var flag = 0;
   for(var k = 0;k<list;k++){
      if(checkinput[k].value==""){
        flag=1;
        break;
      }
    }
    console.log(checkinput,flag);
     if(flag==0){
      var elements =document.getElementsByClassName('collapsible-item');
      Array.from(elements).forEach(function(element) {
      element.addEventListener('click', function() {
      const position = Array.from(elements).indexOf(element);
  
      // Output the position
      console.log('Clicked position:', position);
  
      var elem2 = document.getElementById('itmpos');
      elem2.value = position;
  
    });
  });
    const rowCount = tbody.rows.length;
    const newRow = tbody.insertRow(rowCount);
  
    const serialCell = newRow.insertCell(0);
    serialCell.textContent = rowCount + 1;
  
    const nameCell = newRow.insertCell(1);
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'form-control';
    nameCell.appendChild(nameInput);
  
    const quantityCell = newRow.insertCell(2);
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.className = 'form-control';
    quantityCell.appendChild(quantityInput);
  
    const purchaseDateCell = newRow.insertCell(3);
    const purchaseDateInput = document.createElement('input');
    purchaseDateInput.type = 'date';
    purchaseDateInput.className = 'form-control';
    purchaseDateCell.appendChild(purchaseDateInput);
  
    const paymentCell = newRow.insertCell(4);
    const paymentInput = document.createElement('input');
    paymentInput.type = 'text';
    paymentInput.className = 'form-control';
    paymentCell.appendChild(paymentInput);
  

    const deleteRow = newRow.insertCell(5);
    const delRowCall = document.createElement('div');
    delRowCall.innerHTML ="<button onclick='var row = this.parentNode.parentNode.parentNode;row.parentNode.removeChild(row);' class='btn btn-danger'>Delete</button>";
    deleteRow.appendChild(delRowCall);

    // Store the input values in an object
    const rowData = {
      name: '',
      quantity: '',
      purchaseDate: '',
      payment: ''
    };
  
    // Add event listeners to input fields to update the rowData object
    nameInput.addEventListener('input', function () {
      rowData.name = nameInput.value;
    });
  
    quantityInput.addEventListener('input', function () {
      rowData.quantity = quantityInput.value;
    });
  
    purchaseDateInput.addEventListener('input', function () {
      rowData.purchaseDate = purchaseDateInput.value;
    });
  
    paymentInput.addEventListener('input', function () {
      rowData.payment = paymentInput.value;
    });
   
    // Add a reference to the rowData object in the table row
    newRow.rowData = rowData;

    // Generate the complete table
    var position = document.getElementById('itmpos').value;
    console.log(position);
     const table = document.createElement('table');
    table.className = "table-"+position;
  
    const headerRow = table.insertRow(0);
    const headers = ['Serial', 'Name', 'Quantity', 'Purchase Date', 'Payment'];
    for (let i = 0; i < headers.length; i++) {
      const headerCell = headerRow.insertCell(i);
      headerCell.textContent = headers[i];
    }
  
    for (let i = 0; i < tbody.rows.length; i++) {
      const row = tbody.rows[i];
      const data = row.rowData;
  console.log(data);
      const tableRow = table.insertRow(i + 1);
      const serialCell = tableRow.insertCell(0);
      serialCell.textContent = i + 1;
  
      const nameCell = tableRow.insertCell(1);
      nameCell.textContent = data.name;
  
      const quantityCell = tableRow.insertCell(2);
      quantityCell.textContent = data.quantity;
  
      const purchaseDateCell = tableRow.insertCell(3);
      purchaseDateCell.textContent = data.purchaseDate;
  
      const paymentCell = tableRow.insertCell(4);
      paymentCell.textContent = data.payment;
    }
  
    console.log(table);
    
    $('body').append(table);
    table.classList.add('invntry');

     }
  }
  
  
  // Attach the event listener to the item selection form submit event
  document.getElementById('itemForm').addEventListener('submit', handleItemSelection);
  
  function exportToExcel() {   
    const workbook = XLSX.utils.book_new();
  
    const collapsibleDivs = document.querySelectorAll('.collapsible-item');
    collapsibleDivs.forEach(function (collapsibleDiv, index) {
      const itemName = collapsibleDiv.querySelector('.collapsible-header').textContent;
  
      const table = collapsibleDiv.querySelector('table');
      const tableData = [];
  
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach(function (row) {
        const rowData = [];
        const cells = row.querySelectorAll('td');
        cells.forEach(function (cell) {
          rowData.push(cell.textContent);
        });
        tableData.push(rowData);
      });
  
      // Create a new worksheet for each item
      const worksheet = XLSX.utils.aoa_to_sheet(tableData);
  
      // Add the header row manually
      const header = ['Serial', 'Name', 'Qty.', 'Purchase Date', 'Payment'];
      XLSX.utils.sheet_add_aoa(worksheet, [header]);
  
      // Set the sheet name and add it to the workbook
      const sheetName = itemName.length > 31 ? itemName.substring(0, 31) : itemName;
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    });
  
    // Convert the workbook to Excel file format
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
    // Create a blob from the Excel file data
    const fileName = 'table_data.xlsx';
    const blob = new Blob([excelFile], { type: 'application/octet-stream' });
  
    // Download the file using appropriate methods based on browser support
    if (typeof navigator.msSaveBlob !== 'undefined') {
      // For IE and Edge browsers
      navigator.msSaveBlob(blob, fileName);
    } else {
      // For other browsers
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }
  
  // Attach the event listener to the item selection form submit event
  document.getElementById('itemForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Clear the selected items array
    selectedItems = [];
  
    // Get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    // Check which checkboxes are selected
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedItems.push(checkbox.value);
      }
    });
  
    // Enable or disable the Next button based on the selected item count
    const nextButton = document.getElementById('nextButton');
    if (selectedItems.length > 0) {
      document.getElementById('itemSelection').style.display = 'none';
      document.getElementById('tableCreation').style.display = 'block';
  
    }
  });
  
  function seetable(){
var bktbl = document.getElementsByClassName('invntry');
for(var n=0;n<9;n++){
  
if(bktbl[n] != null){
console.log('exist');
   var ttable= bktbl[n].innerHTML;console.log(ttable);
    $('body').append(ttable);
}
else{
  console.log('not exist');
}
}
}
  