//Storage of Addresses
let addressStor = [];

loadAddresses();

//A very untidy way to add the data but it will work
function createAddress() {
    //List of inputs
    let inputFirstName = document.getElementById("firstname").value;
    let inputOtherName = document.getElementById("othername").value;
    let inputEmail = document.getElementById("email").value;
    let inputPhoneNumber = document.getElementById("phoneNumber").value;
    let inputStreet = document.getElementById("street").value;
    let inputTown = document.getElementById("town").value;
    let inputCountry = document.getElementById("country").value;

    //JavaScript object containing all the values
    let input = {
        firstname: inputFirstName,
        othernames: inputOtherName,
        email: inputEmail,
        phoneNum: inputPhoneNumber,
        address: {
            street: inputStreet,
            town: inputTown,
            country: inputCountry
        }
    }
    console.log(input);

    //Test Objects
    let address = {
        firstname: "Oliver",
        othernames: "Dimes",
        email: "Oliver.dimes3@gmail.com",
        phoneNum: "07979532612",
        address: {
            street: "9 Whytingham Road",
            town: "tring",
            country: "United Kingdom"
        }
    }
    let address2 = {
        firstname: "Ivan",
        othernames: "Dimes",
        email: "Ivan.dimes3@gmail.com",
        phoneNum: "0742329532612",
        address: {
            street: "9 Whyti323gham Road",
            town: "tring",
            country: "United Kingdom"
        }
    }

    //Pushing the data to the array
    addressStor.push(input);
    saveAddress();
    displayTable();
}

function saveAddress() {
    //Using Local Storage https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
    localStorage.setItem("addresses", JSON.stringify(addressStor));
}

//This function has a flaw, if the user pushes an address object that doesn't contain the values, it will cause nothing to function and the local storage array will have to be reset.
function loadAddresses() {
    addressStor = JSON.parse(localStorage.getItem("addresses"));

    //If the localstor is none, we will overwrite the array
    if (addressStor == null) {
        console.log("No Data");
        addressStor = [];
    } else {
        displayTable();
    }
}

//This function uses innerHTML to modify the table to allow for easy search
function displayTable() {
    let tempStor = ""
    addressStor.forEach((item, index) => {
        //Formatting for the Address
        let addressObj = item.address.street + "\n" + item.address.town + "\n" + item.address.country

        tempStor += `<tr>`;
        tempStor += `<td>${item.firstname}</td>`;
        tempStor += `<td>${item.othernames}</td>`;
        tempStor += `<td>${item.email}</td>`;
        tempStor += `<td>${item.phoneNum}</td>`;
        tempStor += `<td>${addressObj}</td>`;
        tempStor += `<td><button onclick="removeAddress(${index})" class="btn btn-danger">Delete Record</button></td>`;
        tempStor += `<tr>`;
    });
    //Linking to the bootstrap table
    document.getElementById("tableBody").innerHTML = tempStor;
    console.log("Table has been loaded : " + tempStor);
}


//Based off https://www.w3schools.com/howto/howto_js_filter_table.asp
function tableSearch(inputID, tableIndex, tableType) {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(inputID);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableType);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[tableIndex];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//Simple implementation, will remove the value
function removeAddress(index) {
    addressStor.splice(index, 1);
    saveAddress();
    displayTable();
}