package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@Profile("dev")
public interface DSPIncidentPrcCountRepoDev extends DSPIncidentPrcCountRepo{
    //Запросы и методы для Donut Chart аналитики - проценты по инцидентам

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARYSAFE p", nativeQuery = true)
    Integer findIncAutoCountDonutTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARYSAFE p", nativeQuery = true)
    Integer findIncHandleCountDonutTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARYSAFE p", nativeQuery = true)
    Integer findIncAutoCountDonutProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARYSAFE p", nativeQuery = true)
    Integer findIncHandleCountDonutProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARYSAFE p", nativeQuery = true)
    Integer findIncAutoCountDonutTest(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select COUNT (p.NUMBER) AS count_Inc from SMPRIMARYSAFE p", nativeQuery = true)
    Integer findIncHandleCountDonutTest(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
