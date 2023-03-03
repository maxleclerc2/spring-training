package com.viseo.springtraining.service;

import com.viseo.springtraining.entity.Hero;
import com.viseo.springtraining.repository.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeroService {
    @Autowired
    private HeroRepository heroRepository;

    public List<Hero> getHeroes() {
        return this.heroRepository.findAllByOrderByIdAsc();
    }

    public Hero getHeroById(Long id) {
        return this.heroRepository.findById(id).get();
    }

    public List<Hero> searchHeroByName(String name) {
        return this.heroRepository.findByNameContainingIgnoreCase(name);
    }

    public Hero createHero(Hero newHero) {
        return this.heroRepository.save(newHero);
    }

    public void deleteHero(Long id) {
        this.heroRepository.deleteById(id);
    }
}
