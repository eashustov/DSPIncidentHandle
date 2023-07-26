package ru.sberbank.dspincidenthandle.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;

import java.util.List;

@Repository
public interface DSPIncidentRepo extends CrudRepository<DSPIncidentData, String> {

   @Query(value = "select HPC_IS_MASS,\n" +
           "       SB_ROOT_INCIDENT,\n" +
           "       \"NUMBER\",\n" +
           "       PRIORITY_CODE,\n" +
           "       HPC_ASSIGNEE_NAME,\n" +
           "       HPC_AFFECTED_ITEM_NAME,\n" +
           "       PLAN_OPEN,\n" +
           "       PLAN_END,\n" +
           "       HPC_STATUS,\n" +
           "       ACTION,\n" +
           "       PROM\n" +
           "from (\n" +
           "         select HPC_IS_MASS,\n" +
           "                SB_ROOT_INCIDENT,\n" +
           "                \"NUMBER\",\n" +
           "                PRIORITY_CODE,\n" +
           "                substr(HPC_ASSIGNEE_NAME, 1, instr(HPC_ASSIGNEE_NAME, '(') - 2) as HPC_ASSIGNEE_NAME,\n" +
           "                HPC_AFFECTED_ITEM_NAME,\n" +
           "                to_char(OPEN_TIME + 3.0 / 24, 'DD.MM.RRRR HH24:MI:SS')                plan_open,\n" +
           "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'DD.MM.RRRR HH24:MI:SS')          plan_end,\n" +
           "                HPC_CREATED_BY,\n" +
           "                HPC_STATUS,\n" +
           "                HPC_ASSIGNMENT_NAME,\n" +
           "                ACTION,\n" +
           "                'true' as PROM\n" +
           "         from SMPRIMARY.PROBSUMMARYM1\n" +
           "         union all\n" +
           "         select HPC_IS_MASS,\n" +
           "                SB_ROOT_INCIDENT,\n" +
           "                \"NUMBER\",\n" +
           "                PRIORITY_CODE,\n" +
           "                substr(HPC_ASSIGNEE_NAME, 1, instr(HPC_ASSIGNEE_NAME, '(') - 2) as HPC_ASSIGNEE_NAME,\n" +
           "                HPC_AFFECTED_ITEM_NAME,\n" +
           "                to_char(OPEN_TIME + 3.0 / 24, 'DD.MM.RRRR HH24:MI:SS')                plan_open,\n" +
           "                to_char(HPC_NEXT_BREACH + 3.0 / 24, 'DD.MM.RRRR HH24:MI:SS')          plan_end,\n" +
           "                HPC_CREATED_BY,\n" +
           "                HPC_STATUS,\n" +
           "                HPC_ASSIGNMENT_NAME,\n" +
           "                ACTION,\n" +
           "                'false' as PROM\n" +
           "         from SMPRIMARY.SBPROBSUMMARYTSM1\n" +
           "     )\n" +
           "where HPC_ASSIGNMENT_NAME in\n" +
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
           "  and PLAN_OPEN BETWEEN TO_TIMESTAMP(:startDate, 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP(:endDate, 'DD.MM.RRRR HH24:MI:SS')\n" +
           "order by 7 desc", nativeQuery = true)
   List<DSPIncidentData> findIncAllByDate(@Param("startDate") String startDate, @Param("endDate") String endDate);

}
