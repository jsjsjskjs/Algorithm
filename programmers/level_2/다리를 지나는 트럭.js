function solution(bridge_length, weight, truck_weights) {
  // 다리의 길이만큼 큐를 만든다
  // 다리에 올라와 있는 무게를 실시간으로 체크한다 (트럭이 다리를 전부 건너기 전까진 0이 될 수 없다)
  // 가장 먼저 다리에서 맨앞에 있는 요소를 없앤다
  // 트럭 리스트에서 트럭을 빼서 다리를 건널 수 있는지 체크한다
  // 건널 수 있다면 트럭을 빼서 큐에 넣는다
  // 건널 수 없다면 트럭을 다시 트럭 리스트에 넣는다
  let queue = new Array(bridge_length).fill(0)
  let maxWeight = 0
  let count = 0
  
  // 1초인 경우를 미리 만든다
  let pickedTruck = truck_weights.shift()
  maxWeight += pickedTruck
  queue.shift()
  queue.push(pickedTruck)
  count++
  
  while(maxWeight > 0) {
      maxWeight -= queue.shift()
      pickedTruck = truck_weights.shift()
      if(maxWeight + pickedTruck <= weight) {
          queue.push(pickedTruck)
          maxWeight += pickedTruck
      } else {
          queue.push(0)
          truck_weights.unshift(pickedTruck)
      }
      count++
  }
  return count
}