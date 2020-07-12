function arraySearch(value,dataArr){
    let steps = 0
    for (let i = 0 ; i < dataArr.length ; i++){
        steps++
        if (dataArr[i] === Number(value)){
            return `This method realizes ${value} is in the dataset after ${steps} step(s).`
        }         
    }
    return `This method realizes this is not in the dataset after ${steps} step(s).`
}

export default arraySearch