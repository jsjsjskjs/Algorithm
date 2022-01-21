function solution(genres, plays) {
  // 장르별로 두 개씩 모아 베스트 앨범을 출시
  // 기준1. 속한 노래가 많이 재생된 장르를 먼저 수록
  // 기준2. 장르 내에서 많이 재생된 노래를 먼저 수록
  // 기준3. 장르 내에서 재생 횟수가 같다면 고유 번호가 낮은 노래를 수록
  // 제한1. 모든 장르는 재생된 횟수가 다르다
  // 제한2. 장르에 속한 곡이 하나라면, 하나의 곡만 선택
  
  // 장르별로 몇번이 재생됐는지 파악
  // 장르마다 어떤 고유번호가 몇번 재생됐는지 파악
  let list = {}
  let answer = []
  
  // list 객체에 가장 먼저 장르별로 분류를 한다
  // 장르안에서는 총 플레이 횟수를 계속 더해가고, 고유번호의 재생된 횟수를 배열형태로 저장한다
  for(let n=0; n<genres.length; n++) {
      if(!list[genres[n]]) {
          list[genres[n]] = [plays[n], [[n, plays[n]]]]
      } else {
          list[genres[n]][0] += plays[n]
          list[genres[n]][1].push([n, plays[n]])
      }
  }
    
  // 장르 및 장르별 총 재생횟수를 뽑아낸 뒤 정렬한다
  let topGenres = []
  for(let [key, value] of Object.entries(list)) {
      topGenres.push([key, value[0]])
  }
  topGenres.sort((a, b) => b[1] - a[1])
  
  // 장르별 가장 많이 재생된 노래 두 개를 뽑는 함수를 만들어주자
  function sortSongs(arr) {
      let sortedArr = arr.sort((a, b) => b[1] - a[1])
      console.log(sortedArr[0][0])
      if(sortedArr.length < 2) return [sortedArr[0][0]] // 속한 곡이 1개인 경우
      else {
          let bucket = []
          for(let n=0; n<2; n++) {
              bucket.push(sortedArr[n][0])
          }
          return bucket
      }
  }
    
  // 가장 많이 재생된 장르가 정렬된 topGenres 배열을 훑으면서 장르별 가장 많이 재생된 노래를 뽑아낸다
  for(let n=0; n<topGenres.length; n++) {
      answer = [...answer, ...sortSongs(list[topGenres[n][0]][1])]
  }
  return answer
}