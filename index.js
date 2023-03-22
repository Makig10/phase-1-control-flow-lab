function scuberGreetingForFeet(Feet){
  // Write your code here!
  if (Feet<=400){
  return ('This one is on me!');
  }else if ( Feet>2000 && Feet<2500){
    return ('I will gladly take your thirty bucks.');
  }else if( Feet>2500){
    return ('No can do.');}
}
//console.log(Feet(2100));








function ternaryCheckCity(NYC){
  // Write your code here!
   
  return NYC? "Ok, sounds good.": "No go." ;
  }

function switchOnCharmFromTip(generous){
  // Write your code here!
  
  switch(generous) {
    case 'generous': 
    return ("Thank you so much.");
    case 'not as generous':
    return ("Thank you.")
    default:
    return ("Bye.")
  }
}