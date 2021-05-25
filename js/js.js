
// Global variables
var color1 = 1;
var g, ga;
var colortext = "var(--bodylight-text)";
var hov = document.querySelectorAll(".bgcolor2");
var hov3 = document.querySelectorAll(".bgcolor3");
var shadow = document.querySelectorAll(".b-shadow");
var shadow2 = document.querySelectorAll(".border-shadow");

// Change Color function
function changecolor(a, e) {
    var b = document.querySelectorAll(".color-" + color1);
    var logo = document.getElementById("logo" + color1);
    var bordercolor = document.querySelectorAll(".bordercolor");
    var colorch = document.querySelectorAll(".textcolor-change");
    var bgcolor = document.querySelectorAll(".bgcolorch");
    bordercolor.forEach(bor => {
        bor.style.borderColor = "" + e;
    })
    colorch.forEach(bor => {
        bor.style.color = "" + e;
    })
    bgcolor.forEach(bor => {
        bor.style.backgroundColor = "" + e;
    })
    b.forEach(function (d) {
        d.removeAttribute("class", "color-" + color1);
    });
    b.forEach(d => {
        color1 = a;
        d.setAttribute("class", "color-" + color1 + " textcolor")
    })
    ga = a;
    var c = document.getElementById("active-1");
    var c2 = document.getElementById("active-2");
    c.style.color = "" + e;
    c2.style.color = "" + e;
    hov.forEach(a => {
        a.style.backgroundColor = "" + e;
    });
    hov3.forEach(a => {
        a.style.color = "" + e;
    });
    // when hover something color change
    hov.forEach(r => {
        r.addEventListener("mouseover", function () {
            r.style.color = "" + e;
            r.style.backgroundColor = "white";
        });
        r.addEventListener("mouseout", function () {
            r.style.color = "white";
            r.style.backgroundColor = "" + e;
        });
    })
    hov3.forEach(r => {
        r.addEventListener("mouseover", function () {
            r.style.color = "white";
            r.style.backgroundColor = "" + e;
        });
        r.addEventListener("mouseout", function () {
            r.style.color = "" + e;
            r.style.backgroundColor = "rgba(0,0,0,0)";
        });
    })
    g = e;
    logo.removeAttribute("id", "logo" + color1);
    logo.setAttribute("id", "logo" + color1)

}

