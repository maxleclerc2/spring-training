package com.viseo.springtraining.repository;

import com.viseo.springtraining.entity.Hero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HeroRepository extends JpaRepository<Hero, Long> {
    List<Hero> findAllByOrderByIdAsc();
    List<Hero> findByNameContainingIgnoreCase(String name);
}
