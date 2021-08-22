'use strict';
//Check Username Validity

const ValidateName = function(){
let username =  "";
username = prompt("Please enter your name");
while (username == "" ){
    
    alert("Cannot enter empty string");
    username = prompt("Please enter your name");
    if (username == null){
        break;
    }
}
return username;
}



//Check for Password Validity

const ValidatePassword = function(){

    let OriginalPassword = '123';
    let Password =prompt("Please enter your password");
    let i = 0
    while (Password!=OriginalPassword)
    {
        if(i==2){
            alert("You have entered a wrong password, Bye");
            break;
        }
        alert ("Wrong Password, Please try again");
        Password =prompt("Please enter your password");
        i++;
        
    }
    return Password;

}
//Check Birth month validity
const checkBirthMonth = function(){
    let month = prompt("Please enter your birth month");
    while(isNaN(month)== true){
        alert("Only digits are allowed");
        month = prompt("Please enter your birth month");
    }
    
    while (month<0 || month >12 ){
        alert("Please enter a valid month");
        month = prompt("Please enter your birth month");
    }
    return month;

}

const checkDayValidity = function(month){
    let day = prompt("Please enter your day of birth");
    if (month == '1' || month =='01'){
        if (day > 31 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '2' || month =='02'){
        if (day > 28 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '3' || month =='03'){
        if (day > 31 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '4' || month =='04'){
        if (day > 30 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '5' || month =='05'){
        if (day > 31 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '6' || month =='06'){
        if (day > 30 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '7' || month =='07'){
        if (day > 31 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '8' || month =='08'){
        if (day > 30 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '9' || month =='09'){
        if (day > 31 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '10'){
        if (day > 31 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '11'){
        if (day > 30 || day <=0)
        day = prompt("Please enter a valid day")
    }
    else if (month == '12'){
        if (day > 31 || day <=0)
        day = prompt("Please enter a valid day")
    }
    
        return day;
    
}


const getHoroscope =  function(month, day){
    // let horoscope = ""
		
		
	// 	// checks month and date within the
	// 	// valid range of a specified zodiac
	// 	if (month == "12"){
			
	// 		if (day < 22)
	// 		    horoscope = "Sagittarius";
	// 		else
	// 		    horoscope ="capricorn";
    //         return horoscope
    //     }
			
	// 	else if (month == "01" || "1"){
	// 		if (day < 20)
	// 		    horoscope = "Capricorn";
	// 		else
	// 		    horoscope = "aquarius";
    //         return horoscope
	// 	}
			
	// 	else if (month == "02" || "2"){
	// 		if (day < 19)
	// 		    horoscope = "Aquarius";
	// 		else
	// 		    horoscope = "pisces";
    //         return horoscope
    //     }
			
	// 	else if(month == "03" || "3"){
	// 		if (day < 21)
	// 		    horoscope = "Pisces";
	// 		else
	// 		    horoscope = "aries";
    //         return horoscope
    //         }
	// 	else if (month == "04" || "4"){
	// 		if (day < 20)
	// 		    horoscope = "Aries";
	// 		else
	// 		    horoscope = "taurus";
    //         return horoscope
	// 	}
			
	// 	else if (month == "05" || "5"){
	// 		if (day < 21)
	// 		    horoscope = "Taurus";
	// 		else
	// 		    horoscope = "gemini";
    //         return horoscope
	// 	}
			
	// 	else if( month == "06" || "6"){
	// 		if (day < 21)
	// 		    horoscope = "Gemini";
	// 		else
	// 		    horoscope = "cancer";
    //         return horoscope
	// 	}
			
	// 	else if (month == "07" || "7"){
	// 		if (day < 23)
	// 		    horoscope = "Cancer";
	// 		else
	// 		    horoscope = "leo";
    //         return horoscope
	// 	}
			
	// 	else if( month == "08" || "8"){
	// 		if (day < 23)
	// 		    horoscope = "Leo";
	// 		else
	// 		    horoscope = "virgo";
    //         return horoscope
	// 	}
			
	// 	else if (month == "09" || "9"){
	// 		if (day < 23)
	// 		    horoscope = "Virgo";
	// 		else
	// 		    horoscope = "libra";
    //         return horoscope
	// 	}
			
	// 	else if (month == "10"){
	// 		if (day < 23)
	// 		    horoscope = "Libra";
	// 		else
	// 		    horoscope = "scorpio";
    //         return horoscope
	// 	}
			
	// 	else if (month == "11"){
	// 		if (day < 22)
	// 		    horoscope = "scorpio";
	// 		else
	// 		    horoscope = "sagittarius";
    //         return horoscope
	// 	}
	// 	console.log(day);
    //     console.log(month);	
    //     console.log(horoscope);
	// 	return horoscope;
	

    // }
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
        return "Capricorn";
      } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquarius";
      } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
      } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Aries";
      } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Taurus";
      } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
      } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Cancer";
      } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leo";
      } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgo";
      } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra";
      } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Scorpio";
      } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagittarius";
      }
    }

//     



let username = ValidateName();
if (username != null){
    let password = ValidatePassword();
    let month = checkBirthMonth();
    let day = checkDayValidity(month);
    if (month !=""&& day!=""){
        alert(getHoroscope(month,day));
}


}








