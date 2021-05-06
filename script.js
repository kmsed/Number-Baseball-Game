let numbers = []
for (let n = 0; n <= 9; n += 1) {
    numbers.push(n)
}
let answer = []
for (let n = 0; n <= 3; n +=1) { //위에 n을 사용했어도 {}안에서만 사용되기 때문에 변수명을 n으로 주는것이 가능하다.
    const index = Math.floor(Math.random() * (10 - n)) //랜덤하게 숫자 하나를 뽑아
    answer.push(numbers[index]) //숫자를 확인하고 당첨통에 넣는다고 생각
    numbers.splice(index, 1) //뽑은 숫자는 제거
}
console.log(answer)
// 랜덤한 숫자 뽑기
let count = 0 // 값을 바꿔나갈거니까 let사용
const aaa = (number) => {
    if (aaa && number.length === 4) {   // 인풋값이 존재한다 and 4자리인가 
        if(answer.join('') === number) { // 배열을 문자열로 변경해서 같은지 비교
            console.log('HR!!'); // 같으면 홈런
        } else {
            console.log('실패');
            let strike = 0;
            let ball = 0;
            for (const [aIndex, aNumber] of answer.entries()) { //index는 정답의 각 자리
                for (const [bIndex, aString] of number.split('').entries()) { 
                    if (aNumber === Number(aString)) { // 값이 같으면(값 비교) , 숫자형과 문자열을 비교하기 위해 숫자형으로 변경
                        if (aIndex === bIndex) {  // 자리까지 같은지 비교 
                            strike += 1 //자리까지 같으면
                        } else {
                            ball += 1 // 값만 같으면
                        }
                    }
                }
            }
            console.log(`${number}: ${strike} strike ${ball} ball`) //비교 한 후 결과 출력, 변수와 문자열 합치기 
            if (count > 8) {
                console.log(`Game Over 정답: ${answer.join('')}`) // answer가 배열이니까 문자열로 변경한거 넣어
            } else {
                count += 1
                console.log(`도전 횟수: ${count}`)
                console.log(document.createElement('br')); // 줄바꿈
            }
        }
    }
};
export default aaa;