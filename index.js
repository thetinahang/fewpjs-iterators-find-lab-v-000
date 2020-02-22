const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  win = array.find( o => o['result'] === "W");
  return win['year'];
}
