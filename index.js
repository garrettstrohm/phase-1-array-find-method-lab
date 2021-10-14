const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]

  function winFinder(object) {
      return object.result === "W";
  }

  function superbowlWin(array) {
      let win = array.find(winFinder)
      if (win) {
          return win.year;
      } else {
         return win;
      }
  }
