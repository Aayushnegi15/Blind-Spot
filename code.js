onEvent("button_up", "click", function( ) {
  setPosition("button_ball", getXPosition("button_ball"), getYPosition("button_ball")-10);
});
onEvent("button_Down", "click", function( ) {
  setPosition("button_ball", getXPosition("button_ball"), getYPosition("button_ball") +10);
});
onEvent("button_left", "click", function( ) {
  setPosition("button_ball", getXPosition("button_ball")-10, getYPosition("button_ball"));
});
onEvent("button_Right", "click", function( ) {
  setPosition("button_ball",getXPosition("button_ball") +10, getYPosition("button_ball"));
});
var x = 257;
var y = 46;
timedLoop(100, function() {
  if (getXPosition("button_ball")<150) {
    setText("label1","Too Left")
  } else if (getXPosition("button_ball")>200) {
    setText("label1", "Close");
  }
  if (getYPosition("button_ball") > 142) {
    setText("label2", "Too Far Below");
  } else if (getYPosition("button_ball")<100) {
    setText("label2", "Close");
  }
  if (getXPosition("button_ball")>x&&getYPosition("button_ball")<y) {
  setText("label1", "Thats the Blind Spot")
  setText("label2", "Thats the Blind Spot")
}
});
