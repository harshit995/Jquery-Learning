$(function () {  //same as above ready

    ///your jquery code here
    // console.log($)
    // $('selector').action()
    // $('p').click();//click on p , element selector 
    $('p').click(function () {

        console.log("you clicked on p")
        // $('#fe').hide() // id selector 
    })


    // 3 types of selectors 
    // element selector
    // id selector
    // class selector

    // other selectors
    $('*').click()

    // $('p.fe').click();
    $('p:first').click();

})