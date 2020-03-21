$('login').submit(function(ev){
ev.preventDefault();
console.log(ev);
$.fn.api.settings.api = {
  login : '/?do=auth',
  method : 'POST',
  data: {
      user: $('username').val(),
      email: $('email').val(),
      pass: $('password').val()
    }
};
});

$('form .submit.button')
  .api({
    url: 'https://Jawabkuy.med.com/api/auth',
    serializeForm: true,
    data: {
      username: $('username').val(),
      email: $('email').val(),
      password: $('password').val()
    },
    beforeSend: function(settings) {
      // open console to inspect object
      console.log(settings);
      return settings;
    }
  })
;