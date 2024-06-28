let myArray = [];

let myFetch = fetch('https://jsonplaceholder.typicode.com/todos').then((data) => {
    let myData = data.json();

    // console.log(myData);

    myData.then((data) => {
        let mainDiv = document.getElementById('show_products');

        // myArray = data;
        // console.log(data[0].id);
        // console.log(typeof data);

        for(let i = 0; i < data.length; i++) {
            myArray.push(data[i]);
            // console.log(data , "Data");

            let elementCreate = document.createElement("div");

            elementCreate.innerHTML = 
            `<p>Product name : <strong>${data[i].title}</strong></p>
            <p>Product Id : <strong>${data[i].id}</strong></p>
            <p>Quantity : <strong>${data[i].userId}</strong></p>
            <p>Available : <strong>${data[i].completed}</strong></p>`;

            elementCreate.classList.add('border');
            mainDiv.appendChild(elementCreate);


            let innerDiv = document.createElement('div');
            let innerDivText = document.createTextNode('150 X 150');
            innerDiv.appendChild(innerDivText);
            innerDiv.classList.add('innerDiv');
            elementCreate.appendChild(innerDiv);


            let addBtn = document.createElement('button');
            let btnText = document.createTextNode('Add to Card');
            addBtn.appendChild(btnText);

            addBtn.classList.add('btn');

            elementCreate.appendChild(addBtn);

            if(data[i].completed === false) {
                elementCreate.classList.add('false');
                addBtn.classList.add('btn_disabled');
            }
        }
    })
    .catch((err) => {
        console.log(err, "Error");
    })
});


document.getElementById('btn_filter').addEventListener('click', function() {
    let userSubmitValue = document.getElementById('filter').value;
    // console.log(userSubmitValue);
    // console.log(typeof userSubmitValue);

    if(userSubmitValue == 'true' || userSubmitValue == 'false') {
        let warningDetech = document.getElementById('show_error');
        warningDetech.innerHTML = '';

        // myArray.filter(userSubmitValue);
    }
    else {
        let warningClear = document.getElementById('show_error');
        warningClear.innerHTML = 'Input field is not valid';
        warningClear.classList.add('danger');
    }
});

console.log(myArray);
console.log(typeof myArray);

let arr = [
    {name: 'usama', age: 23, gender: 'male'},
    {name: 'ali', age: 20, gender: 'male'},
    {name: 'hamza', age: 26, gender: 'male'},
    {name: 'usman', age: 22, gender: 'male'},
    {name: 'umar', age: 21, gender: 'male'},
];

console.log(arr);
console.log(typeof arr);