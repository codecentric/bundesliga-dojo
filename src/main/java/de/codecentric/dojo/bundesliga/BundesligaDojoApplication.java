package de.codecentric.dojo.bundesliga;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.codecentric.dojo.bundesliga.data.TeamStanding;

@SpringBootApplication
@RestController
public class BundesligaDojoApplication {

  @Autowired
  private StandingsCalculator calculator;

  @RequestMapping("/standings")
  public List<TeamStanding> standings() {
    return Collections.emptyList();
  }

  public static void main(String[] args) {
    SpringApplication.run(BundesligaDojoApplication.class, args);
  }

}

