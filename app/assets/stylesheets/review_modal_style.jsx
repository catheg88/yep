var style = {

  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    color           : 'white',
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    padding         : 0,
    "zindex"        : 10
  },
  content : {
    position        : 'absolute',
    top             : '50%',
    left            : '50%',
    transform       : 'translate(-50%, -50%)',


    height          : '350px',
    width           : '400px',
    border          : '1px solid #ccc',
    display         : 'flex',
    flexdirection   : 'column',
    alignitems      : 'center',
    justifycontent  : 'center',
    padding         : 0,
    "zindex"        : 10
  }

};

module.exports = style;
