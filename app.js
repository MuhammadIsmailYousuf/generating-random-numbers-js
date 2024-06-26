// 25-04-2024
        // All Topics.
        // Math.round
        // Math.random
        // Math.ceil
        // Math.floor
        // Typeof


        // Task 1

        //  Question1 = Random value sy 0 ay tu 'tail' or 1 ay tu 'head'? apply if else condition?
 
        var num = Math.random();
        console.log(num);
        var num1 = Math.round(num);
        console.log(num1);
        if(num1 === 0){
            console.log("Head");
        }
        else{
            console.log("Tail");
        }

        //Task 2 
         
        // Question2 = 2 variable banany hyn ek variable jo computer sy value dy , or dosra wo jo k user sy value dy,
        // agar computer sy user ki value bari ho tu 'Greater than' ajay , or computer sy user ki value chotti ho tu...
        // 'Less than' likha ajay , or agar computer or user ki valuue donoun same ho tu 'You are Win' likha ajay..
        // Apply if else condition???

        var compnum = Math.random();
        console.log(compnum);
        var username = Math.round(Math.random()*15)
        console.log(username);

        if(compnum < username){
            console.log('Greater then');
        }else if(compnum > username){
            console.log('Less then');
        }
        else if(compnum === username){
            console.log('You are a Win');
        }

        //Task 3

        // RGB 3 variables bnao or 'R' , 'G' , 'B' 3inoun ki value nikaly???
         
        var R = Math.round(Math.random()*255)
        var G = Math.round(Math.random()*255)
        var B = Math.round(Math.random()*255)
        console.log('RGB(',R, ',' ,G, ',' ,B, ')');
