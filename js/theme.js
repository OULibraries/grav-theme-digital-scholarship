const MOBILE_WIDTH = 767; // anything under 768 pixels wide is counted as a mobile device
const BACK_TO_TOP_Y = 250; // at 250px of scroll, the back to top button will appear
const MEDIUM_WIDTH = 1024; // for nav

$(document).ready(function() {
    
    // navigation functions
    // nag-toggle-btn should show/hide the content specified by data-toggle attribute
    $("#nav-toggle-btn").on("click", function() {
        this.classList.toggle("expanded");
        $("#" + this.getAttribute("data-toggle")).toggleClass("collapsed");
        toggleExpanded(this);
    });
    // nav dd-btns should show/hide content contained by parent element (excepting itself) unless disabled
    $("#main-nav-list .dd-btn").on("click", function() {
        if (this.hasAttribute("disabled")) return;
        this.parentElement.classList.toggle("expanded");
        toggleExpanded(this);
    });
    expandNav();

    // back to top link (make sure it scrolls the user to the top, just in case)
    $("#back-to-top").on("click", function() { window.scrollTo(0, 0); });

    // window scroll function (to prevent overloading) - any extension can modify the doWindowScrolledAction
    let window_scroll_tick = false; // TODO: Move this outside of the ready function
    window.onscroll = function() {
        if (!window_scroll_tick) {
            setTimeout(function() {
                doWindowScrollAction();
                window_scroll_tick = false;
            }, 100);
        }
        window_scroll_tick = true;
    }

    modifyLinks();

    // ---------- Supported Plugin Handling ---------- //

    // Markdown Notices (set role for notices)
    $(".notices").attr("role", "note");

    // TODO: Other plugins?
    // Note: Some code for tablists could be found in theme.js for the original basic theme
});

function modifyLinks() {
    if (typeof(link_new_tab) != 'undefined' && link_new_tab) {
        $("main a:not([target])").add("footer a:not([target])").each(function() {
            let link = $(this);
            // make sure link is not same-page or same-site link
            let href = link.attr("href").replace('https', 'http');
            if (!href.startsWith("#") && (!(href.startsWith(base_url) || !href.startsWith('http')) || (typeof(same_site_tab) != 'undefined' && same_site_tab))) {
                // change target and modify link
                link.attr("target", "_blank");
                link.append("<span class='sr-only'>, Opens in new window</span><i aria-hidden='true' class='fa fa-external-link-alt'></i>");
                // extra modification for image links
                link.children("img").parent().addClass("img-link-external");
            }
        });
    }
}

/**
 * A function to expand the nav menu if the display is a certain size
 */
function expandNav() {
    // check if size is between mobile and medium
    if ((window.innerWidth > MOBILE_WIDTH) && (window.innerWidth < MEDIUM_WIDTH)) {
        // nav menu should be expanded by default
        $("#nav-toggle-btn").click();
    }
}

/**
 * A function that can be overwritten. Overwriting function can easily manually call toggleBackToTop if it still wants that functionality.
 */
function doWindowScrollAction() {
    toggleBackToTop();
}
/**
 * If the current scroll value is greater than that determined by BACK_TO_TOP_Y, show the button. Note: Checking with both body and documentElement for thoroughness
 */
function toggleBackToTop() {
    if (document.body.scrollTop > BACK_TO_TOP_Y || document.documentElement.scrollTop > BACK_TO_TOP_Y) $("#back-to-top").addClass("active");
    else $("#back-to-top").removeClass("active");
}


function toggleExpanded(btn) {
    btn.setAttribute("aria-expanded", btn.getAttribute("aria-expanded") == "true" ? "false" : "true");
}
/**
 * Simple checker using the viewport width. Returns true for small screens, false for larger.
 */
 function isMobile() {
    return (window.innerWidth < MOBILE_WIDTH);
}

function isClickEvent(e) {
    return (e.type === "click" || e.which === 32 || e.which === 13);
}