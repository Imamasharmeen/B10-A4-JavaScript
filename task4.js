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