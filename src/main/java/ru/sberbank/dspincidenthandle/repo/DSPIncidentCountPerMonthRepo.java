package ru.sberbank.dspincidenthandle.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentDataCountPerMonth;



import java.util.List;

@Repository
public interface DSPIncidentCountPerMonthRepo extends CrudRepository<DSPIncidentData, String> {

    @Query(value = "select HPC_AFFECTED_ITEM_NAME, to_char(\"PLAN_OPEN\", 'Month') AS \"MONTH\",\n" +
            "  to_char(\"PLAN_OPEN\", 'MM') AS \"MONTH_NUMBER\", to_char(\"PLAN_OPEN\", 'YYYY') AS \"YEAR\",\n" +
            "  COUNT (\"NUMBER\")AS \"COUNT_INC\"\n" +
            "from (\n" +
            "         select \n" +
            "                \"NUMBER\",\n" +
            "                HPC_AFFECTED_ITEM_NAME,\n" +
            "                OPEN_TIME as PLAN_OPEN,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "                \t\t\t\t\n" +
            "         from SMPRIMARY.PROBSUMMARYM1\n" +
            "         union all\n" +
            "         select \n" +
            "                \"NUMBER\",\n" +
            "                 HPC_AFFECTED_ITEM_NAME,\n" +
            "                OPEN_TIME as PLAN_OPEN,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "                \n" +
            "         from SMPRIMARY.SBPROBSUMMARYTSM1\n" +
            "      )\n" +
            " where HPC_ASSIGNMENT_NAME in\n" +
            "      ('SberInfra УСП Платформы ESB (Бирюков Р.С.)', 'SberInfra УСП Системы очередей сообщений (Долгополов М.Ю.)',\n" +
            "       'SberInfra УСП Шлюзовые решения (Шитиков В.Е.)', 'SberInfra УСП Интеграционные платформы (Гоголев К.Ю.)',\n" +
            "       'SberInfra УСП Серверы приложений (Мутин Д.И.)', 'SberInfra УСП Дежурная смена (Зайцев А.М.)')\n" +
            "  and HPC_AFFECTED_ITEM_NAME in\n" +
            "      ('Интеграционные платформы серверов приложений (CI00737140)', 'IBM WebSphere MQ (CI02021291)',\n" +
            "       'IBM Websphere MB (CI02192119)', 'SOWA (CI02192118)', 'Apache Kafka (CI02192117)',\n" +
            "       'IBM DataPower (CI02021290)', 'WildFly (CI02021292)', 'IBM WebSphere Application Server (CI02021299)',\n" +
            "       'Nginx (CI02021302)', 'Платформа управления контейнерами (Terra) (CI01563053)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "  and HPC_CREATED_BY not in 'Технологический пользователь АС ZABBIX_SI (00738651)' \n" +
            "  and TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "  GROUP BY HPC_AFFECTED_ITEM_NAME, to_char(\"PLAN_OPEN\", 'Month'), to_char(\"PLAN_OPEN\", 'MM'), to_char(\"PLAN_OPEN\", 'YYYY')\n" +
            "ORDER BY HPC_AFFECTED_ITEM_NAME, \"YEAR\", \"MONTH_NUMBER\" ASC", nativeQuery = true)
    List<IDSPIncidentDataCountPerMonth> findIncAffectedItemCountPerMonth(@Param("startDate") String startDate, @Param("endDate") String endDate);

}
