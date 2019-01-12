console.log("Paste buton pressed.");

try {
    var storedLegal = chrome.storage.local.get('newStorage', function (items) {
        console.log(items);
        document.getElementById("enterAddressFullName").value = items.newStorage.src_name;
        document.getElementById("enterAddressAddressLine1").value = items.newStorage.src_address1;
        document.getElementById("enterAddressAddressLine2").value = items.newStorage.src_address2;
        document.getElementById("enterAddressCity").value = items.newStorage.src_city;
        document.getElementById("enterAddressStateOrRegion").value = items.newStorage.src_province;
        document.getElementById("enterAddressPostalCode").value = items.newStorage.src_zip;
        document.getElementById("enterAddressPhoneNumber").value = items.newStorage.src_phone;

        var ddl = document.getElementById('enterAddressCountryCode');
        var opts = ddl.options.length;
        for (var i = 0; i < opts; i++) {
            if (ddl.options[i].innerText == items.newStorage.src_country) {
                ddl.options[i].selected = true;
                break;
            }
        }
    });

} catch (error) {
    console.log(error);
}