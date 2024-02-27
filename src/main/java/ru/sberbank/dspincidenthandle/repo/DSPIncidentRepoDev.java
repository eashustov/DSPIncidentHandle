package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;

import java.util.List;

@Repository
@Profile("dev")
public interface DSPIncidentRepoDev extends DSPIncidentRepo{
    @Query(value = "select * from SMPRIMARYSAFE p LIMIT 500", nativeQuery = true)
    List<DSPIncidentData> findIncAllByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