// when Navbar link clicked
var a2 = 1;
function clickc(a, d) {
    var b = document.getElementById("active-1");
    b.style.color = colortext;
    b.removeAttribute("id", "active-1")
    a.setAttribute("id", "active-1")
    var c = document.getElementById("active-1");
    var b2 = document.querySelectorAll(".color-" + color1);
    b2.forEach(r => {
            r.addEventListener("mouseover", function () {
                r.style.color = "red";
                r.style.color = "" + g;
            });
            r.addEventListener("mouseout", function () {
                r.style.color = colortext
                activef()
            });
        })
    c.style.color = "red";
    c.style.color = "" + g;
    var a1 = document.getElementsByClassName("a" + d)[0];
    var a3 = document.getElementsByClassName("a" + a2)[0];
    a1.style.display = "block";
    a3.style.zIndex = "1";
    a1.style.display = "block"
    a1.style.animation = "fadeout 1s forwards";
    a3.style.animation = "none"
    setTimeout(function () {
        a3.style.display = "none";
    }, 1000);
    var abd1 = window.innerWidth;
    if (abd1 < 900) {
        bars()
    }
    a2 = d;
}
// Setting icon clicked
var scount = 1;
function opensetting() {
    var setting1 = document.getElementsByClassName("setting")[0];
    if (scount === 0) {
        setting1.style.right = "-260px";
        scount = 1;
    } else {
        setting1.style.right = "0px";
        scount = 0;
    }
}
// Change body color and texts color/ dark or light
var dark = 0;
function bgchange() {
    var setting1 = document.getElementsByClassName("bg-change")[0];
    var bgcolor = document.querySelectorAll(".bgcolor");
    var bgcolord = document.querySelectorAll(".bgcolord")
    var textcolor = document.querySelectorAll(".textcolor")
    var header = document.querySelectorAll(".header")
    var b = document.querySelectorAll(".color-" + color1);
    if (dark === 0) {
        setting1.style.transform = "translate(30px,0)";
        colortext = "var(--bodydark-text)";
        bgcolor.forEach(a => {
            a.style.backgroundColor = "var(--bodydark-bg-light)";
            a.style.borderColor = "var(--bodydark-border-dark)"
        });
        bgcolord.forEach(a => {
            a.style.backgroundColor = "var(--bodydark-bg-dark)";
        });
        header.forEach(a => {
            a.style.color = "var(--bodydark-heading)";
        });
        textcolor.forEach(a => {
            a.style.color = colortext;
        });
        shadow.forEach(r => {
            r.addEventListener("mouseover", function () {
                r.style.boxShadow = "0px 0px 15px 5px rgba(255,255,255,0.2)"
            });
            r.addEventListener("mouseout", function () {
                r.style.boxShadow = "0px 0px 15px 5px rgba(255,255,255,0)"
            });
        })
        shadow2.forEach(a => {
            a.style.boxShadow = "0px 0px 15px 5px rgba(255,255,255,0.2)"
        })
        b.forEach(r => {
            r.addEventListener("mouseover", function () {
                r.style.color = "red";
                r.style.color = "" + g;
            });
            r.addEventListener("mouseout", function () {
                r.style.color = colortext
                activef()
            });
        })
        dark = 1;
    } else {
        colortext = "var(--bodylight-text)";
        setting1.style.transform = "translate(0px,0)";
        bgcolor.forEach(a => {
            a.style.backgroundColor = "var(--bodylight-bg-light)";
            a.style.borderColor = "var(--bodylight-border-light)"
        });
        bgcolord.forEach(a => {
            a.style.backgroundColor = "var(--bodylight-bg-dark)";
        });
        textcolor.forEach(a => {
            a.style.color = colortext;
        });
        header.forEach(a => {
            a.style.color = "var(--bodylight-heading)";
        });
        shadow.forEach(r => {
            r.addEventListener("mouseover", function () {
                r.style.boxShadow = "0px 0px 15px 5px rgba(0, 0, 0, 0.1)"
            });
            r.addEventListener("mouseout", function () {
                r.style.boxShadow = "0px 0px 15px 5px rgba(255,255,255,0)"
            });
        })
        shadow2.forEach(a => {
            a.style.boxShadow = "0px 0px 15px 5px rgba(0, 0, 0, 0.1)"
        })
        b.forEach(r => {
            r.addEventListener("mouseover", function () {
                r.style.color = "red";
                r.style.color = "" + g;
            });
            r.addEventListener("mouseout", function () {
                r.style.color = colortext
                activef()
            });
        })
        dark = 0;
    }
    activef()
}

// active's style color
function activef() {
    var ca = document.getElementById("active-1");
    ca.style.color = "red";
    ca.style.color = "" + g + "";
    var c2 = document.getElementById("active-2");
    c2.style.color = "red";
    c2.style.color = "" + g;
}
// nav open and close bar clicked
var nav = document.getElementsByClassName("aside")[0];
var close = document.getElementsByClassName("close")[0];
var ch = document.getElementById("chiz12");
var ch1 = document.getElementById("chiz1");
var ch2 = document.getElementById("chiz3");
var i = 0;
function bars() {
    if (i == 0) {
        close.style.right = "-40px";
        ch.style.animation = "chiz2 .7s forwards";
        ch1.style.animation = "chiz22 .7s forwards";
        ch2.style.animation = "chiz23 .7s forwards";
        nav.style.left = "0px";
        i = 1;
    } else {
        i = 0
        ch1.style.animation = "chiz24 .7s forwards";
        ch2.style.animation = "chiz25 .7s forwards";
        ch.style.animation = "chiz21 .7s forwards";
        nav.style.left = "-270px";
        close.style.right = "-70px";
    }
}
// end

