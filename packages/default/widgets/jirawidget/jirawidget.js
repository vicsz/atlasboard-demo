widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

    if (data.issueCount) {
      $('.content', el).text(data.issueCount);
    }
    
  }
};