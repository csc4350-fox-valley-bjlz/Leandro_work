let form_03 = {
    Agency_name : null,
    Todays_Date : "00/00/0000",
    Date_of_Incident : "00/00/0000",
    Time_of_Incident : "00:00",
    Form_Completer_Name : "",
    Form_Completer_Title : "",
    Form_Completer_Phone : "",
    Form_Completer_Email : "",
    How_Occur_What_Damaged_Brief : "",
    Incident_Location_Name : "",
    Incident_Location_Address : "",
    Incident_Location_City : "",
    Incident_Location_State : "",
    Incident_Location_Zip : "",
    Incident_Location_Specific : "",
    Incident_Primary_Location : "",
    Estimate_of_Loss : "",
    Contact_Person_at_Facility : "",
    Contact_Persons_Email : "",
    Contact_Persons_Phone : "",
    Damage_by_ThirdParty : "",
    Name_Person_Identified : "",
    Address_Person_Identified : "",
    City_Person_Identified : "",
    State_Person_Identified : "",
    Zip_Person_Identified : "",
    Police_Investigation_conducted : "",
    Police_Agency_Investigated_Name : "",
    Police_Report_Num : "",
    Charges_Against_Party : ""
}

function formSubmission() {
    //add the simple strings to the object (all but time, radio, check, etc.)
    form_03.Todays_Date = document.getElementById('todays-date').value
    form_03.Date_of_Incident = document.getElementById('time-of-incident').value
    form_03.Form_Completer_Name = document.getElementById('name-of-person-completing-report').value
    form_03.Form_Completer_Title = document.getElementById('title-of-person-completing-report').value
    form_03.Form_Completer_Phone = document.getElementById('business-phone-number').value
    form_03.Form_Completer_Email = document.getElementById('business-email').value
    form_03.How_Occur_What_Damaged_Brief = document.getElementById('how-did-incident-occur').value
    form_03.Incident_Location_Name = document.getElementById('name-of-location').value
    form_03.Incident_Location_Address = document.getElementById('incident-address').value
    form_03.Incident_Location_City = document.getElementById('incident-city').value
    form_03.Incident_Location_State = document.getElementById('incident-state').value
    form_03.Incident_Location_Zip = document.getElementById('incident-zip').value
    form_03.Incident_Location_Specific = document.getElementById('specific-location').value
    form_03.Incident_Primary_Location = document.getElementById('primary-location').value
    form_03.Estimate_of_Loss = document.getElementById('estimate-of-loss').value
    form_03.Contact_Person_at_Facility = document.getElementById('Contact-person-at-facility').value
    form_03.Contact_Persons_Email = document.getElementById('contact-person-email').value
    form_03.Contact_Persons_Phone = document.getElementById('Contact-person-phone-number').value
    form_03.Name_Person_Identified = document.getElementById('identified-name').value
    form_03.Address_Person_Identified = document.getElementById('identified-address').value
    form_03.City_Person_Identified = document.getElementById('identified-city').value
    form_03.State_Person_Identified = document.getElementById('identified-state').value
    form_03.Zip_Person_Identified = document.getElementById('identified-zip').value
    form_03.Police_Agency_Investigated_Name = document.getElementById('what-police-investigated').value
    form_03.Police_Report_Num = document.getElementById('police-report-num').value
    form_03.Charges_Against_Party = document.getElementById('charges-against-party').value

    let causethirdpartyYN = document.getElementsByName('3rd-party-cause-radio');
    let policeCondInvest = document.getElementsByName('police-conduct-investigation-radio');

    if (causethirdpartyYN[0].checked){
        form_03.Damage_by_ThirdParty = true
    }else if(causethirdpartyYN[1].checked){
        form_03.Damage_by_ThirdParty = false
    }else if(causethirdpartyYN[2].checked || causethirdpartyYN === undefined){
        form_03.Damage_by_ThirdParty = null
    }

    if (policeCondInvest[0].checked){
        form_03.Police_Agency_Investigated_Name = true
    }else if(policeCondInvest[1].checked){
        form_03.Police_Agency_Investigated_Name = false
    }else if(policeCondInvest[2].checked || policeCondInvest === undefined){
        form_03.Police_Agency_Investigated_Name = null
    }

    let incidentTime = ((document.getElementById('time-of-incident')).value).split(' ')
    let incidentHhMm = incidentTime[0].split('/')
    let incidentAmPm = incidentTime[1]
    if (incidentAmPm === 'p.m.'){
        incidentHhMm[0] = parseInt(incidentHhMm[0]) + 12
    }



    console.log(form_03)
    alert('Form Submitted, Thank You')
    return false

}