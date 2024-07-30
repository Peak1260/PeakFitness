package app.run;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RunRepository extends MongoRepository<Run, String> {
}
