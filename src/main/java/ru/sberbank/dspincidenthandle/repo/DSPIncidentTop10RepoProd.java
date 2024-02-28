package ru.sberbank.dspincidenthandle.repo;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentDataTop10;

import java.util.List;

@Repository
@Profile("prod")
public interface DSPIncidentTop10RepoProd extends DSPIncidentTop10Repo{
    @Query(value = "WITH RWS AS (\n" +
            "SELECT top_10.*, row_number() over (PARTITION BY \"AFFECTED_ITEM\" ORDER BY \"COUNT_INC\" DESC) RN\n" +
            "FROM (\n" +
            "SELECT\n" +
            "\t\"AFFECTED_ITEM\", ASSIGNEE_NAME, COUNT (\"NUMBER\")AS \"COUNT_INC\"\n" +
            "FROM\n" +
            "\t(\tSELECT\n" +
            "\t\t\tprob1.\"NUMBER\",\n" +
            "\t\t\tto_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "\t\t\tHPC_STATUS,\n" +
            "      substr(prob1.hpc_assignee_name, 1, instr(prob1.hpc_assignee_name, '(') - 2) \n" +
            "      AS ASSIGNEE_NAME,\n" +
            "      substr(prob1.hpc_assignment, 1, instr(prob1.hpc_assignment, '(') - 2 )      \n" +
            "      AS HPC_ASSIGNMENT,\n" +
            "    \tOPENED_BY,\n" +
            "      HPC_AFFECTED_ITEM_NAME as AFFECTED_ITEM\n" +
            "FROM\n" +
            "\tSMPRIMARYSAFE.probsummarym1 prob1 \n" +
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
            "       'SynGX (CI04178739)', 'SKeeper (CI02021300)', 'SIDEC (CI04452790)', 'IAGW (CI05435889)', 'EAGLE (CI05879203)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )\n" +
            "UNION\n" +
            "SELECT\n" +
            "\tprob1.\"NUMBER\",\n" +
            "\tto_char(OPEN_TIME + 3.0 / 24, 'dd.MM.yyyy HH24:MI:SS')                plan_open,\n" +
            "\tHPC_STATUS,\n" +
            "\tsubstr(prob1.hpc_assignee_name,\n" +
            "\t1,\n" +
            "\tinstr(prob1.hpc_assignee_name,\n" +
            "\t'(') - 2)      AS ASSIGNEE_NAME,\n" +
            "\tsubstr(prob1.hpc_assignment,\n" +
            "\t1,\n" +
            "\tinstr(prob1.hpc_assignment,\n" +
            "\t'(') - 2)      AS HPC_ASSIGNMENT,\n" +
            "\t'OPENED_BY'    AS OPENED_BY,\n" +
            "\t HPC_AFFECTED_ITEM_NAME as AFFECTED_ITEM\n" +
            "FROM\n" +
            "\tSMPRIMARYSAFE.SBPROBSUMMARYTSM1 prob1 \n" +
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
            "       'SynGX (CI04178739)', 'SKeeper (CI02021300)', 'SIDEC (CI04452790)', 'IAGW (CI05435889)', 'EAGLE (CI05879203)')\n" +
            "  and HPC_STATUS in\n" +
            "      (\n" +
            "       '6 Выполнен',\n" +
            "       '5 Выполнен',\n" +
            "       '6 Закрыт'\n" +
            "          )) \n" +
            "WHERE\n" +
            "\tOPENED_BY not in 'int_zabbix_si' AND TO_TIMESTAMP(PLAN_OPEN, 'DD.MM.RRRR HH24:MI:SS') BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
            "GROUP BY \"AFFECTED_ITEM\", ASSIGNEE_NAME\n" +
            "ORDER BY \"AFFECTED_ITEM\", \"COUNT_INC\" DESC) top_10)\n" +
            "SELECT \"AFFECTED_ITEM\", \"ASSIGNEE_NAME\", \"COUNT_INC\" FROM RWS WHERE RN <=10", nativeQuery = true)
    List<IDSPIncidentDataTop10> findTop10IncCount(@Param("startDate") String startDate, @Param("endDate") String endDate);

}
