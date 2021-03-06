var VAADIN_DIR_URL = typeof CKEDITOR.vaadinDirUrl !== 'undefined'? CKEDITOR.vaadinDirUrl : "../../../";
// Loads magnoliaFileBrowser replacing CKEditor file browser. This is added to the custom config below at config.extraPlugins
CKEDITOR.plugins.addExternal('magnoliaFileBrowser', VAADIN_DIR_URL + 'js/filebrowser/');


CKEDITOR.editorConfig = function( config ) {
    // MIRROR info.magnolia.ui.field.RichTextFieldDefinition
    definition = {
        alignment: false,
        images: true,
        lists: true,
        source: false,
        tables: false,
        colors: true,
        fonts: null,
        fontSizes: null
    }
    // MIRROR info.magnolia.ui.field.RichTextFieldDefinition
    removePlugins = [];
    // magnolialink AND REMOVAL OF elementspath FROM DEFAULT RICH TEXT FIELD FACTORY
    removePlugins.push("elementspath");
    removePlugins.push("filebrowser");
    config.removePlugins = removePlugins.join(",");
    config.extraPlugins = "magnolialink,magnoliaexpand,magnoliaFileBrowser";
    config.baseFloatZIndex = 150;
    config.resize_enabled = false;
    config.toolbar = "Magnolia";
    config.toolbar_Magnolia = [
        {name: "basicstyles", items: ["Bold", "Italic", "Underline", "SpecialChar", "Subscript", "Superscript"] },
        {name: "paragraph",   items: ["NumberedList", "BulletedList"]},
        {name: "links",     items: [ "Link", "InternalLink", "DamLink", "Unlink"]},
        {name: "styles",    items: ["TextColor","BGColor"]},
        {name: "clipboard", items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord"]},
        {name: "undo",      items: [ "Undo", "Redo" ] },
        {name: "view",      items: [ "Expand" ] }
    ];
};