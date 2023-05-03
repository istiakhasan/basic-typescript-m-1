"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//mocking
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject("failed to fetched data ");
        }
    });
};
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject("failed to fetched data ");
        }
    });
};
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "object data" };
        if (data) {
            resolve(data);
        }
        else {
            reject("failed to fetched data ");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    console.log(data);
});
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    console.log(data);
});
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    // console.log(result);
    return data;
    // return result
});
getPromiseData();
getPromiseDataBoolean();
getPromiseDataObject();
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
    return yield response.json();
});
const loadToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const a = yield getTodo();
    console.log(a);
});
loadToDo();
