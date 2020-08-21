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

use OCP\AppFramework\Db\Entity;

class ItemShare extends Entity implements IAPI, \JsonSerializable
{
    use EntityJSONSerializer;

    /** @var int|null */
    protected $grpId;
    /** @var string */
    protected $guidHash;
    /** @var string */
    protected $guid;
    /** @var string|null */
    protected $url;
    /** @var string|null */
    protected $title;
    /** @var string|null */
    protected $author;
    /** @var int|null */
    protected $pubDate;
    /** @var int|null */
    protected $updatedDate;
    /** @var string|null */
    protected $body;
    /** @var string|null */
    protected $enclosureMime;
    /** @var string|null */
    protected $enclosureLink;
    /** @var string|null */
    protected $mediaThumbnail;
    /** @var string|null */
    protected $mediaDescription;


    public static function fromImport($import): ItemShare
    {
        $itemShare = new static();
        $itemShare->setGuid($import['guid']);
        $itemShare->setGuidHash($import['guid']);
        $itemShare->setUrl($import['url']);
        $itemShare->setTitle($import['title']);
        $itemShare->setAuthor($import['author']);
        $itemShare->setPubDate($import['pubDate']);
        $itemShare->setUpdatedDate($import['updatedDate']);
        $itemShare->setBody($import['body']);
        $itemShare->setEnclosureMime($import['enclosureMime']);
        $itemShare->setEnclosureLink($import['enclosureLink']);
        $itemShare->setMediaThumbnail($import['mediaThumbnail']);
        $itemShare->setMediaDescription($import['mediaDescription']);
        $itemShare->setGrpId($import['grpId']);

        return $itemShare;
    }

    /**
     * @return null|string
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @return null|string
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * @return null|string
     */
    public function getEnclosureLink()
    {
        return $this->enclosureLink;
    }

    /**
     * @return null|string
     */
    public function getEnclosureMime()
    {
        return $this->enclosureMime;
    }

    public function getGuid(): string
    {
        return $this->guid;
    }

