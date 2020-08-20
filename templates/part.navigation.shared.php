<li ng-class="{
        active: Navigation.isSharedActive(),
        unread: Navigation.isSharedUnread()
    }"
    class="subscriptions-feed with-counter with-menu">

    <a class="icon-shared" ng-href="#/items/shared/" >
       <?php p($l->t('share by admin'))?>
    </a>

    <div class="app-navigation-entry-utils" ng-show="Navigation.isSharedUnread()">
        <ul>
            <li class="app-navigation-entry-utils-counter"
                ng-show="Navigation.isSharedUnread()">
                <title="{{ Navigation.getSharedCount() }}">
                {{ Navigation.getSharedCount() | unreadCountFormatter }}
            </li>
        </ul>
    </div>
</li>