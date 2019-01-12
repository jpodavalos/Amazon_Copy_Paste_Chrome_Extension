var buyer_details = document.getElementById("myo-order-details-buyer-address").innerText;

var data = buyer_details.split("\n");

first_line = data[0]
second_line = data[1]
third_line = data[2]
fourth_line = data[3]
fifth_line = data[4]
sixth_line = data[5]
seventh_line = data[6]

// print lines

console.log('First line: ' + first_line);
console.log('Second line: ' + second_line);
console.log('Third line: ' + third_line);
console.log('Fourth line: ' + fourth_line);
console.log('Fifth line: ' + fifth_line);
console.log('Sixth line: ' + sixth_line);
console.log('Seventh line: ' + seventh_line);

var name = '';
var address1 = '';
var address2 = '';
var city = '';
var zip = '';
var country = '';
var phone = '';
var province = '';

console.log('Number of lines detected: ' + data.length)

try {

    name = first_line.trim();
    address1 = second_line;

    // IF NO PHONE NUMBER
    if (data.length == 4) {
        address2 = '';
        country = fourth_line
        phone = '888-888-8888'
        city = third_line.substr(0, third_line.indexOf(',')).trim();
        zip = third_line.substr(third_line.length - 7);
        province = third_line.split(',')[1].replace(zip, '').trim();

        // If number of lines is equal to 6 (No second address)
    } else if (data.length == 6) {
        address2 = '';
        country = fourth_line.trim()
        phone = fifth_line.replace('Phone :', '').replace('Phone:', '').trim();
        city = third_line.substr(0, third_line.indexOf(',')).trim();
        zip = third_line.substr(third_line.length - 8);
        province = third_line.split(',')[1].replace(zip, '').trim();

        // If number of lines is equal to 7 (with second address)
    } else if (data.length == 7) {
        address2 = third_line;
        country = fifth_line.trim()
        phone = sixth_line.replace('Phone :', '').replace('Phone:', '').trim();
        city = fourth_line.substr(0, fourth_line.indexOf(',')).trim();
        zip = fourth_line.substr(fourth_line.length - 8);
        province = fourth_line.split(',')[1].replace(zip, '').trim();

    }


    // CAPTURED DATA:
    console.log("Captured Data: ")
    console.log('Name : ' + name);
    console.log('Address 1: ' + address1);
    console.log('Address 2 ' + address2);
    console.log('City: ' + city);
    console.log('Province: ' + province);
    console.log('Zip: ' + zip);
    console.log('Country: ' + country);
    console.log('Phone: ' + phone);


} catch (error) {
    console.log(error);
}

// Store gathered data

var storArray = {
    src_name: name,
    src_address1: address1,
    src_address2: address2,
    src_city: city,
    src_province: province,
    src_zip: zip,
    src_country: country,
    src_phone: phone
};

chrome.storage.local.set({
    'newStorage': storArray
});