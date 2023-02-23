# Grav Theme Basic

<!-- TODO: Theme screenshot -->

**Basic** is a Grav theme designed to provide a functional, if basic, Grav website that meets accessibility standards and can be extended with other themes and plugins. It is currently required to provide the base for the Leaflet Tour plugin. You can see the theme (and the plugin) in action on the [Leaflet Tour demo site](https://theoacker.oucreate.com/leaflet-tour)

## <span id="requirements">Requirements</span>

You will need a Grav site in order to use this theme. The site will need to be running Grav version 1.7.0 or higher.

## <span id="installation">Installation</span>

<!-- TODO: Develop skeleton and provide instructions on setting up the skeleton -->

Installing the Basic theme can be done in one of two ways. The [Grav Package Manager (GPM)](https://learn.getgrav.org/cli-console/grav-cli-gpm) installation method enables you to install the theme with the admin panel or a terminal command, while the manual method enables you to do so via a zip file.

<!-- TODO: Add to GPM and remove this statement -->
Note that the GPM method will not be available until the theme has actually been released publicly and added to the GPM.

### <span id="gpm-installation">GPM Installation (Preferred)</span>

The simplest way to install this theme is via the admin panel, assuming you are using the admin plugin. To install, go to the Themes tab on your dashboard, click the **Add** button, look up this theme, and then click **Install**.

Alternatively, you can install this theme using your system's terminal or command line. From the root of your Grav directory type `bin/gpm install basic`. This will install the Basic theme into your `/user/themes` directory within Grav. Its files will be found under `your-site/grav/user/themes/basic`.

### <span id="manual-installation">Manual Installation</span>

To install this theme manually:

<!-- TODO: possibly link to getgrav website -->

1. Download the zip file from the [theme repository](https://github.com/TheoAcker12/grav-theme-basic) or by finding the files on the GetGrav website.
2. Upload the file to `your-site/grav/user/themes`.
3. Unzip/extract the file.
4. Rename the folder to `basic`.

The filepath to the theme should now be `your-site/grav/user/themes/basic`.

## <span id="updating">Updating</span>

Updates to the Basic theme may be published in the future. As with installation, you can update the theme through the Grav Package Manager (via the admin panel or your system's terminal) or manually.

Please note: Any changes you have made to any of the files in the theme will be overwritten. Any files located elsewhere (for example, a .yaml settings file placed in `user/config/themes`) will remain intact. Therefore, it is strongly discouraged to make any changes directly to theme files.

### <span id="gpm-update">GPM Update (Preferred)</span>

The simplest way to update this theme is via the admin panel. To do this, go to the Themes tab on your dashboard and check for updates. The dashboard will indicate if any themes have available updates and will allow you to update them individually or all at once.

Alternatively, you can update this theme using your system's terminal or command line. From the root of your Grav directory type `bin/gpm update basic`. This will check if the Basic theme has any updates. If it does, you will be asked whether or not you wish to update. To continue, type `y` and hit enter.

### <span id="manual-update">Manual Update</span>

To update this theme manually:

1. Delete the `your-site/user/themes/basic` directory.
2. Follow the manual installation directions from this readme.
3. Clear the Grav cache by going to your root Grav directory and entering `bin/grav clear-cache` on the terminal.

Note: If you are using the admin panel, there is also a button to clear the cache in the navigation sidebar.

## <span id="usage">Usage</span>

If you want to set Basic as the default theme and are using the Admin plugin, you can do so by going to the Themes tab, finding Basic, and clicking **Activate**.

Otherwise, set it as the default theme by changing the `theme:` setting in `your-site/grav/user/config/system.yaml` to `theme: basic`. You may need to clear the Grav cache by going to your root Grav directory and entering `bin/grav clear-cache` on the terminal.

Once this is done, you should be able to see the new theme on the frontend. Keep in mind any customizations made to a previous theme will not be reflected in the new one.

<!-- TODO: What plugins does the theme work well with? Markdown notices, certainly. What about highlight, breadcrumbs? -->

The [Git Sync](https://github.com/trilbymedia/grav-plugin-git-sync) plugin is strongly recommended as a way to backup your work.

You may also be interested in:

- More information on [Getting started with Grav](https://theoacker.oucreate.com/leaflet-tour/grav-cms)
- Full [theme configuration options](https://theoacker.oucreate.com/leaflet-tour/config/theme)

## <span id="credits">Credits</span>

- The original DS Fellowship team: Tara Carlisle, Theo Acker, Dr. Zenobie Garrett, Dr. John Stewart working with fellowship recipients Dr. Asa Randall and Laura Pott
- Primary developer: Theo Acker
- Science Gateways Community Institute (SGCI) for user experience consulting
- [WebAIM](https://webaim.org/) and [W3C WAI](https://www.w3.org/WAI/), both of whom greatly inspired the theme's styles and provided much-needed accessibility information

<!-- TODO: Link to SGCI -->

## <span id="contributing">Contributing</span>

If you encounter any errors or bugs or would like to request a feature, please [open an issue on GitHub](https://github.com/TheoAcker12/grav-theme-basic/issues) or send an email to digitalscholarship@ou.edu.

<!-- TODO: pull requests -->

This theme uses the MIT license. Feel free to modify, remix, and/or redistribute the code as long as you provide attribution to the original.