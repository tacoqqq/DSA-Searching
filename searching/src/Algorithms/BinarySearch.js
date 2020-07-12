
function binarySearch(value,dataArr,start,end,steps){
    let begin = start === undefined ? 0 : start
    let final = end === undefined ? dataArr.length : end
    let step = steps === undefined ? 0 : steps
    if (start > end){
        return `This method realizes this is not in the dataset after ${steps} step(s).`
    }

    let index = Math.floor((begin + final) / 2)
    let item = dataArr[index]

    if (Number(value) === item){
        step++
        return `This method realizes ${value} is in the dataset after ${steps} step(s).`
    } else if (Number(value) < item){
        step++
        console.log('value is smaller than item')
        console.log(steps)
        return binarySearch(value,dataArr,begin,index-1,step)
    } else{
        console.log('value is larger than item')
        step++
        console.log(steps)
        return binarySearch(value,dataArr,index+1,final,step)
    }
}

export default binarySearch