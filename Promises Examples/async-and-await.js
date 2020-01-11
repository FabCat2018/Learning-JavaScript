async function myFetch() {
    try {
        let response = await fetch('coffee.jpg');
        let myBlob = await response.blob();

        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    } catch(e) {
        console.log(e);
    }
}

myFetch();

async function fetchAndDecode(url, type) {
    let response = await fetch(url);
    let content;

    if (type == 'blob') {
        content = await response.blob();
    } else if (type == 'text') {
        content = await response.text();
    }

    return content;
}

async function displayContent() {
    let coffee = fetchAndDecode('coffee.jpg', 'blob');
    let tea = fetchAndDecode('tea.jpg', 'blob');
    let description = fetchAndDecode('description.txt', 'text');

    let values = await Promise.all([coffee, tea, description]);

    let objectURL1 = URL.createObjectURL(values[0]);
    let objectURL2 = URL.createObjectURL(values[1]);
    let descText = values[2];

    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    image1.src = objectURL1;
    image2.src = objectURL2;
    document.body.appendChild(image1);
    document.body.appendChild(image2);

    let para = document.createElement('p');
    para.textContent = descText;
    document.body.appendChild(para);
}

displayContent()
.catch((e) =>
    console.log(e)
);

function timeoutPromise(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("done");
        }, interval);
    });
}

async function timeTest() {
    //Slow
    await timeoutPromise(3000);
    await timeoutPromise(3000);
    await timeoutPromise(3000);

    //Fast
    const timeoutPromise1 = timeoutPromise(3000);
    const timeoutPromise2 = timeoutPromise(3000);
    const timeoutPromise3 = timeoutPromise(3000);

    await timeoutPromise1;
    await timeoutPromise2;
    await timeoutPromise3;
}

let startTime = Date.now();
timeTest().then(() => {
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
});

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first, 
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    async greeting() {
        return await Promise.resolve(`Hi! I'm ${this.name.first}`);
    }

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);