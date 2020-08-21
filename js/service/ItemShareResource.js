/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */

/*
* This service is not implemented yet
*/
app.factory('ItemShareResource', function (Resource, $http, BASE_URL) {
    'use strict';

    var ItemShareResource = function ($http, BASE_URL) {
        Resource.call(this, $http, BASE_URL);
        this.clear();
    };

    ItemShareResource.prototype = Object.create(Resource.prototype);

    ItemShareResource.prototype.clear = function () {
        this.sharedCount = 0;
        this.lowestId = 0;
        this.highestId = 0;
        Resource.prototype.clear.call(this);
    };

    ItemShareResource.prototype.receive = function (value, channel) {
        switch (channel) {
            case 'newestItemId':
                this.newestItemId = value;
                break;

            case 'shared':
                this.sharedCount = value;
                break;

            default:
                var self = this;
                var importValues = [];
                value.forEach(function (item) {
                    // initialize lowest and highest id
                    if (self.lowestId === 0) {
                        self.lowestId = item.id;
                    }
                    if (self.highestId === 0) {
                        self.highestId = item.id;
                    }

                    if (item.id > self.highestId) {
                        self.highestId = item.id;
                    }
                    if (item.id < self.lowestId) {
                        self.lowestId = item.id;
                    }

                });

                Resource.prototype.receive.call(this, importValues, channel);
        }
    };
    ItemShareResource.prototype.toggleShare = function (item,shared) {
        let message;
        if (!shared) {
            this.addItemShare(item);
            message = true;
        } else {
            this.deleteItem(item);
            message = false;
        }
        console.log('ItemShare item n°: '+ item + '\nshared : ' + message);
    };

    /**
     * A function to create new share item
     * @param {*} tag The tag to create
     */
    ItemShareResource.prototype.share = function (itemId, isShared) {
        if (isShared === undefined) {
            isShared = true;
        }

        var it = this.get(itemId);
        var url = this.BASE_URL +
            '/items/' + it.feedId + '/' + it.guidHash + '/share';

        it.shared = isShared;

        if (isShared) {
            this.sharedCount += 1;
        } else {
            this.sharedCount -= 1;
        }

        return this.http({
            url: url,
            method: 'POST',
            data: {
                isShared: isShared
            }
        }).then(function (response) {
            return response.data;
        }, function (response) {
            console.log(response);
        });
    };

    ItemShareResource.prototype.addItemShare = function (item) {
        var url = this.BASE_URL +
            '/itemShares';

        this.sharedCount += 1;

        console.log(url);

        return this.http({
            url: url,
            method: 'POST',
            data:{
                item: item
            }
        }).then(function (response) {
            return response.data;
        }, function (response) {
            console.log(response);
        });
    };

    /**
     * A function to get all tags
     */
    ItemShareResource.prototype.getAllItem = function () {
        var url = this.BASE_URL +
            '/itemShares';

        return this.http({
            url: url,
            method: 'GET'
        });
    };


    /**
     * A function to delete tag
     * @param {*} tag The tag to delete
     */
    ItemShareResource.prototype.deleteItem = function (id) {
        var url = this.BASE_URL +
            '/itemShares/' + id;

        this.sharedCount -= 1;
        console.log(url);

        return this.http({
            url: url,
            method: 'DELETE',
            data:{
                item: id
            }
        });
    };

    return new ItemShareResource($http, BASE_URL);
});