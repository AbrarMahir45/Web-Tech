
let registration = [];
let showAnalytics= false;




function data(){
    var name= document.getElementById("fullName").value;
    var email= document.getElementById("email").value;
    var company= document.getElementById("company").value;
    var attendance= document.getElementById("input[name='attendance']:checked").value;

    if(name===""||email===""||company===""){
         
         return false;
   }   
    else if(name.length<6||name.length>100){
        alert("Name must be between 6 and 100 characters");
        return false;
    }
    else if(name===""){
        alert("Fillup the name field!");
    }
    else if(!email.includes("@")||!email.includes(".")){
        alert("Please enter a valid professional email address.");
        return false;
    }
    else if(company.length>100){
        return false;
    }
    else if(!attendance){
        alert("Please select your attendance type.");
        return false;
    }
    registration.push({
        fullName: name,
        email: email,
        company: company,
        attendance: attendance.value
    });
    
    alert("Registration Successful!");

    document.getElementById("form-box").reset();

    AnalyticsUpdate();

    return false;

}
document.getElementById("analyticsBtn").addEventListener("click", function () {

    const panel = document.getElementById("analyticsPanel");

    if (!showAnalytics) {
        panel.style.display = "block";
        this.innerText = "Hide Event Analytics";
        showAnalytics = true;
    } else {
        panel.style.display = "none";
        this.innerText = "Show Event Analytics";
        showAnalytics = false;
    }
});


function AnalyticsUpdate () {
    let total = registration.length;
    let virtual = 0;
    let inperson = 0;

    for (let i = 0; i < registration.length; i++) {
        if (registration[i].attendance === "Virtual") {
            virtual++;
        } else {
            inperson++;
        }
    }

    document.getElementById("totalRegistrants").innerText = total;
    document.getElementById("virtualCount").innerText = virtual;
    document.getElementById("inPersonCount").innerText = inperson;
}
