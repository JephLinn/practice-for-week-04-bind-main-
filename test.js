const Employee = require("./employee");

const jw = new Employee("John Wick", "Dog Lover");

const intro = jw.sayName.bind(jw);

global.setTimeout(intro, 2000);

const job = jw.sayOccupation.bind(jw);

global.setTimeout(job, 3000);