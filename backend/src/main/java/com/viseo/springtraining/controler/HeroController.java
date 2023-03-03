package com.viseo.springtraining.controler;

import com.viseo.springtraining.entity.Hero;
import com.viseo.springtraining.service.HeroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hero")
@CrossOrigin("*")
public class HeroController {
    private final HeroService heroService;

    public HeroController(HeroService heroService) {
        this.heroService = heroService;
    }

    @GetMapping
    public List<Hero> getHeroes() {
        return heroService.getHeroes();
    }

    @GetMapping("/{id}")
    public Hero getHeroById(@PathVariable Long id) {
        return heroService.getHeroById(id);
    }

    @RequestMapping(method = { RequestMethod.PUT,  RequestMethod.POST })
    public Hero createHero(@RequestBody Hero newHero) {
        return this.heroService.createHero(newHero);
    }

    @DeleteMapping("/{id}")
    public void deleteHero(@PathVariable Long id) {
        this.heroService.deleteHero(id);
    }
}
