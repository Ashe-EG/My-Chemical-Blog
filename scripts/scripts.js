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

const submit = document.querySelector('submit');

  submit.addEventListener('click', function() {
    if ('.UserName' == '') {
              alert('Please Enter Username');
        return false;
    } else if 
      ('.Title' == '') {
              alert ('please Enter Title');
        return false;
    } else if
      ('.Comments'== '') {
              alert ('Please Enter Comments');
        return false;
    }
  });
