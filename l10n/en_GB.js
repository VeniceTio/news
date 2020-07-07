OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Request failed, network connection unavailable!",
    "Request unauthorized. Are you logged in?" : "Request unauthorised. Are you logged in?",
    "Request forbidden. Are you an admin?" : "Request forbidden. Are you an admin?",
    "Token expired or app not enabled! Reload the page!" : "Token expired or app not enabled! Reload the page!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Internal server error! Please check your data/nextcloud.log file for additional information!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Request failed, Nextcloud is in currently in maintenance mode!",
    "Can not add feed: Unable to parse feed" : "Can not add feed: Unable to parse feed",
    "Can not add feed: Exists already" : "Can not add feed: Exists already",
    "Articles without feed" : "Articles without feed",
    "Can not add folder: Exists already" : "Can not add folder: Exists already",
    "News" : "News",
    "An RSS/Atom feed reader" : "An RSS/Atom feed reader",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Use system cron for updates",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Disable this if you run a custom updater such as the Python updater included in the app",
    "Purge interval" : "Purge interval",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Minimum number of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored",
    "Maximum read count per feed" : "Maximum read count per feed",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off",
    "Maximum redirects" : "Maximum redirects",
    "How many redirects the feed fetcher should follow" : "How many redirects the feed fetcher should follow",
    "Maximum feed page size" : "Maximum feed page size",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted",
    "Feed fetcher timeout" : "Feed fetcher timeout",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted",
    "Explore Service URL" : "Explore Service URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built-in explore service, leave this input empty",
    "For more information check the wiki" : "For more information check the wiki",
    "Saved" : "Saved",
    "Download" : "Download",
    "Close" : "Close",
    "filter" : "filter",
    "Language" : "Language",
    "Subscribe" : "Subscribe",
    "Got more awesome feeds? Share them with us!" : "Got more awesome feeds? Share them with us!",
    "No articles available" : "No articles available",
    "No unread articles available" : "No unread articles available",
    "Open website" : "Open website",
    "Star article" : "Star article",
    "Unstar article" : "Unstar article",
    "Keep article unread" : "Keep article unread",
    "Remove keep article unread" : "Remove keep article unread",
    "by" : "by",
    "from" : "from",
    "Play audio" : "Play audio",
    "Download audio" : "Download audio",
    "Download video" : "Download video",
    "Keyboard shortcut" : "Keyboard shortcut",
    "Description" : "Description",
    "right" : "right",
    "Jump to next article" : "Jump to next article",
    "left" : "left",
    "Jump to previous article" : "Jump to previous article",
    "Toggle star article" : "Toggle star article",
    "Star article and jump to next one" : "Star article and jump to next one",
    "Toggle keep current article unread" : "Toggle keep current article unread",
    "Open article in new tab" : "Open article in new tab",
    "Toggle expand article in compact view" : "Toggle expand article in compact view",
    "Refresh" : "Refresh",
    "Load next feed" : "Load next feed",
    "Load previous feed" : "Load previous feed",
    "Load next folder" : "Load next folder",
    "Load previous folder" : "Load previous folder",
    "Scroll to active navigation entry" : "Scroll to active navigation entry",
    "Focus search field" : "Focus search field",
    "Mark current article's feed/folder read" : "Mark current article's feed/folder read",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Ajax or webcron mode detected! Your feeds will not be updated!",
    "How to set up the operating system cron" : "How to set up the operating system cron",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Install and set up a faster parallel updater that uses the News app's update API",
    "Web address" : "Web address",
    "Feed exists already!" : "Feed exists already!",
    "Folder" : "Folder",
    "No folder" : "No folder",
    "New folder" : "New folder",
    "Folder name" : "Folder name",
    "Go back" : "Go back",
    "Folder exists already!" : "Folder exists already!",
    "Credentials" : "Credentials",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!",
    "Username" : "Username",
    "Password" : "Password",
    "New Folder" : "New Folder",
    "Create" : "Create",
    "Explore" : "Explore",
    "Update failed more than 50 times" : "Update failed more than 50 times",
    "Deleted feed" : "Deleted feed",
    "Undo delete feed" : "Undo delete feed",
    "Rename" : "Rename",
    "Menu" : "Menu",
    "Mark read" : "Mark read",
    "Unpin from top" : "Unpin from top",
    "Pin to top" : "Pin to top",
    "Newest first" : "Newest first",
    "Oldest first" : "Oldest first",
    "Default order" : "Default order",
    "Enable full text" : "Enable full text",
    "Disable full text" : "Disable full text",
    "Unread updated" : "Unread updated",
    "Ignore updated" : "Ignore updated",
    "Open feed URL" : "Open feed URL",
    "Delete" : "Delete",
    "Dismiss" : "Dismiss",
    "Collapse" : "Collapse",
    "Deleted folder" : "Deleted folder",
    "Undo delete folder" : "Undo delete folder",
    "Starred" : "Starred",
    "Unread articles" : "Unread articles",
    "All articles" : "All articles",
    "Settings" : "Settings",
    "Disable mark read through scrolling" : "Disable mark read through scrolling",
    "Compact view" : "Compact view",
    "Expand articles on key navigation" : "Expand articles on key navigation",
    "Show all articles" : "Show all articles",
    "Reverse ordering (oldest on top)" : "Reverse ordering (oldest on top)",
    "Subscriptions (OPML)" : "Subscriptions (OPML)",
    "Import" : "Import",
    "Export" : "Export",
    "Error when importing: File does not contain valid OPML" : "Error when importing: File does not contain valid OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Error when importing: OPML contains neither feeds nor folders",
    "Unread/Starred Articles" : "Unread/Starred Articles",
    "Error when importing: file does not contain valid JSON" : "Error when importing: file does not contain valid JSON",
    "Help" : "Help",
    "Keyboard shortcuts" : "Keyboard shortcuts",
    "Documentation" : "Documentation",
    "Report a bug" : "Report a bug"
},
"nplurals=2; plural=(n != 1);");
