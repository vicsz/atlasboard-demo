widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

  	this.log('Widget data updated!!');


    //The parameters our job passed through are in the data object
    //el is our widget element, so our actions should all be relative to that
    if (data.title) {
      $('h2', el).text(data.title);
    }

    $('.content', el).html(data.text);
  }
};