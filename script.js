const dropdownToggles = document.querySelectorAll('.dropdown');

dropdownToggles.forEach(function(dropdownToggle) {
  const dropdownMenu = dropdownToggle.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function(event) {
    dropdownMenu.classList.toggle('show')
  });
});

document.addEventListener('click', function(event) {
  dropdownToggles.forEach(function(dropdownToggle) {
    const dropdownMenu = dropdownToggle.querySelector('.dropdown-menu');

    if (!dropdownToggle.contains(event.target)) {
      dropdownMenu.classList.remove('show') 
    }
  });
});
