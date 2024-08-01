package app.fitness.PeakFitness.run;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

@Document("runs")
public record Run(
    @Id String id,
    @NotEmpty String title,
    @Positive Number time,
    @Positive Number miles,
    @NotEmpty String location
) {}