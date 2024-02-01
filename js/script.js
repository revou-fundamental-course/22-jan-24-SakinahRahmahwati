function validateForm(){
    const names = document.forms["pesan-form"]["nama"].value
    const emails = document.forms["pesan-form"]["email"].value
    const likes = document.forms["pesan-form"]["like"].value
    
    if(names == ""|| emails == "" || likes ==  ""){
        document.getElementById("error-name").innerHTML = "Tidak boleh ada yang kosong!"

        return false
    } 

    setSenderUI (names, emails, likes);

    return false;

}

