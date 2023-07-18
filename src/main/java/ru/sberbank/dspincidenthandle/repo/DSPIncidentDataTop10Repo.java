package ru.sberbank.dspincidenthandle.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentDataTop10;


import java.util.List;

@Repository
public interface DSPIncidentDataTop10Repo extends CrudRepository<DSPIncidentData, String> {


    //   @Override
//    @Query(value = "WITH RWS AS (
//SELECT top_10.*, row_number() over (PARTITION BY "AFFECTED_ITEM" ORDER BY "COUNT_INC" DESC) RN
//FROM (
//SELECT
//                "AFFECTED_ITEM", HOST, COUNT ("NUMBER")AS "COUNT_INC"
//FROM
//                (              SELECT
//                                               prob1."NUMBER",
//                                               BRIEF_DESCRIPTION,
//                                               PRIORITY_CODE,
//                                               OPEN_TIME,
//                                               to_char(ACTION)
//                                               AS ACTION,
//                                               REGEXP_SUBSTR(REGEXP_SUBSTR(to_char(ACTION), '^.*(\s.*){6}.*'),
//                                               'htt.*$') AS ZABBIX_HISTORY,
//                               REPLACE
//                                               (
//                                                               REGEXP_SUBSTR(REGEXP_SUBSTR(to_char(ACTION), '^.*(\s.*){4}.*'),
//                                                               'Хост:\s.*$'),
//                                                               'Хост: '
//                                               )
//                                               AS HOST,
//                                               REGEXP_SUBSTR(REGEXP_SUBSTR(to_char(ACTION),
//                '^.*(\s.*){1}.*'),
//                'Проблема.*$')
//                AS PROBLEM,
//                HPC_STATUS,
//                substr(prob1.hpc_assignee_name, 1, instr(prob1.hpc_assignee_name, '(') - 2)
//                AS HPC_ASSIGNEE_NAME,
//                substr(prob1.hpc_assignment, 1, instr(prob1.hpc_assignment, '(') - 2 )
//                AS HPC_ASSIGNMENT,
//                HPC_CREATED_BY_NAME,
//                'RESOLUTION'
//                AS RESOLUTION,
//                OPENED_BY,
//                AFFECTED_ITEM
//FROM
//                smprimary.probsummarym1 prob1
//WHERE
//                prob1.AFFECTED_ITEM IN ( 'CI02021303',
//                'CI02021304',
//                'CI02584076',
//                'CI02584077',
//                'CI02584078',
//                'CI02021298',
//                'CI02021301',
//                'CI02021292',
//                'CI02021302',
//                'CI02021294',
//                'CI02021296',
//                'CI02021299',
//                'CI02021293',
//                'CI02021295',
//                'CI02192117',
//                'CI02021290',
//                'CI02021291',
//                'CI02021300',
//                'CI02192118',
//                'CI02021306',
//                'CI00737141',
//                'CI00737140',
//                'CI00737137',
//                'CI02008623',
//                'CI01563053')
//UNION
//SELECT
//                prob1."NUMBER",
//                BRIEF_DESCRIPTION,
//                PRIORITY_CODE,
//                OPEN_TIME,
//                to_char(ACTION)                                                           AS
//                ACTION,
//                REGEXP_SUBSTR(REGEXP_SUBSTR(to_char(ACTION), '^.*(\s.*){6}.*'), 'htt.*$') AS
//                ZABBIX_HISTORY,
//REPLACE
//                (
//                               REGEXP_SUBSTR(REGEXP_SUBSTR(to_char(ACTION), '^.*(\s.*){4}.*'),
//                               'Хост:\s.*$'),
//                               'Хост: '
//                )
//                AS HOST,
//                REGEXP_SUBSTR(REGEXP_SUBSTR(to_char(ACTION),
//                '^.*(\s.*){1}.*'),
//                'Проблема.*$') AS PROBLEM,
//                HPC_STATUS,
//                substr(prob1.hpc_assignee_name,
//                1,
//                instr(prob1.hpc_assignee_name,
//                '(') - 2)      AS HPC_ASSIGNEE_NAME,
//                substr(prob1.hpc_assignment,
//                1,
//                instr(prob1.hpc_assignment,'(') - 2)      AS HPC_ASSIGNMENT,
//                HPC_CREATED_BY_NAME,
//                'RESOLUTION'   AS RESOLUTION,
//                'OPENED_BY'    AS OPENED_BY,
//                AFFECTED_ITEM
//FROM
//                smprimary.SBPROBSUMMARYTSM1 prob1
//WHERE
//                prob1.AFFECTED_ITEM IN ( 'CI02021303',
//                'CI02021304',
//                'CI02584076',
//                'CI02584077',
//                'CI02584078',
//                'CI02021298',
//                'CI02021301',
//                'CI02021292',
//                'CI02021302',
//                'CI02021294',
//                'CI02021296',
//                'CI02021299',
//                'CI02021293',
//                'CI02021295',
//                'CI02192117',
//                'CI02021290',
//                'CI02021291',
//                'CI02021300',
//                'CI02192118',
//                'CI02021306',
//                'CI00737141',
//                'CI00737140',
//                'CI00737137',
//                'CI02008623',
//                'CI01563053'))
//WHERE
//                OPENED_BY = 'int_zabbix_si' AND OPEN_TIME BETWEEN TO_TIMESTAMP('06.01.2022 00:00:00', 'DD.MM.RRRR HH24:MI:SS') AND TO_TIMESTAMP('06.06.2022 23:59:59', 'DD.MM.RRRR HH24:MI:SS')
//GROUP BY "AFFECTED_ITEM", HOST
//ORDER BY "AFFECTED_ITEM", "COUNT_INC" DESC) top_10)
//SELECT "AFFECTED_ITEM", "HOST", "COUNT_INC" FROM RWS WHERE RN <=10",
//            nativeQuery = true)

    @Query(value = "select p.HPC_AFFECTED_ITEM_NAME as Affected_Item, p.HPC_ASSIGNEE_NAME as Assignee_Name, COUNT (p.NUMBER) AS count_Inc from SMPRIMARY p GROUP BY Affected_Item, Assignee_Name ORDER BY  Affected_Item, count_Inc DESC", nativeQuery = true)
    List<IDSPIncidentDataTop10> findTop10IncCount();

//        @Query(value = "select p.HPC_ASSIGNMENT as Assignment, COUNT (p.NUMBER) AS countInc from probsummarym1 p where p.OPEN_TIME BETWEEN TO_CHAR(:startDate, 'dd.MM.yyyy hh:mm:ss') AND TO_CHAR(:endDate, 'dd.MM.yyyy hh:mm:ss') GROUP BY Assignment ORDER BY countInc DESC", nativeQuery = true)
//    List<IUspIncidentDataTotalCount> findIncCount(@Param("startDate") String startDate, @Param("endDate") String endDate);

//    @Query(value = "select p.HPC_ASSIGNMENT as Assignment, COUNT (p.NUMBER) AS countInc from probsummarym1 p WHERE p.HPC_ASSIGNMENT IN (:assignmentGroup) GROUP BY Assignment ORDER BY countInc DESC", nativeQuery = true)
//    List<IUspIncidentDataTotalCount> findIncCount(@Param("assignmentGroup") String assignmentGroup);
//    List<IUspIncidentDataTotalCount> findIncCount(@Param("startDate") String startDate, @Param("endDate") String endDate, @Param("assignmentGroup") String assignmentGroup);
}
