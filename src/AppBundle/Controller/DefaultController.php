<?php

/*
 * This file is part of the www.innoscripta.com test.
 *
 * @author Omar Makled <omar.makled@gmail.com.com>
 */

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return new JsonResponse('Cool !', 200);
    }
}
