<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * BaseRepository.
 */
class BaseRepository extends EntityRepository
{
    public function findFirst()
    {
        $qb = $this->createQueryBuilder('t');
        $qb->setMaxResults(1);
        $qb->orderBy('t.id', 'ASC');

        return $qb->getQuery()->getSingleResult();
    }
}
