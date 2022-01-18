function solution(brown, yellow) {
    // brown과 yellow의 합은 결국 리턴의 넓이와 같은데
    // yellow를 기준으로 나눠지는 수에 따라서 brown의 갯수를 유추할 수 있다
    let target
    for(let n=1; n<=yellow; n++) {
        if(yellow % n === 0 && brown === ((yellow / n+2) * 2 + n * 2)) {
            target = n
            break
        }
    }
    let arr = [yellow / target + 2, target + 2]
    return arr.sort((a, b) => b - a)
}