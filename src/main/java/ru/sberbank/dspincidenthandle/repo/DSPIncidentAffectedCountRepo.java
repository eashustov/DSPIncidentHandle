package ru.sberbank.dspincidenthandle.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentAffectedDataCount;

import java.util.List;

@Repository
public interface DSPIncidentAffectedCountRepo extends CrudRepository<DSPIncidentData, String> {

    //Запросы и методы для построения Bar Chart графика аналитики - проценты по инцидентам
    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCount();

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCountBarTotal();

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCountBarProm();

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncHandleByAffectedItemCountBarTest();

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncAutoByAffectedItemCountBarTotal();

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncAutoByAffectedItemCountBarProm();

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item ORDER BY count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentAffectedDataCount> findIncAutoByAffectedItemCountBarTest();
}
