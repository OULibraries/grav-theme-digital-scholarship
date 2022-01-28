const MOBILE_WIDTH = 599; // anything under 600 pixels wide is counted as a mobile device
const BACK_TO_TOP_Y = 250; // at 250px of scroll, the back to top button will appear

$(document).ready(function() {
    
    // navigation functions
    $("#nav-toggle-btn").on("click", function() {
        this.classList.toggle("expanded");
        $("#" + this.getAttribute("data-toggle")).toggleClass("hide");
        togglePopupButton(this);
    });
    $("#main-nav-list .dd-btn").on("click", function() {
        if (this.hasAttribute("disabled")) return;
        this.parentElement.classList.toggle("expanded");
        togglePopupButton(this);
    });

    // back to top link (make sure it scrolls the user to the top, just in case)
    $("#back-to-top").on("click", function() { window.scrollTo(0, 0); });

    // window scroll function (to prevent overloading) - any extension can modify the doWindowScrolledAction
    let window_scroll_tick = false;
    window.onscroll = function() {
        if (!window_scroll_tick) {
            setTimeout(function() {
                doWindowScrollAction();
                window_scroll_tick = false;
            }, 100);
        }
        window_scroll_tick = true;
    }

    // TODO: Just apply to main, or to header/footer/other?
    // link behavior
    if (link_new_tab) {
        // first change target
        $("main a").attr("target", "_blank");
        // but make sure this doesn't apply to the back to top button
        $("#back-to-top").removeAttr("target");
    }
    // any links that open in new tab should identify themselves visually and to AT
    $("main a[target='_blank']").append("<span class='sr-only'>, Opens in new window</span><i aria-hidden='true' class='fas fa-external-link-alt'></i>");

    // ---------- Supported Plugin Handling ---------- //

    // Markdown Notices (set role for notices)
    $(".notices").attr("role", "note");

    // TODO: Other plugins?
    // Note: Some code for tablists could be found in theme.js for the original basic theme
});

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

/**
 * Convenience function for setting/removing aria-expanded for buttons with aria-haspopup="true". Note that the WAI specifications, as of Jan 19, 2022 recommend not including aria-expanded when the popup content is not shown instead of setting it to false. (Setting to false would still be okay though.)
 * @param btn - The HTML button element
 */
function togglePopupButton(btn) {
    if (btn.hasAttribute("aria-expanded")) btn.removeAttribute("aria-expanded");
    else btn.setAttribute("aria-expanded", "true");
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