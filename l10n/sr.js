OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Неуспео захтев. Мрежа није доступна!",
    "Request unauthorized. Are you logged in?" : "Неовлашћен захтев. Јесте ли пријављени?",
    "Request forbidden. Are you an admin?" : "Забрањен захтев. Да ли сте администратор?",
    "Token expired or app not enabled! Reload the page!" : "Жетон је истекао или апликација није укључена! Учитајте поново страницу!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Интерна грешка на серверу! Проверите data/nextcloud.log фајл за додатне информације!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Неуспео захтев. Некстклауд сервер је тренутно у режиму приступа само једног корисника!",
    "Can not add feed: Exists already" : "Не могу да додам довод. Већ постоји",
    "Articles without feed" : "Чланци без довода",
    "Can not add folder: Exists already" : "Не могу да додам фасциклу. Већ постоји",
    "News" : "Вести",
    "An RSS/Atom feed reader" : "RSS/Atom читач довода",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.com/server/10/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "Апликација Вести је RSS/Atom читач довода за Некстклауд који се синхронизује са многим мобилним уређајима. Списак свих клијената може да се нађе у [у README фајлу](https://github.com/nextcloud/news)\n\nПре ажурирања на нову верзију, [проверите дневник измена](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) да бисте избегли изненађења.\n\n**Важно**: Да бисте омогућили ажурирање довода, морате или укључити [Некстклаудов системски крон](https://docs.nextcloud.com/server/10/admin_manual/configuration_server/background_jobs_configuration.html#cron) или користити [освеживач](https://github.com/nextcloud/news-updater) који користи уграђени API  за ажурирања и искључује ажурирања преко крон послова. Више информација можете наћи у [README фајлу](https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Користи системски крон за ажурирања",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Искључите ово ако користите прилагођени програм за ажурирање као што су Python-ов програм за ажурирање у оквиру апликације",
    "Purge interval" : "Интервал чишћења",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Минимални број секунди пошто се обрисани доводи и фасцикле уклоне из базе; вредности испод 60 секунди се игноришу",
    "Maximum read count per feed" : "Максимални број читања по доводу",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Дефинише максимални број чланака који се могу прочитати по доводу, а који неће бити избрисани када крене чишћење; ако се стари чланци поново појављују након што их прочитате, повећајте ову вредност; негативне вредности попут -1 искључују ову функцију у потпуности",
    "Maximum redirects" : "Највише преусмеравања",
    "How many redirects the feed fetcher should follow" : "Колико ће се преусмеравања следити",
    "Maximum feed page size" : "Највећа страница довода",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Највећа величина довода у бајтовима. Ако је страница довода већа, ажурирање ће бити прекинуто.",
    "Feed fetcher timeout" : "Време чекања довлачења",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Време у секундама које ће се чекати да се довод учита. Ако траје дуже, ажурирање ће се прекинути",
    "Explore Service URL" : "Истражите сервисну адресу",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Ако је дато, ова сервисна адреса ће бити упитана за приказивање у секцији за истраживање довода. За повратак на коришћење уграђеног сервиса за истраживање, оставите ово празно",
    "For more information check the wiki" : "За више информација, погледајте вики",
    "Saved" : "Сачувано",
    "Download" : "Преузми",
    "Close" : "Затвори",
    "filter" : "филтер",
    "Language" : "Језик",
    "Subscribe" : "Претплати се",
    "Got more awesome feeds? Share them with us!" : "Имате још сјајних довода? Поделите их са нама!",
    "No articles available" : "Нема доступних чланака",
    "No unread articles available" : "Нема непрочитаних чланака",
    "Open website" : "Отвори веб сајт",
    "Star article" : "Стави звездицу чланку",
    "Unstar article" : "Скини звездицу чланку",
    "Keep article unread" : "Остави чланак непрочитаним",
    "Remove keep article unread" : "Уклони да остане непрочитан",
    "by" : "од",
    "from" : "од",
    "Play audio" : "Пусти аудио",
    "Download video" : "Преузми видео",
    "Download audio" : "Преузми аудио",
    "Keyboard shortcut" : "Пречица тастатуре",
    "Description" : "Опис",
    "right" : "десно",
    "Jump to next article" : "Пређи на следећи чланак",
    "left" : "лево",
    "Jump to previous article" : "Пређи на претходни чланак",
    "Toggle star article" : "Мења озвезданост чланка",
    "Star article and jump to next one" : "Стави звездицу чланку и пређи на следећи",
    "Toggle keep current article unread" : "Мења „остави тренутни чланак непрочитаним“",
    "Open article in new tab" : "Отвори чланак у новом језичку",
    "Toggle expand article in compact view" : "Мења „рашири чланак у компактном приказу“",
    "Refresh" : "Освежи",
    "Load next feed" : "Учитај следећи довод",
    "Load previous feed" : "Учитај претходни довод",
    "Load next folder" : "Учитај следећу фасциклу",
    "Load previous folder" : "Учитај претходну фасциклу",
    "Scroll to active navigation entry" : "Отклизај до активног уноса",
    "Focus search field" : "Фокусирај на поље за претрагу",
    "Mark current article's feed/folder read" : "Означи доводе/фасцикле тренутног чланка прочитаним",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Детектован Ajax или webcron начин рада! Доводи неће бити ажурирани!",
    "How to set up the operating system cron" : "Како подестити крон оперативног система",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Инсталирајте и подесите брже паралелно ажурирање које користи API за ажурирање од ове апликације",
    "Non UTF-8 charset for MySQL/MariaDB database detected!" : "Детектован кодни распоред за MySQL/MariaDB који није UTF-8!",
    "Learn how to convert your database to utf8mb4 (make a backup beforehand)" : "Научите како да конвертујете базу у utf8mb4 (направите резервну копију пре тога)",
    "Web address" : "Веб адреса",
    "Feed exists already!" : "Довод већ постоји!",
    "Folder" : "Фасцикла",
    "No folder" : "Нема фасцикле",
    "New folder" : "Нова фасцикла",
    "Folder name" : "Назив фасцикле",
    "Go back" : "Иди назад",
    "Folder exists already!" : "Фасцикла већ постоји!",
    "Advanced settings" : "Напредне поставке",
    "Credentials" : "Акредитиви",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP Basic Auth акредитиви морају бити сачувани нешифровани! Свак са приступом серверу или бази ће моћи да им приступи!",
    "Username" : "Корисничко име",
    "Password" : "Лозинка",
    "New Folder" : "Нова фасцикла",
    "Create" : "Направи",
    "Explore" : "Истражи",
    "Update failed more than 50 times" : "Ажурирање је било неуспешно више од 50 пута",
    "Deleted feed" : "Обрисани доводи",
    "Undo delete feed" : "Поништи брисање довода",
    "Rename" : "Преименуј",
    "Menu" : "Мени",
    "Mark read" : "Означи као прочитано",
    "Unpin from top" : "Откачи са врха",
    "Pin to top" : "Закачи на врх",
    "Newest first" : "Прво новије",
    "Oldest first" : "Прво старије",
    "Default order" : "Подразумевани редослед",
    "Enable full text" : "Укључи цео текст",
    "Disable full text" : "Искључи цео текст",
    "Unread updated" : "Ажуриране непрочитане",
    "Ignore updated" : "Игнориши непрочитане",
    "Open feed URL" : "Отвори адресу довода",
    "Delete" : "Обриши",
    "Dismiss" : "Одбаци",
    "Collapse" : "Скупи",
    "Deleted folder" : "Обрисана фасцикла",
    "Undo delete folder" : "Поништи брисање фасцикле",
    "Starred" : "Означено звездицом",
    "Unread articles" : "Непрочитани чланци",
    "All articles" : "Сви чланци",
    "Settings" : "Поставке",
    "Disable mark read through scrolling" : "Искључи „означи прочитаним при клизању“",
    "Compact view" : "Компактни приказ",
    "Expand articles on key navigation" : "Рашири чланке при навигацији тастерима",
    "Show all articles" : "Прикажи све чланке",
    "Reverse ordering (oldest on top)" : "Обрнуто ређање (најстарији на врху)",
    "Subscriptions (OPML)" : "Претплате (ОПМЛ)",
    "Import" : "Увези",
    "Export" : "Извези",
    "Error when importing: File does not contain valid OPML" : "Грешка приликом увоза: Фајл не садржи исправан OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Грешка приликом увоза: OPML не садржи ни доводе ни фасцикле",
    "Unread/Starred Articles" : "Непрочитани/Озвездани чланци",
    "Error when importing: file does not contain valid JSON" : "Грешка приликом увоза: фајл не садржи исправан JSON",
    "Help" : "Помоћ",
    "Keyboard shortcuts" : "Пречице тастатуре",
    "Documentation" : "Документација",
    "Report a bug" : "Пријави грешку"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
