let findallorders = () =>{
    return fetch("http://localhost8080/customers")
        .then(response=>response.json());
}

let data = {
    findallorders:findallorders()
}
