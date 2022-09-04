//==UserScript==
// @name Instant Wheel
// @namespace https://github.com/NazrinUFO
// @description Redirect Neopets wheels to their instant counterparts
// @include https://www.neopets.com/*
//==/UserScript==
if(window.location.href == "https://www.neopets.com/prehistoric/mediocrity.phtml")
{
    window.location = "http://www.neopets.com/amfphp/json.php/WheelService.spinWheel/3"
}
else if(window.location.href == "https://www.neopets.com/faerieland/wheel.phtml")
{
    window.location = "http://www.neopets.com/amfphp/json.php/WheelService.spinWheel/2"
}
else if(window.location.href == "https://www.neopets.com/desert/extravagance.phtml")
{
    window.location = "http://www.neopets.com/amfphp/json.php/WheelService.spinWheel/6"
}
else if(window.location.href == "https://www.neopets.com/halloween/wheel/index.phtml")
{
    window.location = "http://www.neopets.com/amfphp/json.php/WheelService.spinWheel/4"
}
else if(window.location.href == "https://www.neopets.com/prehistoric/monotony/monotony.phtml")
{
    window.location = "http://www.neopets.com/amfphp/json.php/WheelService.spinWheel/5"
}
else if(window.location.href == "https://www.neopets.com/medieval/knowledge.phtml")
{
    window.location = "http://www.neopets.com/amfphp/json.php/WheelService.spinWheel/1"
}
