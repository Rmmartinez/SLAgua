package SLAPPv1.Parameters.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import SLAPPv1.Parameters.Temp;

//Data Access Object
public interface TempDAO extends JpaRepository<Temp, Long>{

	List<Temp> findByPoolAndYearAndMonthAndDay(Long p, Long y, Long m, Long d);

}

