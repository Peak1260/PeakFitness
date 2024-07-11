package app.run;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

public record Run(
    Integer id,
    @NotEmpty
    String title,
    @Positive 
    Integer time,
    @Positive
    Integer miles,
    Location location
) {}
