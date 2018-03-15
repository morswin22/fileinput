function createFileinput(finput) {
  let ableToUpload = false;
  let div = finput.parent();
  let form = div.parent();

  if (div.is('div') && form.is('form')) {
    let fbox = $('<div>').addClass('file-box').html('Select files to upload');
    div.prepend(fbox);
  
    finput.on('change', ()=>{
      let files = finput[0].files;
      if (files.length == 0) {
        fbox.html('Select files to upload');
        ableToUpload = false;
      } else if (files.length == 1) {
        fbox.html(`Selected 1 file`);
        ableToUpload = true;
      } else {
        if (files.length <= 20) {
          fbox.html(`Selected ${files.length} files`);
          ableToUpload = true;
        } else {
          fbox.html(`You have selected too many files!<br>(Maximum is 20)`);
          ableToUpload = false;
        }
      }
    });
  
    form.on('submit', e=>{
      if (!ableToUpload) {
        e.preventDefault();
      }
    });
  
    finput.addClass('file-input');
    fbox.css({'width': finput.css('width')});
    fbox.css({'height': finput.css('height')});
    finput.css({'width': fbox.outerWidth()});
    finput.css({'height': fbox.outerHeight()});
    finput.css({'bottom': fbox.outerHeight(true) - parseInt(fbox.css('margin-top').replace('px',''))});
    div.css({'height': div.height() - finput.outerHeight(true)});

    this.input = finput;
    this.output= fbox;
    this.div = div;
    this.form = form;

    return this;

  } else {
    console.error('Fileinput library error: bad DOM structure');
  }
  
}
