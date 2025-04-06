const reportsArr = []

async function getAllReports(){
    return Promise.resolve(reportsArr)
}
async function addReport(report){
    reportsArr.push(report)
    return Promise.resolve(report)
}

export {
    getAllReports,
    addReport
}