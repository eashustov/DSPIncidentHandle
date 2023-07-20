package ru.sberbank.dspincidenthandle.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;

@Repository
public interface DSPIncidentPrcCountRepo extends CrudRepository<DSPIncidentData, String>{

//Запросы и методы для Donut Chart аналитики - проценты по инцидентам

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncAutoCountDonutTotal();

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncHandleCountDonutTotal();

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncAutoCountDonutProm();

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncHandleCountDonutProm();

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncAutoCountDonutTest();

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncHandleCountDonutTest();

}
