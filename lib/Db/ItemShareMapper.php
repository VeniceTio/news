<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Alessandro Cosentino <cosenal@gmail.com>
 * @author    Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright 2012 Alessandro Cosentino
 * @copyright 2012-2014 Bernhard Posselt
 */

namespace OCA\News\Db;

use Exception;
use OCA\News\Utility\Time;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

class ItemShareMapper extends NewsMapper
{

    public function __construct(IDBConnection $db, Time $time)
    {
        parent::__construct($db, 'news_items_share', ItemShare::class, $time);
    }

    public function find($id, $userId)
    {
        $sql = 'SELECT * ' .
            'FROM `*PREFIX*news_items_share`' .
            'WHERE `id` = ?';
        $params = [$id];

        return $this->findEntities($sql,$params);
    }

    public function findAll() {
        $sql = 'SELECT * ' .
            'FROM `*PREFIX*news_items_share`';
        return $this->findEntities($sql, []);
    }

    public function findByTitle($title)
    {
        $sql = 'SELECT * ' .
            'FROM `*PREFIX*news_items_share`' .
            'WHERE `title` = ?';
        $params = [$title];

        return $this->findEntity($sql,$params);
    }

    private function makeSelectQuery(
        $prependTo = '',
        $oldestFirst = false,
        $distinctFingerprint = false
    ) {
        if ($oldestFirst) {
            $ordering = 'ASC';
        } else {
            $ordering = 'DESC';
        }

        return 'SELECT `items`.* FROM `*PREFIX*news_items_share` `items` ' .
            'WHERE'.
            $prependTo .
            'ORDER BY `items`.`id` ' . $ordering;
    }

    public function findAllNew($updatedSince)
    {
        $sql = '`items`.`last_modified` >= ? ';
        $sql = $this->makeSelectQuery($sql);
        $params = [$updatedSince];
        return $this->findEntities($sql, $params);
    }


    public function insert($item) {
        parent::insert($item);
        $itemShare = new ItemShare();
        $sql = 'INSERT INTO `*PREFIX*news_items_share`' .
            '(title, guid_hash, guid, url, author, pub_date, updated_date, body, enclosure_mime, enclosure_link, media_thumbnail, media_description)' .
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        $params = [$item.title,$item.guid_hash,$item.guid,$item.url,$item.author,$item.pub_date,$item.updated_date,$item.body,$item.enclosure_mime,
            $item.enclosure_link,$item.media_thumbnail,$item.media_description];
        $this->execute($sql,$params);
        //return $this->mapper->insert($itemShare);
    }

    public function delete($entity){
        parent::delete($entity);
        $sql = 'DELETE FROM `*PREFIX*news_items_share` WHERE `id` = ?';
        $params = [$entity->getId()];

        $stmt = $this->execute($sql, $params);
        $stmt->closeCursor();
    }
}