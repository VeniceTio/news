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

namespace OCA\News\Service;

use OCA\News\Db\Item;
use OCA\News\Db\ItemShare;
use OCP\IConfig;
use OCP\AppFramework\Db\DoesNotExistException;

use OCA\News\Db\ItemShareMapper;
use OCA\News\Config\Config;
use OCA\News\Utility\Time;


class ItemShareService extends Service
{
    protected $mapper;
    private $config;
    private $systemConfig;

    public function __construct(ItemShareMapper $mapper, Config $config, IConfig $systemConfig
    ){
        parent::__construct($mapper);
        $this->config = $config;
        $this->mapper = $mapper;
        $this->systemConfig = $systemConfig;
    }

    public function findAll() {
        return $this->mapper->findAll();
    }

    public function findAllNew($updatedSince){
        return $this->mapper->findAllNew($updatedSince);
    }

    public function find($id, $userId) {
        return $this->mapper->find($id);
    }

    public function create($item) {
        $itemShare = ItemShare::fromImport($item);
        //$sql = 'INSERT INTO `*PREFIX*news_items_share`' .
        //    '(title, guid_hash, guid, url, author, pub_date, updated_date, body, enclosure_mime, enclosure_link, media_thumbnail, media_description)' .
        //    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        //$params = [$item.title,$item.guid_hash,$item.guid,$item.url,$item.author,$item.pub_date,$item.updated_date,$item.body,$item.enclosure_mime,
        //    $item.enclosure_link,$item.media_thumbnail,$item.media_description];
//        $this->execute($sql,$params);
        return $this->mapper->insert($itemShare);
    }

    public function delete(Entity $entity)
    {
    $itemShare = $this->mapper->findByTitle($entity->title);
    $this->mapper->delete($itemShare);
    }
}
