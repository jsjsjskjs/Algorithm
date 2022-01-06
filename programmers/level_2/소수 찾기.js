function solution(numbers) {
  let isPrime = (num) => {
    if (num === 0 || num === 1) return false
    else if (num === 2) return true

    for (let n = 2; n <= Math.floor(Math.sqrt(num)); n++) {
      if (num % n === 0) return false
    }
    return true
  }

  let bucket = []
  let length = numbers.length
  let memo = new Array(length).fill(0)
  function DFS(num, sum) {
    if (num === length) {
      if (isPrime(Number(sum)) && bucket.indexOf(Number(sum)) === -1) {
        bucket.push(Number(sum))
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (memo[i] === 0) {
          memo[i] = 1
          DFS(num + 1, sum + numbers[i])
          memo[i] = 0
        } else DFS(num + 1, sum)
      }
    }
  }
  DFS(0, '')
  return bucket.length
}
