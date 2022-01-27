<!-- TODO: Remodel to match rewrite properly -->
# Grav Theme Basic

<!-- TODO: Theme screenshot -->

**Basic** is a Grav theme designed to provide a functional, if basic, Grav website that meets accessibility standards and can be extended with other themes and plugins. It is currently required to provide the base for the Leaflet Tour plugin.

<!-- TODO: demo website -->

## Requirements

You will need a Grav site in order to use this theme. The site will need to be running Grav version 1.7.0 or higher.

## Installation

<!-- TODO: Develop skeleton and provide instructions on setting up the skeleton -->

Installing the Basic theme can be done in one of two ways. The [Grav Package Manager (GPM)](https://learn.getgrav.org/cli-console/grav-cli-gpm) installation method enables you to install the theme with the admin panel or a terminal command, while the manual method enables you to do so via a zip file.

<!-- TODO: Add to GPM and remove this statement -->
Note that the GPM method will not be available until the theme has actually been released publicly and added to the GPM.

### GPM Installation (Preferred)

The simplest way to install this theme is via the admin panel, assuming you are using the admin plugin. To install, go to the Themes tab on your dashboard, click the **Add** button, look up this theme, and then click **Install**.

Alternatively, you can install this theme using your system's terminal or command line. From the root of your Grav directory type `bin/gpm install basic`. This will install the Basic theme into your `/user/themes` directory within Grav. Its files will be found under `your-site/grav/user/themes/basic`.

### Manual Installation

To install this theme manually:

<!-- TODO: Link to theme repo and possibly getgrav website -->
1. Download the zip file from the theme repository or by finding the files on the GetGrav website.
2. Upload the file to `your-site/grav/user/themes`.
3. Unzip/extract the file.
4. Rename the folder to `basic`.

The filepath to the theme should now be `your-site/grav/user/themes/basic`.

## Updating

Updates to the Basic theme may be published in the future. As with installation, you can update the theme through the Grav Package Manager (via the admin panel or your system's terminal) or manually.

Please note: Any changes you have made to any of the files in the theme will be overwritten. Any files located elsewhere (for example, a .yaml settings file placed in `user/config/themes`) will remain intact. Therefore, it is strongly discouraged to make any changes directly to theme files.

### GPM Update (Preferred)

The simplest way to update this theme is via the admin panel. To do this, go to the Themes tab on your dashboard and check for updates. The dashboard will indicate if any themes have available updates and will allow you to update them individually or all at once.

Alternatively, you can update this theme using your system's terminal or command line. From the root of your Grav directory type `bin/gpm update basic`. This will check if the Basic theme has any updates. If it does, you will be asked whether or not you wish to update. To continue, type `y` and hit enter.

### Manual Update

To update this theme manually:

1. Delete the `your-site/user/themes/basic` directory.
2. Follow the manual installation directions from this readme.
3. Clear the Grav cache by going to your root Grav directory and entering `bin/grav clear-cache` on the terminal.

Note: If you are using the admin panel, there is also a button to clear the cache in the navigation sidebar.

## Getting Started

If you want to set Basic as the default theme and are using the Admin plugin, you can do so by going to the Themes tab, finding Basic, and clicking **Activate**. Otherwise, set it as the default theme by following these steps:

<!-- TODO: Make it so that the following steps stand out less than the preceding paragraph, since the admin panel is the better option -->

1. Navigate to `your-site/grav/user/config/` in your file system.
2. Open the **system.yaml** file.
3. Change the `theme:` setting to `theme: basic`.
4. Save your changes.
5. Clear the Grav cache by going to your root Grav directory and entering `bin/grav clear-cache` on the terminal.

Once this is done, you should be able to see the new theme on the frontend. Keep in mind any customizations made to a previous theme will not be reflected in the new one.

### Basic Configuration

On the theme configuration page:

<!-- TODO: Remove notes when no longer applicable -->

1. If desired, you can upload a favicon to represent your site.
2. If you want to upload a logo for the site header, refer to the relevant section of this readme. <!-- TODO: link -->
3. You can enable Google Analytics by following the information included in the Features section of this document. (Note: Google Analytics is not yet included)
4. Pick your preferred theme color. (Note: Color customization options are not yet included)
<!-- TODO: Option to set link default behavior -->

Also, make sure to check out this document for general plugin and configuration recommendations, as well as essential accessibility information.

## Features

### Plugins

This theme is designed to work well with the following plugins:

- Markdown Notices
- Highlight
- Breadcrumbs

<!-- TODO: Add additional plugins, possibly. Remove breadcrumbs note. -->

Note: The breadcrumbs plugin integration currently requires a bit more work.

Make sure to turn off any built-in CSS from the plugin configuration pages. The theme makes certain modifications, primarily to improve accessibility, which may be overwritten by the built-in plugin CSS. **Failure to turn off built-in CSS may lead to accessibility violations and/or ugly content.**

The Git Sync plugin is also strongly recommended as a way to backup your work.

### Content Creation

Refer to general Grav instructions on how to add pages and add content to those pages.

You may want a markdown cheatsheet if you have not used it before.

Refer to general accessibility instructions to make sure you create accessible content.

<!-- TODO: Also link to some general info on using grav and some general accessibility info (and to a markdown cheatsheet) -->

### Google Analytics

<!-- TODO: Review instructions to make sure they are up to date -->
<!-- TODO: Add instructions as necessary for ga statement and/or opt out button -->

Requirements:
- Google Analytics account

This theme is set up to work with Google Analytics. If you are not planning to use Google Analytics, you can toggle this option off and ignore the rest of this section.

1. Sign in or create a [Google Analytics](https://analytics.google.com/analytics/web/#/home) account.
2. Select the Admin tab.
3. Select an account from the dropdown menu in the Account column.
4. Click on Create Property in the Property column.
5. Fill out the property settings.
6. Create a new Web Data Stream. This option will be provided immediately after creating a new property, but it can also be selected by clicking on Data Streams under the Property column and choosing Add Stream.
7. From the data stream, copy the Measurement ID (a string beginning with G-)
8. Add the measurement ID to the theme configuration (GA Measurement ID).

### Footer Customization

<!-- TODO: If you are using the theme skeleton, a folder called modules with a page called footer has been provided if you wish to include custom footer text. The footer page currently has no content, but any added content will be displayed in the footer on all pages. Neither the modules folder nor the footer page are routable, so they will not appear in the main navigation or the top/bottom page navigation. -->

<!-- TODO: Link to skeleton -->

<!-- If you do not have the modules folder and footer page, you can set them up manually. -->

1. Add a new page.
    1. Page Title: modules
    2. Parent Page: `<root> /`
    3. Page Template: Default
    4. Visible: No
2. Edit the page configuration.
    1. Under Advanced, set Routable to Disabled.
    2. Can also set Visible to Disabled, although this shouldn't be necessary.
    3. Save the page.
3. Add another new page.
    1. Page Title: footer
    2. Parent Page: `/modules`
    3. Page Template: Default
    4. Visible: No
3. Edit the page configuration.
    1. Under Advanced, set Routable to Disabled.
    2. Can also set Visible to Disabled, although this should not be necessary.
    4. Save the page.

You can add custom footer text or other content using the footer page. Any added conent will be displayed in the footer section of all pages on the website. Note that because neither the modules folder nor the footer page are routable, they will not appear in the site navigation.

### Accessibility

<!-- TODO: Provide notes/documentation for accessibility -->

## Configuration Options

The configuration options for the theme and included page templates are detailed below. The label associated with the option in the admin panel interface will be provided, along with the yaml name in parantheses. Additional notes are included as necessary.

### Theme Configuration

If editing this manually, make sure to copy the `/user/themes/basic/basic.yaml` file to the `/user/config/themes/` folder and modify the copy. If you modify the original theme file directly, any changes will be lost with future updates.

<!-- TODO: Provide table for config options -->

- color scheme
- favicon
- link behavior
- header title (and custom text)
- title url (and custom url)
- logo (and alt text)
- logo url
- google analytics (and id)
- ga statement and opt out

#### Logo Options

There are several options for customizing the site title/logo. By default the site title will be displayed at the top of all pages, and will link to the home page.

1. Keep the default. The site title will be displayed at the top of every page and will function as a link to the home page.
    1. Do not change any of the relevant configuration options.
2. Keep the site title, but make it regular text instead of a link.
    1. Enable the Remove Home URL option.
3. Replace the site title with some other text.
    1. Use the Custom Logo Text option.
    2. You can still choose whether or not the text will link to the site's home page (Remove Home URL).
4. Remove the title text entirely.
    1. Enable the Remove Site Title option.
    2. This will only work if you have added a logo file that will be used instead.

Regardless of how you deal with the logo text, you also have the option to add a logo image. You can either replace any text entirely with the image (using Remove Site Title), or you can display the image in addition to the text.

1. Upload a logo image. Make sure it is a reasonable size.
2. Optionally, add a URL to make the image a link.
3. Add appropriate alt text.

#### Defaults

<!-- TODO: default for ga.statement -->
```yaml
enabled: true
color_scheme: 'default'
favicon:
link_new_tab: false
title:
    option: 'default'
    custom:
    url: 'default'
    custom_url:
logo:
    file:
    alt:
    url:
ga:
    enable: true
    id:
    statement:
    opt_out: true
```

## Additional Information

<!-- TODO: Contribution - SGCI? anyone else? -->

This theme uses the MIT license. Please feel free to modify as you like.

<!-- TODO: link -->
If you find any issues, please report them on the theme repository or by emailing digitalscholarship@ou.edu. If you know how to fix the issue, you are welcome to make a pull request on the repository.

While the theme does not currently make use of them, code has been added to allow for accessible modal dialogs. This code has been copied (and slightly modified) from W3C's provided sample code.
