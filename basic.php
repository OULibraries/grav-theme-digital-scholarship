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
            ]);
            return;
        }
    }
    // purpose: make sure sitemap page is created if it does not exist
    public function onAdminSave(Event $event) {
        $obj = $event['object'];
        // only take effect if the theme config has been saved
        if (method_exists($obj, 'blueprints') && $obj->blueprints()->getFilename() === 'basic/blueprints') {
            $obj->set('title.text', 'success');
            // check for existence of sitemap, create if needed
            $path = Grav::instance()['locator']->findResource('page://') . '/sitemap/sitemap.md';
            $file = MarkdownFile::instance($path);
            if (!$file->exists()) {
                $file->header(['title' => 'Site Map', 'routable' => true, 'visible' => false]);
                $file->save();
            }
        }
    }
    
}

?>