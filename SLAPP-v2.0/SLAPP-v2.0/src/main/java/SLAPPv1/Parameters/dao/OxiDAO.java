package SLAPPv1.Parameters.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import SLAPPv1.Parameters.OXI;


//Data Access Object
public interface OxiDAO extends JpaRepository<OXI, Long>{

	List<OXI> findByPoolAndYearAndMonthAndDay(Long p, Long y, Long m, Long d);

}
