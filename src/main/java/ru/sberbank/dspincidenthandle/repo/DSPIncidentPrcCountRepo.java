package ru.sberbank.dspincidenthandle.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;

@Repository
public interface DSPIncidentPrcCountRepo extends CrudRepository<DSPIncidentData, String>{

//Запросы и методы для Donut Chart аналитики - проценты по инцидентам

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncAutoCountDonutTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncHandleCountDonutTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncAutoCountDonutProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncHandleCountDonutProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncAutoCountDonutTest(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p", nativeQuery = true)
    Integer findIncHandleCountDonutTest(@Param("startDate") String startDate, @Param("endDate") String endDate);

}
