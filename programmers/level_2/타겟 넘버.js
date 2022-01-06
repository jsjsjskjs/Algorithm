function solution(numbers, target) {
  let answer = 0
  let length = numbers.length
  function DFS(num, point) {
    if (num === length) {
      if (point === target) {
        answer++
      }
    } else {
      DFS(num + 1, point + numbers[num])
      DFS(num + 1, point - numbers[num])
    }
  }
  DFS(0, 0)
  return answer
}

console.log(solution([1, 1, 1, 1, 1], 3))
