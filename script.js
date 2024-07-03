function openTab(event, tabId) {
  // Hide all tab contents
  const tabContents = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
      tabContents[i].classList.remove('active');
  }

  // Remove the active class from all tab buttons
  const tabButtons = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
  }

  // Show the clicked tab content and add the active class to the clicked tab button
  document.getElementById(tabId).style.display = 'block';
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Set the first tab as active by default
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tab-button').click();
});
