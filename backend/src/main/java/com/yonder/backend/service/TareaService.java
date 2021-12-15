
package com.yonder.backend.service;

import com.yonder.backend.model.Tarea;
import java.util.List;

/**
 *
 * @author yonder
 */

public interface TareaService {
    public List<Tarea> findAll();
    public Tarea save(Tarea tarea);
    public Tarea findById(Integer id);
    public void delete(Integer id);
    
    
}
