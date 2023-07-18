package ru.sberbank.dspincidenthandle.domain;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@Table(schema = "SMPRIMARY", name = "probsummarym1")
@Table(name = "SMPRIMARY")
public class DSPIncidentData {
    @Id
    @Column(name = "NUMBER")
    private String NUMBER;
    @Column(name = "HPC_IS_MASS")
    private Boolean HPC_IS_MASS;
    @Column(name = "SB_ROOT_INCIDENT")
    private Boolean SB_ROOT_INCIDENT;
    @Column(name = "PRIORITY_CODE")
    private String PRIORITY_CODE;
    @Column(name = "HPC_ASSIGNEE_NAME")
    private String HPC_ASSIGNEE_NAME;
    @Column(name = "HPC_AFFECTED_ITEM_NAME")
    private String HPC_AFFECTED_ITEM_NAME;
    @Column(name = "PLAN_OPEN")
    @DateTimeFormat(pattern = "yyyy.MM.dd HH:mm")
    private String PLAN_OPEN;
    @Column(name = "PLAN_END")
    @DateTimeFormat(pattern = "yyyy.MM.dd HH:mm")
    private String PLAN_END;
    @Column(name = "HPC_STATUS")
    private String HPC_STATUS;


    public DSPIncidentData(String NUMBER, Boolean HPC_IS_MASS, Boolean SB_ROOT_INCIDENT, String PRIORITY_CODE,
                           String HPC_ASSIGNEE_NAME, String HPC_AFFECTED_ITEM_NAME, String PLAN_OPEN,
                           String PLAN_END, String HPC_STATUS) {
        this.NUMBER = NUMBER;
        this.HPC_IS_MASS = HPC_IS_MASS;
        this.SB_ROOT_INCIDENT = SB_ROOT_INCIDENT;
        this.PRIORITY_CODE = PRIORITY_CODE;
        this.HPC_ASSIGNEE_NAME = HPC_ASSIGNEE_NAME;
        this.HPC_AFFECTED_ITEM_NAME = HPC_AFFECTED_ITEM_NAME;
        this.PLAN_OPEN = PLAN_OPEN;
        this.PLAN_END = PLAN_END;
        this.HPC_STATUS = HPC_STATUS;

    }

    public DSPIncidentData() {
    }

    public String getNUMBER() {
        if (NUMBER != null) {
            return NUMBER;
        }
        return NUMBER = "";
    }

    public String getPRIORITY_CODE() {
        if (PRIORITY_CODE != null) {
            return PRIORITY_CODE;
        }
        return PRIORITY_CODE = "";
    }

    public String getHPC_ASSIGNEE_NAME() {
        if (HPC_ASSIGNEE_NAME != null) {
            return HPC_ASSIGNEE_NAME;
        }
        return HPC_ASSIGNEE_NAME = "";
    }

    public String getHPC_AFFECTED_ITEM_NAME() {
        if (HPC_AFFECTED_ITEM_NAME != null) {
            return HPC_AFFECTED_ITEM_NAME;
        }
        return HPC_AFFECTED_ITEM_NAME = "";
    }

    public String getPLAN_OPEN() {
        if (PLAN_OPEN != null) {
            return PLAN_OPEN;
        }
        return PLAN_OPEN = "";
    }

    public String getPLAN_END() {
        if (PLAN_END != null) {
            return PLAN_END;
        }
        return PLAN_END = "";
    }

    public String getHPC_STATUS() {
        if (HPC_STATUS != null) {
            return HPC_STATUS;
        }
        return HPC_STATUS = "";
    }

    public String getHPC_IS_MASS() {
        return String.valueOf(HPC_IS_MASS);
    }

    public String getSB_ROOT_INCIDENT() {
        return String.valueOf(SB_ROOT_INCIDENT);
    }


}