    public function getGuidHash(): string
    {
        return $this->guidHash;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getIntro()
    {
        return strip_tags($this->getBody());
    }

    /**
     * @return int|null
     */
    public function getPubDate()
    {
        return $this->pubDate;
    }

    /**
     * @return null|string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return int|null
     */
    public function getUpdatedDate()
    {
        return $this->updatedDate;
    }

    /**
     * @return null|string
     */
    public function getUrl()
    {
        return $this->url;
    }

    public function getGrpId()
    {
        return $this->grpId;
    }

    public function getMediaThumbnail(){
        return $this->mediaThumbnail;
    }

    /**
     * @return string|null
     */
    public function getMediaDescription(): ?string
    {
        return $this->mediaDescription;
    }

    /**
     * Turns entity attributes into an array
     */
    public function jsonSerialize(): array
    {
        return [
            'id' => $this->getId(),
            'guid' => $this->getGuid(),
            'guidHash' => $this->getGuidHash(),
            'url' => $this->getUrl(),
            'title' => $this->getTitle(),
            'author' => $this->getAuthor(),
            'pubDate' => $this->getPubDate(),
            'updatedDate' => $this->getUpdatedDate(),
            'body' => $this->getBody(),
            'enclosureMime' => $this->getEnclosureMime(),
            'enclosureLink' => $this->getEnclosureLink(),
            'mediaThumbnail' => $this->getMediaThumbnail(),
            'mediaDescription' => $this->getMediaDescription(),
            'intro' => $this->getIntro(),
        ];
    }

    public function setGrpId(int $grpId)
    {
        if ($this->grpId !== $grpId) {
            $this->grpId= $grpId;
            $this->markFieldUpdated('grpId');
        }
    }

    public function setAuthor(string $author = null)
    {
        $author = strip_tags($author);

        if ($this->author !== $author) {
            $this->author = $author;
            $this->markFieldUpdated('author');
        }
    }

    public function setBody(string $body = null)
    {
        // FIXME: this should not happen if the target="_blank" is already
        // on the link
        $body = str_replace('<a ', '<a target="_blank" rel="noreferrer" ', $body);

        if ($this->body !== $body) {
            $this->body = $body;
            $this->markFieldUpdated('body');
        }
    }

    public function setEnclosureLink(string $enclosureLink = null)
    {
        if ($this->enclosureLink !== $enclosureLink) {
            $this->enclosureLink = $enclosureLink;
            $this->markFieldUpdated('enclosureLink');
        }
    }

    public function setEnclosureMime(string $enclosureMime = null)
    {
        if ($this->enclosureMime !== $enclosureMime) {
            $this->enclosureMime = $enclosureMime;
            $this->markFieldUpdated('enclosureMime');
        }
    }

    public function setMediaThumbnail(string $mediaThumbnail = null)
    {
        if ($this->mediaThumbnail !== $mediaThumbnail) {
            $this->mediaThumbnail = $mediaThumbnail;
            $this->markFieldUpdated('mediaThumbnail');
        }
    }

    public function setMediaDescription(string $mediaDescription = null)
    {
        if ($this->mediaDescription !== $mediaDescription) {
            $this->mediaDescription = $mediaDescription;
            $this->markFieldUpdated('mediaDescription');
        }
    }

    public function setGuid(string $guid)
    {
        if ($this->guid !== $guid) {
            $this->guid = $guid;
            $this->markFieldUpdated('guid');
        }
    }

    public function setGuidHash(string $guidHash)
    {
        if ($this->guidHash !== $guidHash) {
            $this->guidHash = $guidHash;
            $this->markFieldUpdated('guidHash');
        }
    }

    public function setId(int $id)
    {
        if ($this->id !== $id) {
            $this->id = $id;
            $this->markFieldUpdated('id');
        }
    }

    public function setPubDate(int $pubDate = null)
    {
        if ($this->pubDate !== $pubDate) {
            $this->pubDate = $pubDate;
            $this->markFieldUpdated('pubDate');
        }
    }

    public function setTitle(string $title = null)
    {
        $title = strip_tags($title);

        if ($this->title !== $title) {
            $this->title = $title;
            $this->markFieldUpdated('title');
        }
    }

    public function setUpdatedDate(int $updatedDate = null)
    {
        if ($this->updatedDate !== $updatedDate) {
            $this->updatedDate = $updatedDate;
            $this->markFieldUpdated('updatedDate');
        }
    }

    public function setUrl(string $url = null)
    {
        $url = trim($url);
        if ((strpos($url, 'http') === 0 || strpos($url, 'magnet') === 0)
            && $this->url !== $url
        ) {
            $this->url = $url;
            $this->markFieldUpdated('url');
        }
    }

    public function toAPI()
    {
        return [
            'id' => $this->getId(),
            'guid' => $this->getGuid(),
            'guidHash' => $this->getGuidHash(),
            'url' => $this->getUrl(),
            'title' => $this->getTitle(),
            'author' => $this->getAuthor(),
            'pubDate' => $this->getPubDate(),
            'updatedDate' => $this->getUpdatedDate(),
            'body' => $this->getBody(),
            'enclosureMime' => $this->getEnclosureMime(),
            'enclosureLink' => $this->getEnclosureLink(),
            'mediaThumbnail' => $this->getMediaThumbnail(),
            'mediaDescription' => $this->getMediaDescription(),
            'grpId' => $this->getGrpId()
        ];
    }

    public function toExport($feeds): array
    {
        return [
            'guid' => $this->getGuid(),
            'url' => $this->getUrl(),
            'title' => $this->getTitle(),
            'author' => $this->getAuthor(),
            'pubDate' => $this->getPubDate(),
            'updatedDate' => $this->getUpdatedDate(),
            'body' => $this->getBody(),
            'enclosureMime' => $this->getEnclosureMime(),
            'enclosureLink' => $this->getEnclosureLink(),
            'mediaThumbnail' => $this->getMediaThumbnail(),
            'mediaDescription' => $this->getMediaDescription()
        ];
    }

    /**
     * Check if a given mimetype is supported
     *
     * @param string $mime mimetype to check
     *
     * @return boolean
     */
    public function isSupportedMime($mime)
    {
        return (
            stripos($mime, 'audio/') !== false ||
            stripos($mime, 'image/') !== false ||
            stripos($mime, 'video/') !== false);
    }

}