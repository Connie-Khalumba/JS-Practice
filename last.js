function toggleVisibility() {
    const myDiv = document.getElementById('myDiv');

    if (myDiv.style.display === 'none') {
        // If the element is hidden, show it
        myDiv.style.display = 'block';
        console.log('show it');
        
    }
    else  {
        // If the element is visible, hide it
        myDiv.style.display = 'none';
        console.log('hide it');
        
    }
}
