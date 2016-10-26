/*jslint devel: true */
var i, body;

var addToCart;

var price;

var size6,
    size7,
    size8,
    size9,
    size10,
    size11,
    size12;

var selectedQuantity,
    quantity1,
    quantity2,
    quantity3,
    quantity4,
    quantity5,
    quantity6,
    quantity7,
    quantity8,
    quantity9,
    quantity10;

var whiteHex = '#FFFFFF',
    orangeHex = '#FA5B5B',
    grayHex = '#8D8D8D',
    indigoHex = '#665BFA',
    blueHex = '#3EB6E2',
    purpleHex = '#873EE2';
//grayGradient = ['#E6E6E6', '#8F8F8F'],
var orangeGradient = ['#f2a96e', '#eb5050'],
    grayGradient = ['#262626', '#050505'],
    indigoGradient = ['#A18FED', '#49339F'],
    blueGradient = ['#74C2E3', '#338EB9'],
    purpleGradient = ['#C795F9', '#9037E4'];

var colorOrange,
    colorGray,
    colorIndigo,
    colorBlue,
    colorPurple;

var currentTheme = 'orange',
    currentView = 'main_view1',
    currentColorName = 'orange';

var radioActive,
    radioInactive,
    radioColorActive;

var mainView,
    thumbView1,
    thumbView2,
    thumbView3,
    thumbView4,
    thumbView5,
    thumbView6;

var thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6;

function setQuantityTo(quantity) {
    'use strict';
    
    // Setting Defaults
    quantity1.className = 'rdo';
    quantity2.className = 'rdo';
    quantity3.className = 'rdo';
    quantity4.className = 'rdo';
    quantity5.className = 'rdo';
    quantity6.className = 'rdo';
    quantity7.className = 'rdo';
    quantity8.className = 'rdo';
    quantity9.className = 'rdo';
    quantity10.className = 'rdo';
    
    // Setting The selected value
    if (quantity === 'quantity1') {
        quantity1.className = 'rdoActive';
    }
    if (quantity === 'quantity2') {
        quantity2.className = 'rdoActive';
    }
    if (quantity === 'quantity3') {
        quantity3.className = 'rdoActive';
    }
    if (quantity === 'quantity4') {
        quantity4.className = 'rdoActive';
    }
    if (quantity === 'quantity5') {
        quantity5.className = 'rdoActive';
    }
    if (quantity === 'quantity6') {
        quantity6.className = 'rdoActive';
    }
    if (quantity === 'quantity7') {
        quantity7.className = 'rdoActive';
    }
    if (quantity === 'quantity8') {
        quantity8.className = 'rdoActive';
    }
    if (quantity === 'quantity9') {
        quantity9.className = 'rdoActive';
    }
    if (quantity === 'quantity10') {
        quantity10.className = 'rdoActive';
    }
}

function setSizeTo(size) {
    'use strict';
    
    // Setting Defaults
    size6.className = 'rdo';
    size7.className = 'rdo';
    size8.className = 'rdo';
    size9.className = 'rdo';
    size10.className = 'rdo';
    size11.className = 'rdo';
    size12.className = 'rdo';
    
    // Setting The selected value
    if (size === 'size6') {
        size6.className = 'rdoActive';
    }
    
    if (size === 'size7') {
        size7.className = 'rdoActive';
    }
    
    if (size === 'size8') {
        size8.className = 'rdoActive';
    }
    
    if (size === 'size9') {
        size9.className = 'rdoActive';
    }
    
    if (size === 'size10') {
        size10.className = 'rdoActive';
    }
    
    if (size === 'size11') {
        size11.className = 'rdoActive';
    }
    if (size === 'size12') {
        size12.className = 'rdoActive';
    }
}


