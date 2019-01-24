'use strict';
function contentSize() {
    let wHeight = $(window).height();
    let mainContainerHeight = $('#main-container').height();
    let footerHeight = $('#info-company').height();
    if(wHeight>mainContainerHeight+footerHeight){
        let h = wHeight-(footerHeight*2)-2;
        $('#main-container').height(h);
    }//if

}//contentSize

function sizeBanner() {
    let banner = $('#banner');
    banner.height(banner.width()/2);
}//sizeBanner

$(window).resize(function () {
    sizeBanner();
    contentSize();
});
$(document).ready(function () {
    sizeBanner();
    contentSize();
});