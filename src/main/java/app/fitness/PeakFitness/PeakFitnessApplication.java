package app.fitness.PeakFitness;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"app.fitness", "app.run"})
public class PeakFitnessApplication {

    public static final Logger log = LoggerFactory.getLogger(PeakFitnessApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(PeakFitnessApplication.class, args);
    }
}
