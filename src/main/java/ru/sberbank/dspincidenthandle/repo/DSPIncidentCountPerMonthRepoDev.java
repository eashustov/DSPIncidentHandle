package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentDataCountPerMonth;

import java.util.List;

@Repository
@Profile("dev")
public interface DSPIncidentCountPerMonthRepoDev extends DSPIncidentCountPerMonthRepo{
    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.PLAN_OPEN, 'yyyy.MM.dd HH:mm')) AS month_,  MONTH(PARSEDATETIME(p.PLAN_OPEN, 'yyyy.MM.dd HH:mm')) AS month_number, YEAR(PARSEDATETIME(p.PLAN_OPEN, 'yyyy.MM.dd HH:mm')) AS year_, COUNT (p.NUMBER) AS count_inc from SMPRIMARY p \n" +
            "GROUP BY HPC_AFFECTED_ITEM_NAME, MONTHNAME(PARSEDATETIME(p.PLAN_OPEN, 'yyyy.MM.dd HH:mm')), MONTH(PARSEDATETIME(p.PLAN_OPEN, 'yyyy.MM.dd HH:mm')), YEAR(PARSEDATETIME(p.PLAN_OPEN, 'yyyy.MM.dd HH:mm'))\n" +
            "ORDER BY HPC_AFFECTED_ITEM_NAME, year_, month_number ASC", nativeQuery = true)
    List<IDSPIncidentDataCountPerMonth> findIncAffectedItemCountPerMonth(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
