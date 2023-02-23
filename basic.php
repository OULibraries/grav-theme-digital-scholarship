<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;
use RocketTheme\Toolbox\Event\Event;
use RocketTheme\Toolbox\File\MarkdownFile;

class Basic extends Theme {

    public static function getSubscribedEvents(): array {
        return [
            'onThemeInitialized' => [['onThemeInitialized', 0]],
        ];
    }
    public function onThemeInitialized(): void {
        if ($this->isAdmin()) {
            $this->enable([
                'onAdminSave' => ['onAdminSave', 0],
                'onAdminPageTypes' => ['onAdminPageTypes', 0],
            ]);
            return;
        }
    }
    // purpose: make sure sitemap page is created if it does not exist
    public function onAdminSave(Event $event) {
        // check setting before making sitemap
        if ($this->config->get('themes.basic.disable_sitemap') ?? true) {
            $path = Grav::instance()['locator']->findResource('page://') . '/sitemap/sitemap.md';
            $file = MarkdownFile::instance($path);
            if (!$file->exists()) {
                $file->header(['title' => 'Site Map', 'routable' => true, 'visible' => false]);
                $file->save();
            }
        }
    }
    // remove sitemap from list of options
    public function onAdminPageTypes(Event $event) {
        $types = $event['types'];
        unset($types['sitemap']);
        $event['types'] = $types;
    }
    
}

?>