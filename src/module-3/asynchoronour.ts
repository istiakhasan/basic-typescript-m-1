//mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'data is fetched'
        if (data) {
            resolve(data)
        } else {
            reject("failed to fetched data ")
        }
    })
}
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true
        if (data) {
            resolve(data)
        } else {
            reject("failed to fetched data ")
        }
    })
}


// type DataType={
//     data:string
// }
interface DataType {
    data: string
}
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "object data" }
        if (data) {
            resolve(data)
        } else {
            reject("failed to fetched data ")
        }
    })
}


const getPromiseData = async (): Promise<void> => {
    const data = await makePromise()
    console.log(data);
}
const getPromiseDataBoolean = async (): Promise<void> => {
    const data = await makePromiseBoolean()
    console.log(data);
}
const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject()
    // console.log(result);
    return data
    // return result
}


getPromiseData()
getPromiseDataBoolean()
getPromiseDataObject()
// ====================================//
// ====================================//
// ==============API FETCH=============//
// ====================================//
// ====================================//


interface IToDo {

    userId: number,
    id: number,
    title: string
    body: string

}

const getTodo = async ():Promise<IToDo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return await response.json()
}

const loadToDo = async ():Promise<void> => {
    const a = await getTodo()
    console.log(a);
}

loadToDo()