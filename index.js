function addingEventListener() {
  // Find the element with the ID "input"
  const input = document.getElementById('input');

  // Create a function to handle the click event
  function clickAlert() {
    alert('I was clicked!');
  }

  // Add a click event listener to the "input" element, and call the clickAlert function
  input.addEventListener('click', clickAlert);
}

addingEventListener(); // Call the function to set up the event listener

