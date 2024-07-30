package app.run;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/runs")
public class RunController {

    @Autowired
    private RunService runService;

    @GetMapping
    public List<Run> getAllRuns() {
        return runService.getAllRuns();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Run> getRunById(@PathVariable String id) {
        Optional<Run> run = runService.getRunById(id);
        return run.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Run> createRun(@RequestBody Run run) {
        Run savedRun = runService.saveRun(run);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRun);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRun(@PathVariable String id) {
        runService.deleteRun(id);
        return ResponseEntity.noContent().build();
    }
}
