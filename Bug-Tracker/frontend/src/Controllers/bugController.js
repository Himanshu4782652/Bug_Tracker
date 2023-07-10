import bugModel from '../models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id : 9835762938,
        name : "crash on load",
        details : "crashes after 3 sec",
        steps : "Open application and it will be crashed",
        version : "V2.0",
        assigned : "Himanshu Srivastav",
        creator : "hks",
        priority : 1,
        time : "23.38" ,
    }))
    data.push(new bugModel({
        _id : 9835762938,
        name : "won't load",
        details : "crashes after 3 sec",
        steps : "Open application and it will be crashed",
        version : "V2.0",
        assigned : "Himanshu Srivastav",
        creator : "hks",
        priority : 3,
        time : "23.38",
    }))

    let sorted = data.sort((a,b) => {return a.priority - b.priority})
    return sorted;
}