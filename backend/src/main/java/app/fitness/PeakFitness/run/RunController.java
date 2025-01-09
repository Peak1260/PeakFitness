package app.fitness.PeakFitness.run;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/runs")
public class RunController {

    private static final Logger logger = LoggerFactory.getLogger(RunController.class);

    @Autowired
    private RunService runService;

    @GetMapping
    public ResponseEntity<List<Run>> getAllRuns() {
        logger.info("Fetching all runs");
        List<Run> runs = runService.getAllRuns();
        return ResponseEntity.ok(runs);
    }

    @PostMapping
    public ResponseEntity<Run> createRun(@RequestBody Run run) {
        logger.info("Creating new run");
        Run savedRun = runService.saveRun(run);
        return ResponseEntity.status(201).body(savedRun);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRunById(@PathVariable String id) {
        logger.info("Fetching run with ID: " + id);
        Optional<Run> run = runService.getRunById(id);
        if (run.isPresent()) {
            return ResponseEntity.ok(run.get());
        } else {
            return ResponseEntity.status(404).body("The run with id: " + id + " was not found.");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRun(@PathVariable String id) {
        logger.info("Deleting run with ID: " + id);
        Optional<Run> run = runService.getRunById(id);
        if (run.isPresent()) {
            runService.deleteRun(id);
            return ResponseEntity.ok("Success.");
        } else {
            return ResponseEntity.status(404).body("The run with id: " + id + " was not found.");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRun(@PathVariable String id, @RequestBody Run run) {
        logger.info("Updating run with ID: " + id);
        Optional<Run> existingRunOpt = runService.getRunById(id);

        if (existingRunOpt.isPresent()) {
            Run existingRun = existingRunOpt.get();

            Run updatedRun = new Run(
                    id,
                    run.title() != null ? run.title() : existingRun.title(),
                    run.time() != null ? run.time() : existingRun.time(),
                    run.miles() != null ? run.miles() : existingRun.miles(),
                    run.location() != null ? run.location() : existingRun.location());

            Run savedRun = runService.saveRun(updatedRun);
            return ResponseEntity.ok(savedRun);
        } else {
            return ResponseEntity.status(404).body("The run with id: " + id + " was not found.");
        }
    }
}
