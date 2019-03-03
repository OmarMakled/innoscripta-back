<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Company
 *
 * @ORM\Table(name="company")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CompanyRepository")
 * @Serializer\ExclusionPolicy("all")
 */
class Company
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Serializer\Groups({"Default"})
     * @Serializer\Expose
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     * @Assert\NotBlank()
     * @Serializer\Groups({"Default"})
     * @Serializer\Expose
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=255)
     * @Assert\NotBlank()
     * @Serializer\Groups({"Default"})
     * @Serializer\Expose
     */
    private $address;

    /**
     * @ORM\OneToMany(targetEntity="Bill", mappedBy="company")
     */
    private $bills;

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Company
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set address.
     *
     * @param string $address
     *
     * @return Company
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address.
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->bills = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add bill.
     *
     * @param \AppBundle\Entity\Bill $bill
     *
     * @return Company
     */
    public function addBill(\AppBundle\Entity\Bill $bill)
    {
        $this->bills[] = $bill;

        return $this;
    }

    /**
     * Remove bill.
     *
     * @param \AppBundle\Entity\Bill $bill
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeBill(\AppBundle\Entity\Bill $bill)
    {
        return $this->bills->removeElement($bill);
    }

    /**
     * Get bills.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getBills()
    {
        return $this->bills;
    }
}
