<?php

/*
 * This file is part of the www.innoscripta.com test.
 *
 * @author Omar Makled <omar.makled@gmail.com.com>
 */

namespace Tests\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CompanyControllerTest extends WebTestCase
{
    private $client;

    private $companyId;

    private $billId;

    public function setUp()
    {
        $this->client = static::createClient();

        $doctrine = static::$kernel->getContainer()->get('doctrine');
        $this->companyId = $doctrine->getRepository('AppBundle:Company')->findFirst()->getId();
        $this->billId = $doctrine->getRepository('AppBundle:Bill')->findFirst()->getId();
    }

    public function testGetCompanies()
    {
        $this->client->request('GET', '/api/companies/');
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('id', $data['companies'][0]);
        $this->assertArrayHasKey('name', $data['companies'][0]);
        $this->assertArrayHasKey('address', $data['companies'][0]);
        $this->assertArrayHasKey('total_bills', $data['companies'][0]);
        $this->assertArrayHasKey('count_bills', $data['companies'][0]);
    }

    public function testAddCompany()
    {
        $this->client->request('POST', '/api/companies/', [
            'name' => 'NewCompany',
            'address' => 'NewAddress',
        ]);
        $this->assertEquals(201, $this->client->getResponse()->getStatusCode());

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('company', $data);
        $this->assertArrayHasKey('message', $data);
    }

    public function testUpdateCompany()
    {
        $this->client->request('PUT', "/api/companies/{$this->companyId}/", [
            'name' => 'NewCompany',
            'address' => 'NewAddress',
        ]);
        $this->assertEquals(201, $this->client->getResponse()->getStatusCode());

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('company', $data);
        $this->assertArrayHasKey('message', $data);
    }

    public function testAddBill()
    {
        $this->client->request('POST', "/api/companies/{$this->companyId}/bills/", [
            'amount' => 1000,
            'created_at' => date('Y-m-d'),
        ]);
        $this->assertEquals(201, $this->client->getResponse()->getStatusCode());

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('bill', $data);
        $this->assertArrayHasKey('message', $data);
    }

    public function testUpdateBill()
    {
        $this->client->request('PUT', "/api/companies/{$this->companyId}/bills/{$this->billId}/", [
            'amount' => 1000,
            'created_at' => date('Y-m-d'),
        ]);
        $this->assertEquals(201, $this->client->getResponse()->getStatusCode());

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('bill', $data);
        $this->assertArrayHasKey('message', $data);
    }

    public function testGetBills()
    {
        $this->client->request('GET', "/api/companies/{$this->companyId}/bills/");
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('company', $data);
        $this->assertArrayHasKey('bills', $data);
    }
}