// when portfoliyo thing clicked in portfoliyo section
zoom_list = [0, 1, 2, 3, 4, 5]
function portfoliyo(a, ad) {
    var b = document.getElementById("active-2");
    b.style.color = colortext;
    b.removeAttribute("id", "active-2")
    a.setAttribute("id", "active-2")
    var c = document.getElementById("active-2");
    var d = document.querySelectorAll(".color-" + color1);
    c.style.color = "red";
    c.style.color = "" + g;
    d.forEach(r => {
        r.addEventListener("mouseover", function () {
            r.style.color = "red";
            r.style.color = "" + g;
        });
        r.addEventListener("mouseout", function () {
            r.style.color = colortext
            activef()
        });
    })
    var portimg4 = document.querySelectorAll(".img4")
    portimg4.forEach(abb => {
        abb.style.transform = "scale(0)"
        abb.style.width = "0";
    })
    var portimg1 = document.querySelectorAll(".img1")
    var portimg2 = document.querySelectorAll(".img2")
    var portimg3 = document.querySelectorAll(".img3")
    setTimeout(function () {
        switch (ad) {
            case 1:
                portimg2.forEach(function (a) {
                    a.style.display = "none";
                })
                portimg3.forEach(function (a) {
                    a.style.display = "none";
                })
                zoom_list = [0, 2, 3]
                break;
            case 2:
                portimg1.forEach(function (a) {
                    a.style.display = "none";
                })
                portimg3.forEach(function (a) {
                    a.style.display = "none";
                })
                zoom_list = [1, 4]
                break;
            case 3:
                portimg2.forEach(function (a) {
                    a.style.display = "none";
                })
                portimg1.forEach(function (a) {
                    a.style.display = "none";
                })
                zoom_list = [5]
                break;
            case 4:
                zoom_list = [0, 1, 2, 3, 4, 5]
                break;
        }
    }, 500)
    var portimg = document.querySelectorAll(".img" + ad)
    portimg.forEach(abd => {
        abd.style.display = "block";
        var abd1 = window.innerWidth;
        if (abd1 < 700) {
            if (abd1 < 450) {
                abd.style.width = "97.5%";
            } else {
                abd.style.width = "47.5%";
            }
        } else {
            abd.style.width = "31%";
        }
        abd.style.transform = "scale(0)";
        abd.style.animation = "imganim2 1s forwards";
    });
}
zoom_number = 0
// zoom close
function close_z(a) {
    // body...
    a.style.display = "none";
    zoom = document.querySelector(".port-img");
    zoom1.style.display = "none";
}
// zoom image
function zoom_in(zoom2) {
    zoom1 = document.querySelector(".port-img");
    zoom1.style.display = "flex";
    zoom = document.querySelectorAll(".zoom-img");
    zoom[zoom2].style.display = "block";
    zoom_number = zoom_list.indexOf(zoom2)
}
// zoom naxt
function zoom_next(zoom_n) {
    // [0, 2, 3]
    zoom = document.querySelectorAll(".zoom-img");
    l = zoom_list.length;
    if (zoom_n == 1) {
        if (zoom_number == -1) {
            zoom_number = 0
        }
        zoom[zoom_list[zoom_number]].style.display = "none";
        if (zoom_number < 1) {
            zoom_number = l
        }
        zoom[zoom_list[zoom_number - 1]].style.display = "block";

        zoom_number -= 1
    } else {
        if (zoom_number == l) {
            zoom_number = l - 1
        }
        zoom[zoom_list[zoom_number]].style.display = "none";
        if (zoom_number >= (l - 1)) {
            zoom_number = -1
        }
        zoom[zoom_list[zoom_number + 1]].style.display = "block";
        zoom_number += 1
    }
}