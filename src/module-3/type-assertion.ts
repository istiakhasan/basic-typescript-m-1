let emni: any;
emni = "nest level development";
(emni as string).length;
<string>emni

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000
        return `The converted result is : ${value}`
    }
    if (typeof param === "number") {
        const value = param * 1000
        return value
    }


}


const resultToBeNumber =<number> kgToGram(1000)
// const resultToBeNumber = kgToGram(1000) as number
const resultToBeString = <string> kgToGram("1000")
// const resultToBeString = kgToGram("1000") as string
console.log(resultToBeNumber, resultToBeString);

type CustomErrorType = {
    message: string
}
try {

} catch (err) {
    console.log((err as CustomErrorType).message);
}