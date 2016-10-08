

$(document).bind("keyup", function (e) {
    var code = e.keyCode || e.which;
    if(code == 13) { //Enter keycode
   //Do something
     var focused = document.activeElement;
    focused.value = focused.value + 'mnemonic: '; 
    document.execCommand('paste');    
 }
});


