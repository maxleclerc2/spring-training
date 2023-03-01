package com.viseo.springtraining.controler;

import com.viseo.springtraining.entity.Hero;
import com.viseo.springtraining.service.HeroService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {
    private final HeroService heroService;

    public HelloController(HeroService heroService) {
        this.heroService = heroService;
    }

    @GetMapping("/hello")
    public List<Hero> hello() {
        return heroService.getHeroes();
    }
}
