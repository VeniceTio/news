<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Alessandro Cosentino <cosenal@gmail.com>
 * @author    Bernhard Posselt <dev@bernhard-posselt.com>
 * @author    David Guillot <david@guillot.me>
 * @copyright 2012 Alessandro Cosentino
 * @copyright 2012-2014 Bernhard Posselt
 * @copyright 2018 David Guillot
 */

namespace OCA\News\Controller;

use \OCP\IRequest;
use \OCP\IUserSession;
use \OCP\AppFramework\Http;

use \OCA\News\Service\ItemShareService;
use \OCA\News\Service\ServiceNotFoundException;

class ItemShareApiController extends ApiController
{
    use JSONHttpError;

    private $itemShareService;
    private $serializer;

    public function __construct(
        $appName,
        IRequest $request,
        IUserSession $userSession,
        ItemShareService $itemService
    )
    {
        parent::__construct($appName, $request, $userSession);
        $this->itemShareService = $itemService;
        $this->serializer = new EntityApiSerializer('itemShare');
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @CORS
     *
     * @param int  $type
     * @param int  $id
     * @param bool $getRead
     * @param int  $batchSize
     * @param int  $offset
     * @param bool $oldestFirst
     * @return array|mixed
     */
    public function index(
        $type = 4,
        $id = 0,
        $getRead = true,
        $batchSize = -1,
        $offset = 0,
        $oldestFirst = false
    ) {
        return $this->serializer->serialize(
            $this->itemShareService->findAll()
        );
    }
    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @CORS
     *
     * @param int $type
     * @param int $id
     * @param int $lastModified
     * @return array|mixed
     */
    public function updated($type = 3, $id = 0, $lastModified = 0)
    {
        // needs to be turned into a millisecond timestamp to work properly
        if (strlen((string) $lastModified) <= 10) {
            $paddedLastModified = $lastModified . '000000';
        } else {
            $paddedLastModified = $lastModified;
        }
        return $this->serializer->serialize(
            $this->itemShareService->findAllNew($paddedLastModified)
        );
    }

    public function share($item)
    {
        try {
            $this->itemShareService->create($item);
        } catch (ServiceNotFoundException $ex) {
            return $this->error($ex, Http::STATUS_NOT_FOUND);
        }
        return [];
    }

    public function unshare($item)
    {
        try {
            $this->itemShareService->delete($item);
        } catch (ServiceNotFoundException $ex) {
            return $this->error($ex, Http::STATUS_NOT_FOUND);
        }
        return [];
    }

}
