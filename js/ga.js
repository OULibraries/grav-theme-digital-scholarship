// TODO: Mention in documentation in case users want to change this text
const GA_BTN_ALLOW_TEXT = "Allow Google Analytics on This Site";
const GA_BTN_DISABLE_TEXT = "Opt Out of Google Analytics on This Site";
const GA_BTN_DISABLED_STATUS = "You have opted out of Google Analytics.";
const GA_BTN_ALLOWED_STATUS = "Thank you for opting back in to Google Analytics!";

$(document).ready(function() {
    if (typeof ga_property !== "undefined") startGoogleAnalytics();
});

// Code to enable working with Google Analytics (mostly for opting out)
const disable_ga = "ga-disable" + ga_property;

// disable tracking if the opt out cookie already exists
if (document.cookie.indexOf(disable_ga + "=true") > -1) window.sessionStorage.setItem("ga_disabled", true);

function startGoogleAnalytics() {
    // make the opt out/back in button work
    $("#ga-toggle-btn").on("click", function() {
        let allowed = (this.getAttribute("data-tracking") === "false"); // if tracking is disabled then toggling the button enables tracking
        document.cookie = disable_ga + "=true; expires=Thu, 31 Dec " + (allowed ? "2099" : "1998") + "23:59:59 UTC; path=/";
        window.sessionStorage.setItem("ga_disabled", !allowed);
        // modify button and status
        $("#ga-toggle-btn").text(allowed ? GA_BTN_DISABLE_TEXT : GA_BTN_ALLOW_TEXT).attr("data-tracking", allowed);
        $("#ga-status").text(allowed ? GA_BTN_ALLOWED_STATUS : GA_BTN_DISABLED_STATUS);
    });
    // check if google analytics has previously been disabled
    if (window.sessionStorage.getItem("ga_disabled") === "true") {
        $("#ga-toggle-btn").text(GA_BTN_ALLOW_TEXT).attr("data-tracking", "false");
        $("#ga-status").text(GA_BTN_DISABLED_STATUS);
    }
}