function setColorTo(color) {
    'use strict';
    
    // Setting Defaults
    colorOrange.className = 'rdoColor';
    colorGray.className = 'rdoColor';
    colorIndigo.className = 'rdoColor';
    colorBlue.className = 'rdoColor';
    colorPurple.className = 'rdoColor';
    
    // Setting Default Shadows
    colorOrange.style.boxShadow = "none";
    colorGray.style.boxShadow = "none";
    colorIndigo.style.boxShadow = "none";
    colorBlue.style.boxShadow = "none";
    colorPurple.style.boxShadow = "none";
    
    // Setting The selected value
    if (color === 'orange') {
        colorOrange.className = 'rdoColorActive';
        currentColorName = 'orange';
    }
    
    if (color === 'gray') {
        colorGray.className = 'rdoColorActive';
        currentColorName = 'gray';
    }
    
    if (color === 'indigo') {
        colorIndigo.className = 'rdoColorActive';
        currentColorName = 'indigo';
    }
    
    if (color === 'blue') {
        colorBlue.className = 'rdoColorActive';
        currentColorName = 'blue';
    }
    
    if (color === 'purple') {
        colorPurple.className = 'rdoColorActive';
        currentColorName = 'purple';
    }
}


function setActiveThumbTo(thumb) {
    'use strict';
    
    
    // Reseting all views
    thumb1.className = 'view';
    thumb2.className = 'view';
    thumb3.className = 'view';
    thumb4.className = 'view';
    thumb5.className = 'view';
    thumb6.className = 'view';
    
    // Setting The selected value
    if (thumb === 'thumb1') {
        thumb1.className = 'viewActive';
        currentView = 'main_view1';
    }
    if (thumb === 'thumb2') {
        thumb2.className = 'viewActive';
        currentView = 'main_view2';
    }
    if (thumb === 'thumb3') {
        thumb3.className = 'viewActive';
        currentView = 'main_view3';
    }
    if (thumb === 'thumb4') {
        thumb4.className = 'viewActive';
        currentView = 'main_view4';
    }
    if (thumb === 'thumb5') {
        thumb5.className = 'viewActive';
        currentView = 'main_view5';
    }
    if (thumb === 'thumb6') {
        thumb6.className = 'viewActive';
        currentView = 'main_view6';
    }
}

function setGradient(Element, firstColor, secondColor) {
    'use strict';
    
    // Old Browsers
    Element.style.background = firstColor;
    // FF3.6-15
    Element.style.background = "-moz-linear-gradient(top, " + firstColor + " 0%, " + secondColor + " 100%)";
    // Chrome10-25,Safari5.1-6
    Element.style.background = "-webkit-linear-gradient(top, " + firstColor + " 0%, " + secondColor + " 100%)";
    // W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+
    Element.style.background = "linear-gradient(to bottom, " + firstColor + " 0%, " + secondColor + " 100%)";
    // IE6-9
    Element.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + firstColor + ",  endColorstr=" + secondColor + ", GradientType=0)";
    
    
}

