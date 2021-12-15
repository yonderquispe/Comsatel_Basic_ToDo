
package com.yonder.backend.controler;

import com.yonder.backend.model.Tarea;
import com.yonder.backend.service.TareaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author yonder
 */

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("/api")
public class TareaControler {
    @Autowired
    private TareaService tareaService;
    
    @PostMapping("/tareas")
    public Tarea guardar(@RequestBody Tarea tarea)
    {
        return tareaService.save(tarea);
    }
    
    @GetMapping("/tareas")
    public List<Tarea> listar()
    {
        return tareaService.findAll();
    }
    
    @GetMapping("/tareas/{id}")
    public Tarea getUnaTarea(@PathVariable Integer id)
    {
        return tareaService.findById(id);
    }
    
    @PutMapping("/tareas/{id}")
    public Tarea modificar(@RequestBody Tarea tarea,@PathVariable Integer id)
    {
        Tarea TareaActual = tareaService.findById(id);
        TareaActual.setTarea(tarea.getTarea());
        TareaActual.setFinalizado(tarea.getFinalizado());
        
        return tareaService.save(TareaActual);
    }
    
    @DeleteMapping("/tareas/{id}")
    public void eliminar(@PathVariable Integer id)
    {
        tareaService.delete(id);
    }
    
    
}
