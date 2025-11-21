
let registration = [];
let showAnalytics= false;

function data(event){
    event.preventDefault(); // stop page from reloading

    var name= document.getElementById("fullName").value;
    var email= document.getElementById("email").value;
    var company= document.getElementById("company").value;
    var attendanceElem = document.querySelector("input[name='attendance']:checked");

    if (name === "" || email === "") {
        alert("Please fill in required fields (name and email).");
        return;
    }
    else if(name.length < 6 || name.length > 100){
        alert("Name must be between 6 and 100 characters");
        return;
    }
    else if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid professional email address.");
        return;
    }
    else if (company.length > 100){
        alert("Company name cannot exceed 100 characters");
        return;
    }
    else if (!attendanceElem) {
        alert("Please select your attendance type.");
        return;
    }

    const attendance = attendanceElem.value;

    registration.push({
        fullName: name,
        email: email,
        company: company,
        attendance: attendance
    });

    alert("Registration Successful!");

    document.getElementById("form-box").reset();

    AnalyticsUpdate();
}

 function toggleAnalytics() {
        let panel = document.getElementById("analyticsPanel");
        let btn = document.getElementById("analytics-btn");
        if (panel.style.display === "none") {
            panel.style.display = "block";
            btn.innerHTML = "Hide Event Analytics";
     } else {
        panel.style.display = "none";
        btn.innerHTML = "Show Event Analytics";
 
        }
 
    }

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
 
