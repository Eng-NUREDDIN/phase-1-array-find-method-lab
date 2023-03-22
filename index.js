// code your solution here
function superbowlWin(record){
   const result=record.find(isWin);
  return result==undefined? undefined:result.year
}
function isWin(element, index, array) {
    if (element["result"] === "W") {
      return element["year"];
    } else {
      return undefined;
    }
  }