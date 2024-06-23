let myFetch = fetch('https://jsonplaceholder.typicode.com/todos').then((data) => {
    let myData = data.json();

    myData.then((data) => {
        let mainDiv = document.getElementById('show_products');

        for(let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            // console.log(data , "Data");

            let elementCreate = document.createElement("div");
            elementCreate.innerHTML = 
            `<p>Product name : <strong>${data[i].title}</strong></p>
            <p>User Id : <strong>${data[i].id}</strong></p>
            <p>Quantity : <strong>${data[i].userId}</strong></p>
            <p>Available : <strong>${data[i].completed}</strong></p>`;

            if(data[i].completed === false) {
                elementCreate.classList.add('false')
            }

            elementCreate.classList.add('border');
            mainDiv.appendChild(elementCreate);
        }
    })
    .catch((err) => {
        console.log(err, "Error");
    })
})
