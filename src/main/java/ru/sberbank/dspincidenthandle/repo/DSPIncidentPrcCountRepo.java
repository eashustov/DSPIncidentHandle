package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;

@Repository
@Profile("!dev & !prod")
public interface DSPIncidentPrcCountRepo extends CrudRepository<DSPIncidentData, String>{

//Запросы и методы для Donut Chart аналитики - проценты по инцидентам

    @Query(value = "select \n" +
            "       COUNT(\"NUMBER\") as \"count_Inc\"\n" +
            "       \n" +
            "from (\n" +
            "         select \n" +
            "                \n" +
            "                \"NUMBER\",\n" +
            "                 HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.PROBSUMMARYM1\n" +
            "         \n" +
            "         union all\n" +
            "         select \n" +
            "               \n" +
            "                \"NUMBER\",\n" +
            "                HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.SBPROBSUMMARYTSM1\n" +
            "     )\n" +
            "where HPC_ASSIGNMENT_NAME in\n" +
            "      ('SberInfra УСП Платформы ESB (Бирюков Р.С.)', 'SberInfra УСП Системы очередей сообщений (Долгополов М.Ю.)',\n" +
            "       'SberInfra УСП Шлюзовые решения (Шитиков В.Е.)', 'SberInfra УСП Интеграционные платформы (Гоголев К.Ю.)',\n" +
            "       'SberInfra УСП Серверы приложений (Мутин Д.И.)', 'SberInfra УСП Дежурная смена (Зайцев А.М.)',\n" +
            "       'SberInfra Сопровождение Платформы управления контейнерами (Косов М.В.)')\n" +
            "  and HPC_AFFECTED_ITEM_NAME in\n" +
            "      ('Интеграционные платформы серверов приложений (CI00737140)', 'IBM WebSphere MQ (CI02021291)',\n" +
            "       'IBM Websphere MB (CI02192119)', 'SOWA (CI02192118)','«Platform V Corax» (CI04085569)', 'Apache Kafka (CI02192117)',\n" +
            "       'IBM DataPower (CI02021290)', 'WildFly (CI02021292)', 'IBM WebSphere Application Server (CI02021299)',\n" +
            "       'Nginx (CI02021302)', 'Платформа управления контейнерами (Terra) (CI01563053)',\n" +
            "       'SynGX (CI04178739)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "  and HPC_CREATED_BY in ('Технологический пользователь АС ZABBIX_SI (00738651)', " +
            "'INT_SC_SERVICE_PROXY (756759)', 'INT_SC_SERVICE_PROXY (00563040)') \n" +
            "  and TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')", nativeQuery = true)
    Integer findIncAutoCountDonutTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select \n" +
            "       COUNT(\"NUMBER\") as \"count_Inc\"\n" +
            "       \n" +
            "from (\n" +
            "         select \n" +
            "                \n" +
            "                \"NUMBER\",\n" +
            "                 HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.PROBSUMMARYM1\n" +
            "         \n" +
            "         union all\n" +
            "         select \n" +
            "               \n" +
            "                \"NUMBER\",\n" +
            "                HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.SBPROBSUMMARYTSM1\n" +
            "     )\n" +
            "where HPC_ASSIGNMENT_NAME in\n" +
            "      ('SberInfra УСП Платформы ESB (Бирюков Р.С.)', 'SberInfra УСП Системы очередей сообщений (Долгополов М.Ю.)',\n" +
            "       'SberInfra УСП Шлюзовые решения (Шитиков В.Е.)', 'SberInfra УСП Интеграционные платформы (Гоголев К.Ю.)',\n" +
            "       'SberInfra УСП Серверы приложений (Мутин Д.И.)', 'SberInfra УСП Дежурная смена (Зайцев А.М.)',\n" +
            "       'SberInfra Сопровождение Платформы управления контейнерами (Косов М.В.)')\n" +
            "  and HPC_AFFECTED_ITEM_NAME in\n" +
            "      ('Интеграционные платформы серверов приложений (CI00737140)', 'IBM WebSphere MQ (CI02021291)',\n" +
            "       'IBM Websphere MB (CI02192119)', 'SOWA (CI02192118)','«Platform V Corax» (CI04085569)', 'Apache Kafka (CI02192117)',\n" +
            "       'IBM DataPower (CI02021290)', 'WildFly (CI02021292)', 'IBM WebSphere Application Server (CI02021299)',\n" +
            "       'Nginx (CI02021302)', 'Платформа управления контейнерами (Terra) (CI01563053)',\n" +
            "       'SynGX (CI04178739)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "  and HPC_CREATED_BY not in ('Технологический пользователь АС ZABBIX_SI (00738651)'," +
            " 'INT_SC_SERVICE_PROXY (756759)', 'INT_SC_SERVICE_PROXY (00563040)') \n" +
            "  and TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')", nativeQuery = true)
    Integer findIncHandleCountDonutTotal(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select \n" +
            "       COUNT(\"NUMBER\") as \"count_Inc\"\n" +
            "       \n" +
            "from (\n" +
            "         select \n" +
            "               \n" +
            "                \"NUMBER\",\n" +
            "                HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.PROBSUMMARYM1\n" +
            "     )\n" +
            "where HPC_ASSIGNMENT_NAME in\n" +
            "      ('SberInfra УСП Платформы ESB (Бирюков Р.С.)', 'SberInfra УСП Системы очередей сообщений (Долгополов М.Ю.)',\n" +
            "       'SberInfra УСП Шлюзовые решения (Шитиков В.Е.)', 'SberInfra УСП Интеграционные платформы (Гоголев К.Ю.)',\n" +
            "       'SberInfra УСП Серверы приложений (Мутин Д.И.)', 'SberInfra УСП Дежурная смена (Зайцев А.М.)',\n" +
            "       'SberInfra Сопровождение Платформы управления контейнерами (Косов М.В.)')\n" +
            "  and HPC_AFFECTED_ITEM_NAME in\n" +
            "      ('Интеграционные платформы серверов приложений (CI00737140)', 'IBM WebSphere MQ (CI02021291)',\n" +
            "       'IBM Websphere MB (CI02192119)', 'SOWA (CI02192118)','«Platform V Corax» (CI04085569)', 'Apache Kafka (CI02192117)',\n" +
            "       'IBM DataPower (CI02021290)', 'WildFly (CI02021292)', 'IBM WebSphere Application Server (CI02021299)',\n" +
            "       'Nginx (CI02021302)', 'Платформа управления контейнерами (Terra) (CI01563053)',\n" +
            "       'SynGX (CI04178739)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "  and HPC_CREATED_BY in ('Технологический пользователь АС ZABBIX_SI (00738651)'," +
            " 'INT_SC_SERVICE_PROXY (756759)', 'INT_SC_SERVICE_PROXY (00563040)') \n" +
            "  and TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')", nativeQuery = true)
    Integer findIncAutoCountDonutProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select \n" +
            "       COUNT(\"NUMBER\") as \"count_Inc\"\n" +
            "       \n" +
            "from (\n" +
            "         select \n" +
            "               \n" +
            "                \"NUMBER\",\n" +
            "                HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.PROBSUMMARYM1\n" +
            "     )\n" +
            "where HPC_ASSIGNMENT_NAME in\n" +
            "      ('SberInfra УСП Платформы ESB (Бирюков Р.С.)', 'SberInfra УСП Системы очередей сообщений (Долгополов М.Ю.)',\n" +
            "       'SberInfra УСП Шлюзовые решения (Шитиков В.Е.)', 'SberInfra УСП Интеграционные платформы (Гоголев К.Ю.)',\n" +
            "       'SberInfra УСП Серверы приложений (Мутин Д.И.)', 'SberInfra УСП Дежурная смена (Зайцев А.М.)',\n" +
            "       'SberInfra Сопровождение Платформы управления контейнерами (Косов М.В.)')\n" +
            "  and HPC_AFFECTED_ITEM_NAME in\n" +
            "      ('Интеграционные платформы серверов приложений (CI00737140)', 'IBM WebSphere MQ (CI02021291)',\n" +
            "       'IBM Websphere MB (CI02192119)', 'SOWA (CI02192118)','«Platform V Corax» (CI04085569)', 'Apache Kafka (CI02192117)',\n" +
            "       'IBM DataPower (CI02021290)', 'WildFly (CI02021292)', 'IBM WebSphere Application Server (CI02021299)',\n" +
            "       'Nginx (CI02021302)', 'Платформа управления контейнерами (Terra) (CI01563053)',\n" +
            "       'SynGX (CI04178739)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "  and HPC_CREATED_BY not in ('Технологический пользователь АС ZABBIX_SI (00738651)'," +
            " 'INT_SC_SERVICE_PROXY (756759)', 'INT_SC_SERVICE_PROXY (00563040)') \n" +
            "  and TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')", nativeQuery = true)
    Integer findIncHandleCountDonutProm(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select \n" +
            "       COUNT(\"NUMBER\") as \"count_Inc\"\n" +
            "       \n" +
            "from (\n" +
            "         select \n" +
            "               \n" +
            "                \"NUMBER\",\n" +
            "                HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.SBPROBSUMMARYTSM1\n" +
            "     )\n" +
            "where HPC_ASSIGNMENT_NAME in\n" +
            "      ('SberInfra УСП Платформы ESB (Бирюков Р.С.)', 'SberInfra УСП Системы очередей сообщений (Долгополов М.Ю.)',\n" +
            "       'SberInfra УСП Шлюзовые решения (Шитиков В.Е.)', 'SberInfra УСП Интеграционные платформы (Гоголев К.Ю.)',\n" +
            "       'SberInfra УСП Серверы приложений (Мутин Д.И.)', 'SberInfra УСП Дежурная смена (Зайцев А.М.)',\n" +
            "       'SberInfra Сопровождение Платформы управления контейнерами (Косов М.В.)')\n" +
            "  and HPC_AFFECTED_ITEM_NAME in\n" +
            "      ('Интеграционные платформы серверов приложений (CI00737140)', 'IBM WebSphere MQ (CI02021291)',\n" +
            "       'IBM Websphere MB (CI02192119)', 'SOWA (CI02192118)','«Platform V Corax» (CI04085569)', 'Apache Kafka (CI02192117)',\n" +
            "       'IBM DataPower (CI02021290)', 'WildFly (CI02021292)', 'IBM WebSphere Application Server (CI02021299)',\n" +
            "       'Nginx (CI02021302)', 'Платформа управления контейнерами (Terra) (CI01563053)',\n" +
            "       'SynGX (CI04178739)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "  and HPC_CREATED_BY in ('Технологический пользователь АС ZABBIX_SI (00738651)'," +
            " 'INT_SC_SERVICE_PROXY (756759)', 'INT_SC_SERVICE_PROXY (00563040)') \n" +
            "  and TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')", nativeQuery = true)
    Integer findIncAutoCountDonutTest(@Param("startDate") String startDate, @Param("endDate") String endDate);

    @Query(value = "select \n" +
            "       COUNT(\"NUMBER\") as \"count_Inc\"\n" +
            "       \n" +
            "from (\n" +
            "         select \n" +
            "               \n" +
            "                \"NUMBER\",\n" +
            "                HPC_AFFECTED_ITEM_NAME,\n" +
            "                to_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')          plan_end,\n" +
            "                HPC_CREATED_BY,\n" +
            "                HPC_STATUS,\n" +
            "                HPC_ASSIGNMENT_NAME\n" +
            "         from SMPRIMARY.SBPROBSUMMARYTSM1\n" +
            "     )\n" +
            "where HPC_ASSIGNMENT_NAME in\n" +
            "      ('SberInfra УСП Платформы ESB (Бирюков Р.С.)', 'SberInfra УСП Системы очередей сообщений (Долгополов М.Ю.)',\n" +
            "       'SberInfra УСП Шлюзовые решения (Шитиков В.Е.)', 'SberInfra УСП Интеграционные платформы (Гоголев К.Ю.)',\n" +
            "       'SberInfra УСП Серверы приложений (Мутин Д.И.)', 'SberInfra УСП Дежурная смена (Зайцев А.М.)',\n" +
            "       'SberInfra Сопровождение Платформы управления контейнерами (Косов М.В.)')\n" +
            "  and HPC_AFFECTED_ITEM_NAME in\n" +
            "      ('Интеграционные платформы серверов приложений (CI00737140)', 'IBM WebSphere MQ (CI02021291)',\n" +
            "       'IBM Websphere MB (CI02192119)', 'SOWA (CI02192118)','«Platform V Corax» (CI04085569)', 'Apache Kafka (CI02192117)',\n" +
            "       'IBM DataPower (CI02021290)', 'WildFly (CI02021292)', 'IBM WebSphere Application Server (CI02021299)',\n" +
            "       'Nginx (CI02021302)', 'Платформа управления контейнерами (Terra) (CI01563053)',\n" +
            "       'SynGX (CI04178739)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "  and HPC_CREATED_BY not in ('Технологический пользователь АС ZABBIX_SI (00738651)'," +
            " 'INT_SC_SERVICE_PROXY (756759)', 'INT_SC_SERVICE_PROXY (00563040)') \n" +
            "  and TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')", nativeQuery = true)
    Integer findIncHandleCountDonutTest(@Param("startDate") String startDate, @Param("endDate") String endDate);

}
