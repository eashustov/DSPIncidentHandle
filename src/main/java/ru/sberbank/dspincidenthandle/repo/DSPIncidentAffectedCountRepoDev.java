package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentAffectedDataCount;

import java.util.List;

@Repository
@Profile("dev")
public interface DSPIncidentAffectedCountRepoDev extends DSPIncidentAffectedCountRepo{
    //Запросы и методы для построения Bar Chart графика аналитики - проценты по инцидентам
    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCount(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCountBarTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCountBarProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCountBarTest(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncAutoByAffectedItemCountBarTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncAutoByAffectedItemCountBarProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncAutoByAffectedItemCountBarTest(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
