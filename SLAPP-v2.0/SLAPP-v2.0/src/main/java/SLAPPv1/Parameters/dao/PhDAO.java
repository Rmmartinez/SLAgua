package SLAPPv1.Parameters.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import SLAPPv1.Parameters.PH;

//Data Access Object
public interface PhDAO extends JpaRepository<PH, Long>{

	List<PH> findByPoolAndYearAndMonthAndDay(Long p, Long y, Long m, Long d);


}