function setThemeTo(colorName) {
    'use strict';
    
    currentTheme = colorName;
    
    
    price = document.getElementById("price");
    radioActive = document.getElementsByClassName("rdoActive");
    radioInactive = document.getElementsByClassName("rdo");
    radioColorActive = document.getElementsByClassName("rdoColorActive");
    
    for (i = 0; i < radioInactive.length; i += 1) {
        radioInactive[i].style.color = "#878787";
        radioInactive[i].style.border = "2px solid #E6E6E6";
        radioInactive[i].style.backgroundColor = "#F5F5F5";
        radioInactive[i].style.boxShadow = "none";
    }
    
    
    if (colorName === 'orange') {
        price.style.color = orangeHex;
        radioColorActive[0].style.boxShadow = "0px 6px 16px 1px rgba(250,91,91,0.6)";
        for (i = 0; i < radioActive.length; i += 1) {
            radioActive[i].style.color = whiteHex;
            radioActive[i].style.border = "2px solid " + orangeHex;
            radioActive[i].style.backgroundColor = orangeHex;
            radioActive[i].style.boxShadow = "0px 6px 16px 1px rgba(250,91,91,0.6)";
        }
        
        setGradient(body, orangeGradient[0], orangeGradient[1]);
        body.style.transition = "all 1s";
    }
    
    if (colorName === 'gray') {
        price.style.color = grayHex;
        radioColorActive[0].style.boxShadow = "0px 6px 16px 1px rgba(141,141,141,0.6)";
        for (i = 0; i < radioActive.length; i += 1) {
            radioActive[i].style.color = whiteHex;
            radioActive[i].style.border = "2px solid " + grayHex;
            radioActive[i].style.backgroundColor = grayHex;
            radioActive[i].style.boxShadow = "0px 6px 16px 1px rgba(141,141,141,0.6)";
        }
        setGradient(body, grayGradient[0], grayGradient[1]);
        body.style.transition = "all 1s";
    }
    
    if (colorName === 'indigo') {
        price.style.color = indigoHex;
        radioColorActive[0].style.boxShadow = "0px 6px 16px 1px rgba(102,91,250,0.6)";
        for (i = 0; i < radioActive.length; i += 1) {
            radioActive[i].style.color = whiteHex;
            radioActive[i].style.border = "2px solid " + indigoHex;
            radioActive[i].style.backgroundColor = indigoHex;
            radioActive[i].style.boxShadow = "0px 6px 16px 1px rgba(102,91,250,0.6)";
        }
        setGradient(body, indigoGradient[0], indigoGradient[1]);
        body.style.transition = "all 1s";
    }
    
    
    if (colorName === 'blue') {
        price.style.color = blueHex;
        radioColorActive[0].style.boxShadow = "0px 6px 16px 1px rgba(62,182,226,0.6)";
        for (i = 0; i < radioActive.length; i += 1) {
            radioActive[i].style.color = whiteHex;
            radioActive[i].style.border = "2px solid " + blueHex;
            radioActive[i].style.backgroundColor = blueHex;
            radioActive[i].style.boxShadow = "0px 6px 16px 1px rgba(62,182,226,0.6)";
        }
        setGradient(body, blueGradient[0], blueGradient[1]);
        body.style.transition = "all 1s";
    }
    
    if (colorName === 'purple') {
        price.style.color = purpleHex;
        radioColorActive[0].style.boxShadow = "0px 6px 16px 1px rgba(135,62,226,0.6)";
        for (i = 0; i < radioActive.length; i += 1) {
            radioActive[i].style.color = whiteHex;
            radioActive[i].style.border = "2px solid " + purpleHex;
            radioActive[i].style.backgroundColor = purpleHex;
            radioActive[i].style.boxShadow = "0px 6px 16px 1px rgba(135,62,226,0.6)";
        }
        setGradient(body, purpleGradient[0], purpleGradient[1]);
    }
    
}

function setMainViewColor(colorName) {
    'use strict';
    currentColorName = colorName;
    mainView.style.background = "url('assets/img/" + colorName + "/" + currentView + ".png') no-repeat";
    mainView.style.backgroundRepeat = "no-repeat";
    mainView.style.backgroundSize = "contain";
}

function setMainViewImage(viewName) {
    'use strict';
    currentView = viewName;
    mainView.style.background = "url('assets/img/" + currentColorName + "/" + viewName + ".png') no-repeat";
    mainView.style.backgroundRepeat = "no-repeat";
    mainView.style.backgroundSize = "contain";
}

