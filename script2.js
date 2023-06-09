const dropdownToggles = document.querySelectorAll('.dropdown');

dropdownToggles.forEach(function(dropdownToggle) {
  const dropdownMenu = dropdownToggle.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function(event) {
   

    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
   
  });
});

document.addEventListener('click', function(event) {
  dropdownToggles.forEach(function(dropdownToggle) {
    const dropdownMenu = dropdownToggle.querySelector('.dropdown-menu');

    if (!dropdownToggle.contains(event.target)) {
      dropdownMenu.style.display = 'none';

    
    }
  });
});
