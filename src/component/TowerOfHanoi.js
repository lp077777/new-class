let setUpData = {

}

function setUp(disk, stacks) { 
  for (let i = 1; i <= disk; i++) { 
    setUpData[i] = []
  }
  for (let j = 1; j <= stacks; j++) { 
    setUpData['1'].push(j)
  }
}

function movePiece(from, to) { 
  if (to.lenght === 0) {
    let tmp = from[0]
    to.unshift(tmp)
    from.shif()
  }
  if (from[0] < to[0]) {
    let tmp  = from[0]
    from.shift()
    to.unshift(tmp)
  } else { 
    console.log('not aollowed')
  }
}



let allTrains = [{ id:"1",startlocal: 'a', endlocal: 'b', departTime: "2021-10-10 19:30", restSeat:10 },
                  { id:"2",startlocal: 'b', endlocal: 'a', departTime: "2021-10-10 08:30", restSeat:0 },
  {id:"3", startlocal: 'c', endlocal: 'd', departTime: "2021-10-10 01:30", restSeat: 2 }]
                  
function findTrain(start, end, time, listOfTrain) { 
  let localationMatch = listOfTrain.filter(item => { return item.startlocal === start && item.endlocal === end })
  let timeMatch = localationMatch.filter(item => { compareDate(time, item.departTime) })
  return timeMatch
}

function compareDate(inputDate, TrainTime) {
  let inputTime = new Date(inputDate)
  let trainTime = new Date(TrainTime)
  if (inputTime.getFullYear() === trainTime.getFullYear() &&
    inputTime.getMonth() === trainTime.getMonth() &&
    inputTime.getDate() === trainTime.getDate() &&
    (inputTime.getHours() <= trainTime.getHours() + 1 || inputTime.getHours() >= trainTime.getHours() - 1)
  ) {
    return true
  } else { 
    return false
  }
}
 
function reserve(id, allTrains) { 
  let selectedTrain = allTrains.filter(item => item.id === id)[0]
  if (selectedTrain.restSeat === 0) {
    console.log('no seat for this train now') 
  } else { 
    allTrains = allTrains.map(item => { 
      if (item.id === id) { 
        item.restSeat--
      }
      return item
    })
    console.log('your reserve is success')
  }
  return allTrains
}