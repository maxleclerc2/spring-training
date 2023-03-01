package com.viseo.springtraining.service;

import com.viseo.springtraining.entity.Hero;
import com.viseo.springtraining.repository.HeroRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeroService {
    private HeroRepository heroRepository;

    HeroService(HeroRepository heroRepository) {
        this.heroRepository = heroRepository;
    }

    public List<Hero> getHeroes() {
        return this.heroRepository.findAll();
    }
}
