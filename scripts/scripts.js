const LightSwitch = document.querySelector('#lightswitch');
const container = document.querySelector('.container');

  let mode = 'dark'
  LightSwitch.addEventListener('click', function() {
    if (mode === 'dark') {
  mode = 'light';
    container.setAttribute('class', 'light');
  }
    else {
  mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

