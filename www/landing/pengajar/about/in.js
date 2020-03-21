$('#login').submit(function(ev){
ev.preventDefault();
console.log(ev);
$.fn.api.settings.api = {
  login : '/?do=auth',
  method : 'POST',
  data: {
      user: $('#user').val(),
      pass: $('#pass').val()
    }
};
});
