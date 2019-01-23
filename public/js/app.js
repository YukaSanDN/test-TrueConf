
function main_scroll(){

    let platform = $(navigator);

    if(platform[0].platform==="Win32"){
        $("body>div").css({
            'padding-right': 0
        });
    }//if
}
$(window).scroll(main_scroll);