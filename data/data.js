
let host = "http://localhost:8080";
let findallorders = () =>{
    return fetch("http://localhost8080/orders")
        .then(response=>response.json());
}
let saveOrder = (order) => {
    return fetch(host + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerId:order.id



        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders:findallorders,
    saveOrder: saveOrder
}