function setThumbViews(colorName) {
    'use strict';
    
    // SETTING THUMB 1
    thumbView1.style.background = "url('assets/img/" + colorName + "/thumb_view1.png') no-repeat";
    thumbView1.style.backgroundRepeat = "no-repeat";
    thumbView1.style.backgroundSize = "contain";
    thumbView1.style.backgroundPosition = "center center";
    
    // SETTING THUMB 2
    thumbView2.style.background = "url('assets/img/" + colorName + "/thumb_view2.png') no-repeat";
    thumbView2.style.backgroundRepeat = "no-repeat";
    thumbView2.style.backgroundSize = "contain";
    thumbView2.style.backgroundPosition = "center center";
    
    // SETTING THUMB 3
    thumbView3.style.background = "url('assets/img/" + colorName + "/thumb_view3.png') no-repeat";
    thumbView3.style.backgroundRepeat = "no-repeat";
    thumbView3.style.backgroundSize = "contain";
    thumbView3.style.backgroundPosition = "center center";
    
    // SETTING THUMB 4
    thumbView4.style.background = "url('assets/img/" + colorName + "/thumb_view4.png') no-repeat";
    thumbView4.style.backgroundRepeat = "no-repeat";
    thumbView4.style.backgroundSize = "contain";
    thumbView4.style.backgroundPosition = "center center";
    
    // SETTING THUMB 5
    thumbView5.style.background = "url('assets/img/" + colorName + "/thumb_view5.png') no-repeat";
    thumbView5.style.backgroundRepeat = "no-repeat";
    thumbView5.style.backgroundSize = "contain";
    thumbView5.style.backgroundPosition = "center center";
    
    // SETTING THUMB 6
    thumbView6.style.background = "url('assets/img/" + colorName + "/thumb_view6.png') no-repeat";
    thumbView6.style.backgroundRepeat = "no-repeat";
    thumbView6.style.backgroundSize = "contain";
    thumbView6.style.backgroundPosition = "center center";
}

function prepareEventHandlers() {
    'use strict';
    
    // VIEW EVENTS
    
    thumb1.onclick = function () {
        setActiveThumbTo('thumb1');
        setMainViewColor(currentColorName);
        setMainViewImage('main_view1');
    };
    thumb2.onclick = function () {
        setActiveThumbTo('thumb2');
        setMainViewColor(currentColorName);
        setMainViewImage('main_view2');
    };
    thumb3.onclick = function () {
        setActiveThumbTo('thumb3');
        setMainViewColor(currentColorName);
        setMainViewImage('main_view3');
    };
    thumb4.onclick = function () {
        setActiveThumbTo('thumb4');
        setMainViewColor(currentColorName);
        setMainViewImage('main_view4');
    };
    thumb5.onclick = function () {
        setActiveThumbTo('thumb5');
        setMainViewColor(currentColorName);
        setMainViewImage('main_view5');
    };
    thumb6.onclick = function () {
        setActiveThumbTo('thumb6');
        setMainViewColor(currentColorName);
        setMainViewImage('main_view6');
    };
    
    
    
    addToCart.onclick = function () {
        alert("Added to Cart");
    };
    
    // SIZE EVENTS
    
    size6.onclick = function () {
        setSizeTo('size6');
        setThemeTo(currentTheme);
    };
    
    size7.onclick = function () {
        setSizeTo('size7');
        setThemeTo(currentTheme);
    };
    
    size8.onclick = function () {
        setSizeTo('size8');
        setThemeTo(currentTheme);
    };
    
    size9.onclick = function () {
        setSizeTo('size9');
        setThemeTo(currentTheme);
    };
    
    size10.onclick = function () {
        setSizeTo('size10');
        setThemeTo(currentTheme);
    };
    
    size11.onclick = function () {
        setSizeTo('size11');
        setThemeTo(currentTheme);
    };
    
    size12.onclick = function () {
        setSizeTo('size12');
        setThemeTo(currentTheme);
    };
    
    
    // QUANTITY EVENTS
    
    quantity1.onclick = function () {
        setQuantityTo("quantity1");
        setThemeTo(currentTheme);
    };
    
    quantity2.onclick = function () {
        setQuantityTo("quantity2");
        setThemeTo(currentTheme);
    };
    
    quantity3.onclick = function () {
        setQuantityTo("quantity3");
        setThemeTo(currentTheme);
    };
    
    quantity4.onclick = function () {
        setQuantityTo("quantity4");
        setThemeTo(currentTheme);
    };
    
    quantity5.onclick = function () {
        setQuantityTo("quantity5");
        setThemeTo(currentTheme);
    };
    
    quantity6.onclick = function () {
        setQuantityTo("quantity6");
        setThemeTo(currentTheme);
    };
    
    quantity7.onclick = function () {
        setQuantityTo("quantity7");
        setThemeTo(currentTheme);
    };
    quantity8.onclick = function () {
        setQuantityTo("quantity8");
        setThemeTo(currentTheme);
    };
    quantity9.onclick = function () {
        setQuantityTo("quantity9");
        setThemeTo(currentTheme);
    };
    
    quantity10.onclick = function () {
        setQuantityTo("quantity10");
        setThemeTo(currentTheme);
    };
    
    
    
    // COLOR EVENT
    
    colorOrange.onclick = function () {
        setColorTo("orange");
        setMainViewColor("orange");
        setThumbViews("orange");
        setThemeTo("orange");
        
    };
    
    colorGray.onclick = function () {
        setColorTo("gray");
        setMainViewColor("gray");
        setThumbViews("gray");
        setThemeTo("gray");
    };
    
    colorIndigo.onclick = function () {
        setColorTo("indigo");
        setMainViewColor("indigo");
        setThumbViews("indigo");
        setThemeTo("indigo");
    };
    
    colorBlue.onclick = function () {
        setColorTo("blue");
        setMainViewColor("blue");
        setThumbViews("blue");
        setThemeTo("blue");
    };
    
    colorPurple.onclick = function () {
        setColorTo("purple");
        setMainViewColor("purple");
        setThumbViews("purple");
        setThemeTo("purple");
    };
    
}


