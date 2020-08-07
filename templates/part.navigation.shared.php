<li ng-class="{
        active: Navigation.isSharedActive(),
        unread: Navigation.isSharedUnread()
    }"
    class="subscriptions-feed with-counter with-menu">

    <a class="icon-shared" ng-href="#/items/share/" >
       <?php p($l->t('share by admin'))?>
    </a>

    <div class="app-navigation-entry-utils" ng-show="Navigation.isSharedUnread()">
        <ul>
            <li class="app-navigation-entry-utils-counter"
                ng-show="Navigation.isSharedUnread()"
                title="{{ Navigation.getSharedCount() }}">
                {{ Navigation.getUnreadCount() | unreadCountFormatter }}
            </li>
            <li class="app-navigation-entry-utils-menu-button">
                <button
                    ng-click="optionsId = (optionsId == 'all' ? -1 : 'all')">
                </button>
            </li>
        </ul>
    </div>

    <div class="app-navigation-entry-menu">
        <ul>
            <li class="mark-read">
                <button ng-click="Navigation.markRead()">
                    <span class="icon-checkmark"></span>
                    <span><?php p($l->t('Mark read')); ?></span>
                </button>
            </li>
        </ul>
    </div>

</li>