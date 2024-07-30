package app.run;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

@Document(collection = "workouts")
public record Run(
    @Id Integer id,
    @NotEmpty String title,
    @Positive Integer time,
    @Positive Integer miles,
    @NotEmpty String location
) {}