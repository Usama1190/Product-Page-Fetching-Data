let myFetch = fetch('https://jsonplaceholder.typicode.com/todos').then((data) => {
    let myData = data.json();

    myData.then((data) => {
        let mainDiv = document.getElementById('show_products');

        for(let i = 0; i < data.length; i++) {
            // console.log(data[i].title);
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
                // addBtn.setAttribute(disabled, true);
            }
        }
    })
    .catch((err) => {
        console.log(err, "Error");
    })
});


document.getElementById('btn_filter').addEventListener('click', function() {
    let userSubmitValue = document.getElementById('filter').value;
    console.log(userSubmitValue);

    if(userSubmitValue == 3) {
        let warningDetech = document.getElementById('show_error');
        warningDetech.innerHTML = 'Input field is not valid';
        warningDetech.classList.add('danger');
    }
    else {
        let warningClear = document.getElementById('show_error');
        warningClear.innerHTML = '';
    }
});
