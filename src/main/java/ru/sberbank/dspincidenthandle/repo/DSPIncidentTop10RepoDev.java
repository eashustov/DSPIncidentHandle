package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentDataTop10;

import java.util.List;

@Repository
@Profile("dev")
public interface DSPIncidentTop10RepoDev extends DSPIncidentTop10Repo{
    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, p.HPC_ASSIGNEE_NAME as Assignee_Name," +
            " COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item, Assignee_Name ORDER BY  Affected_Item, count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentDataTop10> findTop10IncCount(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
