

function calculateTax(income, expenses) {

    if(income <= 0 || expenses <= 0 || expenses>income){
        return  "Invalid Input"
    }
    
    const remainingMoney = income - expenses;
    const textPreMonth = remainingMoney*.2;
    return textPreMonth;
}

function sendNotification(email) {
    if(email.indexOf("@") === -1 ||typeof(email) !== "string"){
        return ("Invalid Email");
    }
    const splitEmail = email.split("@");
    const output = splitEmail[0] +" sent you an email from " +  splitEmail[1]
    return output
}


function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return  "Invalid Input";
    }
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    for (let number of numbers){
        if(name.includes(number)){
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if(typeof obj !== "object" || 
        typeof obj.name !== "string" || 
        typeof obj.testScore !== "number" ||
        obj.testScore > 50||
        typeof obj.schoolGrade !== "number" ||
        obj.schoolGrade > 30 ||
        typeof obj.isFFamily !== "boolean"){
        return  "Invalid Input";
    }
    
    let totalScore = obj.testScore + obj.schoolGrade;
    
    if ( obj.isFFamily){
        totalScore += 20;
    }
    
    if(totalScore >= 80){
        return true;
    }
        
    return false   
}