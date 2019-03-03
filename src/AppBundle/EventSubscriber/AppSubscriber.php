<?php

namespace AppBundle\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;

class AppSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
            KernelEvents::RESPONSE => 'onKernelResponse',
            KernelEvents::EXCEPTION => 'onKernelException',
        ];
    }

    public function onKernelRequest(GetResponseEvent $event)
    {
        $request = $event->getRequest();
        if ($request->getRealMethod() == 'OPTIONS') {
            $event->setResponse(new Response());
        }

        if ($content = $request->getContent()) {
            $data = json_decode($content, true);
            $request->request = new ParameterBag($data);
        }
    }

    public function onKernelResponse(FilterResponseEvent $event)
    {
        $response = $event->getResponse();

        $response->headers->set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        $response->headers->set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        $response->headers->set('Access-Control-Allow-Origin', '*');
    }

    public function onKernelException(GetResponseForExceptionEvent $e)
    {
        $e->setResponse(new JsonResponse($e->getException()->getMessage()));
    }
}
