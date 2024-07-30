package app.run;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RunService {

    @Autowired
    private RunRepository runRepository;

    public List<Run> getAllRuns() {
        return runRepository.findAll();
    }

    public Optional<Run> getRunById(String id) {
        return runRepository.findById(id);
    }

    public Run saveRun(Run run) {
        return runRepository.save(run);
    }

    public void deleteRun(String id) {
        runRepository.deleteById(id);
    }
}
