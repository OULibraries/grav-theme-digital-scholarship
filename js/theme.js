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

    // icon button functions
    setIconBtnFunctions();

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

    modifyLinks();

    // ---------- Supported Plugin Handling ---------- //

    // Markdown Notices (set role for notices)
    // Note: At the moment, NVDA ignores this, and presumably other screen readers will as well
    $(".notices").attr("role", "note");

});

/**
 * If the link_new_tab setting is enabled, modify all external links in the main and footer sections. Links that already have a target attribute set are ignored. When modifying the links: Change target to _blank, add external link icon for sighted users, and add hidden message for screen reader users. Image links require an additional class.
 */
function modifyLinks() {
    if (typeof(link_new_tab) != 'undefined' && link_new_tab) {
        $("main a:not([target])").add("footer a:not([target])").each(function() {
            let link = $(this);
            // make sure link is not same-page or same-site link
            let href = link.attr("href").replace('https', 'http');
            if (!href.startsWith("#") && (!(href.startsWith(base_url) || !href.startsWith('http')) /*|| (typeof(same_site_tab) != 'undefined' && same_site_tab)*/)) {
                // change target and modify link
                link.attr("target", "_blank");
                link.append("<span class='sr-only'>, Opens in new window</span><i aria-hidden='true' class='fa fa-external-link'></i>");
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

/**
 * A basic function needed for any toggle buttons that expand/collapse content.
 * @param {Object} btn HTML <button> element
 */
function toggleExpanded(btn) {
    btn.setAttribute("aria-expanded", btn.getAttribute("aria-expanded") == "true" ? "false" : "true");
}
/**
 * Simple checker using the viewport width. Returns true for small screens, false for larger.
 */
 function isMobile() {
    return (window.innerWidth < MOBILE_WIDTH);
}
/**
 * Checks to see if a given event is a click. For keypress events, specifically checks for spacebar and enter, as either option should count as a click.
 * @param {Event} e 
 * @returns Boolean
 */
function isClickEvent(e) {
    return (e.type === "click" || e.which === 32 || e.which === 13);
}
/**
 * Some basic handlers that apply to everything with the same class
 */
function setIconBtnFunctions() {
    $(".content-toggle-btn").on("click", toggleContent);
    $(".dialog-open-btn").on("click", function() { openDialog(this.getAttribute("data-opens"), this); });
    $(".dialog-close-btn").on("click", function() { closeDialog(this); });
}
/**
 * Toggles expand/collapse status of a section of content. Called when a content toggle button is clicked.
 * @param {Event} e 
 */
function toggleContent(e) {
    $(this).parent().toggleClass('expanded');
    toggleExpanded(this);
}