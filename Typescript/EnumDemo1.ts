

enum day{

     MONDAY="MONDAY",
     TUESDay=5,
     WEDNESDAY=7,
     THUESDAY=8,
     FRIDAY=0,
     SATURDAY=6,
     SUNDAY=5

    }

    console.log(day.MONDAY)
    console.log(day.TUESDay)
    console.log(day.WEDNESDAY)


    enum statuscode
    {
        NotFound=404,
        Success=200,
        BadRequest=400
    }
    

    if(statuscode.NotFound==404)
    {
        console.log("The application request is not found")
    }




    enum value22
    {
        Yes="Yes",
        No="No"
    }
    function respond(value:value22)
    {
        if(value=='Yes')
        {
            console.log("allowed")
        }
        else if(value=='No')
        {
            console.log("Not allowed")
        }
    }
respond(value22.No)