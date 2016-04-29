var style = {

  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    "zindex"        : 10
  },
  content : {
    position        : 'fixed',
    top             : '200px',
    left            : '200px',
    right           : '200px',
    bottom          : '200px',
    border          : '1px solid #ccc',
    padding         : '20px',
    display         : 'flex',
    flexdirection   : 'column',
    alignitems      : 'center',
    justifycontent  : 'center',
    "zindex"        : 10
  }

};

module.exports = style
