<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation\Type;

/**
 * Bill.
 *
 * @ORM\Table(name="bill")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BillRepository")
 * @Serializer\ExclusionPolicy("all")
 */
class Bill
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
     * @var int
     *
     * @ORM\Column(name="amount", type="decimal", precision=8, scale=2)
     * @Assert\NotBlank()
     * @Serializer\Groups({"Default"})
     * @Serializer\Expose
     */
    private $amount;

    /**
     * @var int
     *
     * @ORM\Column(name="created_at", type="datetime")
     * @Assert\NotBlank()
     * @Type("DateTime<'Y-m-d h:m:s'>")
     * @Serializer\Groups({"Default"})
     * @Serializer\Expose
     */
    private $created_at;

    /**
     * @ORM\ManyToOne(targetEntity="Company", inversedBy="bills")
     * @ORM\JoinColumn(name="company_id", referencedColumnName="id", nullable=false)
     * @Assert\NotBlank()
     */
    private $company;

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
     * Set amount.
     *
     * @param string $amount
     *
     * @return Bill
     */
    public function setAmount($amount)
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * Get amount.
     *
     * @return string
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Set createdAt.
     *
     * @param \DateTime||string $createdAt
     *
     * @return Bill
     */
    public function setCreatedAt($createdAt)
    {
        if (is_string($createdAt)){
            $createdAt = new \DateTime($createdAt);
        }

        $this->created_at = $createdAt;

        return $this;
    }

    /**
     * Get createdAt.
     *
     * @return \DateTime||string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Set company.
     *
     * @param \AppBundle\Entity\Company $company
     *
     * @return Bill
     */
    public function setCompany(\AppBundle\Entity\Company $company)
    {
        $this->company = $company;

        return $this;
    }

    /**
     * Get company.
     *
     * @return \AppBundle\Entity\Company
     */
    public function getCompany()
    {
        return $this->company;
    }
}
