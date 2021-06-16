const mobileWidth = 599;
const backToTopScroll = 250;
var current = {
    scrollTick: false,
    lastNavElement: null,
}

jQuery(document).ready(function() {
    // navigation toggle
    $("#toggle-nav-btn").on("click", function(e) {
        toggleNavMenu(this);
        toggleStorage("nav-expanded");
    });
    if (sessionStorage.getItem("nav-expanded") === "true") toggleNavMenu($("#toggle-nav-btn"));
    else if (window.innerWidth > mobileWidth && sessionStorage.getItem("nav-expanded") !== "false") toggleNavMenu($("#toggle-nav-btn"));
    // navigation dropdown toggle
    $("nav .dd-btn").on("click", function(e) {
        toggleNavDropdown(this);
        toggleStorage($(this).attr("id")+"-expanded");
    });
    for (let btn of $("nav .dd-btn")) {
        if (sessionStorage.getItem($(btn).attr("id")+"-expanded") === "true") toggleNavDropdown(btn);
    }

    // set role for all markdown notices
    let notices = document.getElementsByClassName("notices");
    for (let i = 0; i < notices.length; i++) {
        notices[i].setAttribute("role", "note");
    }

    // other functions
    window.onscroll = function(e) {
        if (!current.scrollTick) {
            setTimeout(function () {
                toggleBackToTop();
                current.scrollTick = false;
            }, 100);
        }
        current.scrollTick = true;
    }

    // TODO: ga.js can be found in grav-theme-default/js/tmp/
    //if (typeof gaProperty !== "undefined") gaStartup();

    // TODO: check last nav element - see web dev project for example (I think)

    // TODO: Content transition - check grav-theme-default/js/tmp/sidenav.js

    // TODO: temp - may go here, may go elsewhere
    addExtraJs();
});

// button functions
function toggleNavMenu(el) {
    $(el).toggleClass("expanded");
    $("#" + $(el).attr("data-toggle")).toggleClass("hide");
    toggleExpanded(el);
    //$("body").toggleClass("sidenav-hidden");
}
function toggleNavDropdown(el) {
    if ($(el).hasClass("disabled")) return;
    $(el).parent("li").toggleClass("expanded");
    toggleExpanded(el);
}

// simple functions
function toggleExpanded(el) {
    if ($(el).attr("aria-expanded") === "true") $(el).attr("aria-expanded", "false");
    else $(el).attr("aria-expanded", "true");
}
function toggleStorage(varName) {
    if (sessionStorage.getItem(varName) === "true") sessionStorage.setItem(varName, "false");
    else sessionStorage.setItem(varName, "true");
}
function toggleBackToTop() {
    button = document.getElementById("back-to-top");
    if (document.body.scrollTop > backToTopScroll || document.documentElement.scrollTop > backToTopScroll) {
        button.classList.add("active");
    } else {
        button.classList.remove("active");
    }
}

function addExtraJs() {
    // tablists
    $("button[role='tab']").on('click keyup', function(e) {
        if (e.type === "click" || e.which === 32 || e.which === 13) {
            let parent = $(this).parents(".tabs").first();
            // deactivate old tab
            $(parent).find("button.active").attr("aria-selected", "false");
            $(parent).find("button.active").attr("tabindex", "-1");
            $(parent).find(".active").removeClass("active");
            // activate new tab
            $(this).addClass("active");
            $(this).attr("aria-selected", "true");
            $(this).attr("tabindex", "0");
            $(parent).find("#"+$(this).attr("aria-controls")).addClass("active");
        }
        else if (e.which === 39 || e.which === 37 || e.which === 36 || e.which === 35) {
            e.preventDefault();
            let tabs = $(this).parent().children("button");
            if (e.which === 39) {
                // right arrow
                if ($(this).next("button").length > 0) $(this).next("button")[0].focus();
                else tabs[0].focus();
            } else if (e.which === 37) {
                // left arrow
                if ($(this).prev("button").length > 0) $(this).prev("button").focus();
                else tabs[tabs.length-1].focus();
            } else if (e.which === 36) {
                // home
                tabs[0].focus();
            } else if (e.which === 35) {
                // end
                tabs[tabs.length-1].focus();
            }
        }
    });
}