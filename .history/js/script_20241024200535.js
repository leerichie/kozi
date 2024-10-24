const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
});
const fileInput = document.querySelector('.file-input');
const fileDropArea = document.getElementById('file-drop-area');
const fileMessage = document.querySelector('.file-message');

// Open file dialog when clicking on the drop area
fileDropArea.addEventListener('click', () => {
  fileInput.click();
});

// Highlight the drop area when dragging files over it
fileDropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileDropArea.classList.add('dragging');
  fileMessage.textContent = "Drop your file here";
});

// Remove highlight when dragging leaves the drop area
fileDropArea.addEventListener('dragleave', () => {
  fileDropArea.classList.remove('dragging');
  fileMessage.textContent = "Drag & Drop your file here or click to upload";
});

// Handle file drop
fileDropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  fileDropArea.classList.remove('dragging');
  const files = e.dataTransfer.files;
  if (files.length) {
    fileInput.files = files; // Update the file input with dropped files
    fileMessage.textContent = `File selected: ${files[0].name}`;
  }
});

// Handle file selection via dialog
fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    fileMessage.textContent = `File selected: ${fileInput.files[0].name}`;
  }
});
