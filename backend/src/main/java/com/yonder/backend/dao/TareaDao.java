
package com.yonder.backend.dao;

import com.yonder.backend.model.Tarea;
import org.springframework.data.repository.CrudRepository;
/**
 *
 * @author yonder
 */
public interface TareaDao extends CrudRepository<Tarea, Integer>{
    
}
