

//  Array destructing

    const arrayvalue=[10,20,10,50];

    const [a,b,c,d]=arrayvalue;

    console.log(a,b,c,d)


//  Skipping the element

    const arrayvalue1=[10,20,10,50];

    const [x,,,y]=arrayvalue1;

    console.log(x,y)


// using default value
    const arrayvalue2=[10,20,10];

    const [a1,b1,c1,d1=60]=arrayvalue2;

    console.log(a1,b1,c1,d1)



    const arrayvalue4=[10,20,10,50];

    const [x1,y1,z1,n1=60]=arrayvalue4;

    console.log(x1,y1,z1,n1)


// ... spread operator ---> extracting value from array

    console.log(...[10,30,50])


    //... rest operator  ------> used to collect the remining array value into new array

    const arrayvalue5=[10,50,20,60,70,40]

    const [i,j,...r]=arrayvalue5;

    console.log(i,j)
    console.log(r)
    


    let xx = 5;
    let yy= 10;
    
    [xx, yy] = [yy, xx]; // Swaps the values
    
    console.log(xx); // 10
    console.log(yy); // 5



