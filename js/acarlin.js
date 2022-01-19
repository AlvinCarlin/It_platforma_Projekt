/**
 * Listeners and initial setup
 * */ 

window.onload = function(){
    document.getElementById("addcategory").disabled = true;
    document.getElementById("description").disabled = true;
    document.getElementsByClassName("button-submit")[0].disabled = true;
    checkRadioBox();

    document.forms["add-form"]["addnumber"].addEventListener("change", function(event){
        main(event);
    });

    document.forms["add-form"]["addcategory"].addEventListener("change", function(event){
        main(event);
    });

    document.forms["add-form"]["description"].addEventListener("keyup", function(event){
        main(event);
    });

};


/**
 * Main function, calls every other
 * function.
*/

function main(event){
    if(validateNumberInput() && validateSelect() && validateTextbox()){
        document.getElementsByClassName("button-submit")[0].disabled = false;
    }
    else{
        document.getElementsByClassName("button-submit")[0].disabled = true;
    }
}

/**
 * Other functions
*/

function checkRadioBox(){
    
    if(navigator.userAgent.indexOf("Firefox") != -1){
        document.getElementById("syntaxRadio").checked = true;
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1){
        document.getElementById("semanticsRadio").checked = true;
    }
    else{
        document.getElementById("logicRadio").checked = true;
    }
}

/*
 * Validation functions
 **/
    
function validateNumberInput(){
    var userInput = document.forms["add-form"]["addnumber"].value;
    if(userInput == ""){
        alert("Polje ne smije ostati prazno!");
        setWarningColor("addnumber");
        return false;
    }
    else if(userInput < 0 || userInput > 100){
        alert("Nedozvoljena vrijednost!");
        setWarningColor("addnumber");
        document.getElementById("addcategory").disabled = true;
        document.getElementById("description").disabled = true;
        return false;
    }
    else{
        document.getElementById("addcategory").disabled = false;
        document.getElementById("description").disabled = false;
        setNormalColor("addcategory");
        setNormalColor("addnumber");
        return true;
    }
}

function validateSelect(){
    var userInput = document.forms["add-form"]["addcategory"];
    var userValues = getSelectValues(userInput);
    console.log(userValues);
    if(userValues.length > 3){
        alert("Molimo odaberite najviše tri vrijednosti!");
        return false;
    }
    else{
        return true
    }
}

// Pomoćna funkcija za select box
function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0; i<options.length; i++) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

  function validateTextbox(){
    if(document.forms["add-form"]["description"].value.length
    > parseInt(document.forms["add-form"]["addnumber"].value)){
        alert("Tekst smije imati maksimalno " +
        document.forms["add-form"]["addnumber"].value
        + " znakova.")
        setWarningColor("description")
        return false;
    }
    else{
        setNormalColor("description");
        return true;
    }
}

/*
 * Functions for changing elements style. 
 * Colors, visibility, etc.
 **/ 

function setWarningColor(id){
    document.getElementById(id).style.backgroundColor = "#f44242"
    document.getElementById(id).style.color = "#ffffff";
}

function setNormalColor(id){
    document.getElementById(id).style.backgroundColor = "#ffffff"
    document.getElementById(id).style.color = "#000000";
}
