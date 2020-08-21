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

namespace OCA\News\Controller;

use OCA\News\Service\ItemShareService;
use \OCP\IRequest;
use \OCP\IConfig;
use \OCP\AppFramework\Controller;
use \OCP\AppFramework\Http;

use \OCA\News\Service\ServiceException;
use \OCA\News\Service\ServiceNotFoundException;
use \OCA\News\Service\ItemService;
use \OCA\News\Service\FeedService;

class ItemShareController extends Controller
{
    use JSONHttpError;

    private $itemShareService;
    private $userId;
    private $settings;

    public function __construct(
        $appName,
        IRequest $request,
        ItemShareService $itemShareService,
        IConfig $settings,
        $UserId
    ) {
        parent::__construct($appName, $request);
        $this->itemShareService = $itemShareService;
        $this->userId = $UserId;
        $this->settings = $settings;
    }

    public function index() {
        $ItemsShare = $this->service->findAll();
        return ['ItemShare' => $ItemsShare];
    }

    public function show(int $id)
    {
        try {
            $this->service->find($id);
        } catch (ServiceNotFoundException $ex) {
            return $this->error($ex, Http::STATUS_NOT_FOUND);
        }
        return [];
    }
    public function create($tag) {
        try
        {
            $ItemShare = $this->service->create($tag, $this->userId);
            return ['ItemShare' => [$ItemShare]];
        } catch (ServiceConflictException $ex) {
            return $this->error($ex, Http::STATUS_CONFLICT);
        } catch (ServiceValidationException $ex) {
            return $this->error($ex, Http::STATUS_UNPROCESSABLE_ENTITY);
        }
    }

    public function destroy(string $tag) {
        try{
            $ItemShare = $this->service->delete(
                $tag
            );
            return ['ItemShare' => $ItemShare];
        }catch (ServiceConflictException $ex) {
            return $this->error($ex, Http::STATUS_CONFLICT);
        } catch (ServiceValidationException $ex) {
            return $this->error($ex, Http::STATUS_UNPROCESSABLE_ENTITY);
        } catch (ServiceNotFoundException $ex) {
            return $this->error($ex, Http::STATUS_NOT_FOUND);
        }
    }


}
