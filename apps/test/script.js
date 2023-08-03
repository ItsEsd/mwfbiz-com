document.getElementById("downloadSheetButton").addEventListener("click", downloadSheet);

function downloadSheet() {
  // Generate sample data
  var data = [
    ["Name", "Age", "Country"],
    ["John Doe", 30, "USA"],
    ["Jane Smith", 25, "Canada"],
    ["Bob Johnson", 40, "UK"]
  ];

  // Create a new workbook
  var workbook = XLSX.utils.book_new();

  // Add a worksheet
  var worksheet = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Convert the workbook to a binary Excel file
  var excelFile = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Create a Blob with the Excel file content
  var blob = new Blob([excelFile], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

  // Create a temporary anchor element
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "example.xlsx"; // Set the file name

  // Trigger the download
  downloadLink.click();
}
