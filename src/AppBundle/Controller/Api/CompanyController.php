<?php

/*
 * This file is part of the www.innoscripta.com test.
 *
 * @author Omar Makled <omar.makled@gmail.com.com>
 */

namespace AppBundle\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use AppBundle\Entity\Company;
use AppBundle\Entity\Bill;

/**
 * Class AddressBookController.
 *
 * @Route("/api/companies")
 */
class CompanyController extends Controller
{
    /**
     * @Route("/", name="get_companies", methods={"GET"})
     */
    public function getCompanies()
    {
        $companies = $this->getDoctrine()
            ->getRepository('AppBundle:Company')
            ->billSummary();

        return new JsonResponse(compact('companies'), 200);
    }

    /**
     * @Route("/", name="add_company", methods={"POST", "OPTIONS"})
     */
    public function addCompany(Request $request)
    {
        $company = new Company();
        $company->setName($request->request->get('name'));
        $company->setAddress($request->request->get('address'));

        if ($messages = $this->getViolation($company)) {
            return new JsonResponse($messages, 422);
        }

        return new JsonResponse([
            'company' => $this->serialize($this->save($company)),
            'message' => 'Successful! Compnay has been created',
        ], 201);
    }

    /**
     * @Route("/{id}/", name="update_company", methods={"PUT", "OPTIONS"})
     */
    public function updateCompany(Request $request, Company $company)
    {
        $company->setName($request->request->get('name'));
        $company->setAddress($request->request->get('address'));

        if ($messages = $this->getViolation($company)) {
            return new JsonResponse($messages, 422);
        }

        return new JsonResponse([
            'company' => $this->serialize($this->save($company)),
            'message' => 'Successful! Compnay has been updated',
        ], 201);
    }

    /**
     * @Route("/{id}/bills/", name="add_bill", methods={"POST", "OPTIONS"})
     */
    public function addBill(Request $request, Company $company)
    {
        $bill = new Bill();
        $bill->setAmount($request->request->get('amount'));
        $bill->setCreatedAt($request->request->get('created_at'));
        $bill->setCompany($company);

        if ($messages = $this->getViolation($bill)) {
            return new JsonResponse($messages, 422);
        }

        return new JsonResponse([
            'bill' => $this->serialize($this->save($bill)),
            'message' => 'Successful! Bill has been created',
        ], 201);
    }

    /**
     * @Route("/{id}/bills/{bill}/", name="edit_bill", methods={"PUT", "OPTIONS"})
     */
    public function updateBill(Request $request, Company $company, Bill $bill)
    {
        $bill->setAmount($request->request->get('amount'));
        $bill->setCreatedAt($request->request->get('created_at'));
        $bill->setCompany($company);

        if ($messages = $this->getViolation($bill)) {
            return new JsonResponse($messages, 422);
        }

        return new JsonResponse([
            'bill' => $this->serialize($this->save($bill)),
            'message' => 'Successful! Bill has been updated',
        ], 201);
    }

    /**
     * @Route("/{id}/bills/", name="get_bills", methods={"GET"})
     */
    public function getBills($id)
    {
        $repo = $this->getDoctrine()->getRepository('AppBundle:Company');

        $bills = $repo->billList($id);
        $company = $repo->billSummary($id);

        return new JsonResponse(compact('company', 'bills'), 200);
    }

    /**
     * Get violation messages.
     * 
     * @param mixed $object
     *
     * @return boo
     */
    private function getViolation($object)
    {
        $validator = $this->get('validator');
        $errors = $validator->validate($object);

        $messages = [];
        if (count($errors) > 0) {
            foreach ($errors as $violation) {
                $messages[$violation->getPropertyPath()][] = $violation->getMessage();
            }
        }

        return $messages;
    }

    /**
     * Save an entity.
     * 
     * @param mixed $object
     */
    private function save($object)
    {
        $em = $this->getDoctrine()->getManager();
        $em->persist($object);
        $em->flush();

        return $object;
    }

    /**
     * Serilaize an entity.
     *
     * @param mixed  $object
     * @param string $groups
     *
     * @return string
     */
    private function serialize($object, $groups = 'Default')
    {
        $context = SerializationContext::create()->setGroups($groups);
        $serializer = SerializerBuilder::create()->build();
        $object = $serializer->serialize($object, 'json', $context);

        return json_decode($object);
    }
}
