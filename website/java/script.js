function read(){

    var courseList = [
        {code:'1620', name:'Web Fundamental Technologies'},
        {code:'1515', name:'Scripting for IT'},
        {code:'1310', name:'Technical Math for IT'}
    ];

    var userinput = prompt('Please enter a 4-digit number');
    var inputlength = userinput.length;
    while (isNaN(userinput) === true || inputlength != 4){
        prompt('Invalid input, please try again!');
        inputlength = userinput.length;
    }

    for (i = 0; i < courseList.length; i++){
        if (courseList[i].code == userinput){
            alert(`Yes I am taking the course: ACIT ${courseList[i].code} - ${courseList[i].name}`);
            return false;
        
        }
      
        else{
            var newCourse = {code: userinput, name: null};
            courseList.push(newCourse);
            alert('Success!!!');
        }
    }

}
