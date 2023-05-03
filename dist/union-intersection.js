"use strict";
var Level;
(function (Level) {
    Level["Junior"] = "Junior";
    Level["mid"] = "Mid";
    Level["senior"] = "Senior";
})(Level || (Level = {}));
// union type
const newDeveloper = {
    name: "Moznu mia",
    experience: 12,
    expertise: "js"
};
// intersection
const developer = {
    name: "khaled",
    experience: 15,
    expertise: "React",
    leadershipExperience: true,
    // level:Level.Junior
    level: "Junior"
};
