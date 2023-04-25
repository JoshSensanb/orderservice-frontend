
let host = "http://localhost:8080";
let findallorders = () =>{
    return fetch("http://localhost8080/orders")
        .then(response=>response.json());
}
let saveOrder = (order) => {
    return fetch(host + "", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerId:order.customerId,
            totalPrice:order.totalPrice,

            shippingAddress:{
                state:order.state,
                city:order.city,
                postalCode:order.postalCode
            },
            item:{
                name:order.item.name,
                quantity:order.item.quantity,
                price:order.item.price
            },
            payment: {
                method: order.payment.method,
                number: order.payment.number,
                billingAddress: {
                    state: order.payment.billingAddress.state,
                    city: order.payment.billingAddress.city,
                    postalCode: order.payment.billingAddress.postalCode
                }
            }




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
export default data;