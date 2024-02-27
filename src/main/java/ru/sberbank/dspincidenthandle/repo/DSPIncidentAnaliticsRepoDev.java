package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;

import java.util.List;

@Repository
@Profile("dev")
public interface DSPIncidentAnaliticsRepoDev extends DSPIncidentAnaliticsRepo {
    @Query(value = "select * from SMPRIMARYSAFE p where p.PLAN_OPEN BETWEEN TO_CHAR(:startDate, 'dd.MM.yyyy HH:mm:ss') AND TO_CHAR(:endDate, 'dd.MM.yyyy HH:mm:ss')", nativeQuery = true)
    List<DSPIncidentData> findAllIncAnaliticByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);

    //Запрос для поиска автоинцидентов за период
    @Query(value = "select * from SMPRIMARYSAFE p where p.PLAN_OPEN BETWEEN TO_CHAR(:startDate, 'dd.MM.yyyy HH:mm:ss') AND TO_CHAR(:endDate, 'dd.MM.yyyy HH:mm:ss')" +
            "AND upper(ACTION) like '%' || upper(:searchFilter) || '%'", nativeQuery = true)
    List<DSPIncidentData> findIncBySearchFilter(@Param("startDate") String startDate, @Param("endDate") String endDate, @Param("searchFilter") String searchFilter);
}
