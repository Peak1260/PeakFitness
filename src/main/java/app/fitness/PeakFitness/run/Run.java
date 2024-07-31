package app.fitness.PeakFitness.run;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

@Document("runs")
public record Run(
    @Id Integer id,
    @NotEmpty String title,
    @Positive Integer time,
    @Positive Integer miles,
    @NotEmpty String location
) {}