window.onload = function () {
    'use strict';
    // Loading Events
    body = document.getElementById('body');
    
    // Getting Size Elements
    size6 = document.getElementById('size6');
    size7 = document.getElementById('size7');
    size8 = document.getElementById('size8');
    size9 = document.getElementById('size9');
    size10 = document.getElementById('size10');
    size11 = document.getElementById('size11');
    size12 = document.getElementById('size12');
    
    // Getting Quantity Elements
    quantity1 = document.getElementById('quantity1');
    quantity2 = document.getElementById('quantity2');
    quantity3 = document.getElementById('quantity3');
    quantity4 = document.getElementById('quantity4');
    quantity5 = document.getElementById('quantity5');
    quantity6 = document.getElementById('quantity6');
    quantity7 = document.getElementById('quantity7');
    quantity8 = document.getElementById('quantity8');
    quantity9 = document.getElementById('quantity9');
    quantity10 = document.getElementById('quantity10');
    
    // Getting Color Elements
    colorOrange = document.getElementById('colorOrange');
    colorGray = document.getElementById('colorGray');
    colorIndigo = document.getElementById('colorIndigo');
    colorBlue = document.getElementById('colorBlue');
    colorPurple = document.getElementById('colorPurple');
    
    // Getting Views
    mainView = document.getElementById('shoe');
    thumbView1 = document.getElementById('view1');
    thumbView2 = document.getElementById('view2');
    thumbView3 = document.getElementById('view3');
    thumbView4 = document.getElementById('view4');
    thumbView5 = document.getElementById('view5');
    thumbView6 = document.getElementById('view6');
    
    thumb1 = document.getElementById('thumb1');
    thumb2 = document.getElementById('thumb2');
    thumb3 = document.getElementById('thumb3');
    thumb4 = document.getElementById('thumb4');
    thumb5 = document.getElementById('thumb5');
    thumb6 = document.getElementById('thumb6');
    
    addToCart = document.getElementById('addToCart');
    
    prepareEventHandlers();
};



