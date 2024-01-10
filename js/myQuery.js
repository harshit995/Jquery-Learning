// $(document).ready(function () {
$(function () {  //same as above ready

    ///your jquery code here
    // console.log($)
    // $('selector').action()
    // $('p').click();//click on p , element selector 


    // $('p').click(function () {

    //     console.log("you clicked on p")
    //     // $('#fe').hide() // id selector 
    // })


    // 3 types of selectors 
    // element selector
    // id selector
    // class selector

    // other selectors
    $('*').click()

    // $('p.fe').click();
    $('p:first').click();

    //EVENTS IN JQUERY
    // Mouse events = click dblclick , mouse enter, mouseleave
    // keyboard = keypress , keydown , MediaKeyStatusMap
    //form events = submit,change,focus,blur
    //document/window = load,resize,scroll,unload


    // $('p').dblclick(function () {
    //     console.log('you doubled click on p', this);
    // })
    // $('p').hover(function () {
    //     console.log('you hoverd on p', this);
    // }, function () {
    //     console.log("thanks for coming")
    // })


    //ON METHOD
    $('p').on({

        click: function () {
            console.log('you clicked', this)
        },
        mouseleave: function () {
            console.log('you left', this)
        }
    })
    $('#wiki').hide(1000, function () {
        console.log("hidden");
    })


});