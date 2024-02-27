package ru.sberbank.dspincidenthandle.domain;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
//@Table(schema = "SMPRIMARYSAFE", name = "probsummarym1")
@Table(name = "probsummarym1")
public class DSPIncidentData {
    @Id
    @Column(name = "NUMBER")
    private String NUMBER;
    @Column(name = "HPC_IS_MASS")
    private String HPC_IS_MASS;
    @Column(name = "SB_ROOT_INCIDENT")
    private String SB_ROOT_INCIDENT;
    @Column(name = "PRIORITY_CODE")
    private String PRIORITY_CODE;
    @Column(name = "HPC_ASSIGNEE_NAME")
    private String HPC_ASSIGNEE_NAME;
    @Column(name = "HPC_AFFECTED_ITEM_NAME")
    private String HPC_AFFECTED_ITEM_NAME;
    @Column(name = "ACTION")
    private String ACTION;
    @Column(name = "PLAN_OPEN")
    @DateTimeFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    private String PLAN_OPEN;
    @Column(name = "PLAN_END")
    @DateTimeFormat(pattern = "dd.MM.yyyy HH:mm:ss")
    private String PLAN_END;
    @Column(name = "HPC_STATUS")
    private String HPC_STATUS;
    @Column(name = "PROM")
    private String PROM;


    public DSPIncidentData(String NUMBER, String HPC_IS_MASS, String SB_ROOT_INCIDENT, String PRIORITY_CODE,
                           String HPC_ASSIGNEE_NAME, String HPC_AFFECTED_ITEM_NAME, String PLAN_OPEN,
                           String PLAN_END, String HPC_STATUS, String ACTION, String PROM) {
        this.NUMBER = NUMBER;
        this.HPC_IS_MASS = HPC_IS_MASS;
        this.SB_ROOT_INCIDENT = SB_ROOT_INCIDENT;
        this.PRIORITY_CODE = PRIORITY_CODE;
        this.HPC_ASSIGNEE_NAME = HPC_ASSIGNEE_NAME;
        this.HPC_AFFECTED_ITEM_NAME = HPC_AFFECTED_ITEM_NAME;
        this.PLAN_OPEN = PLAN_OPEN;
        this.PLAN_END = PLAN_END;
        this.HPC_STATUS = HPC_STATUS;
        this.ACTION = ACTION;
        this.PROM = PROM;


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
        if (HPC_IS_MASS != null) {
            if (HPC_IS_MASS.equals("t")) {
                return "Да";
            } else if (HPC_IS_MASS.equals("f")) {
                return "Нет";
            } else {return HPC_IS_MASS;}
          }
        return HPC_IS_MASS = "";
    }

    public String getSB_ROOT_INCIDENT() {
        if (SB_ROOT_INCIDENT != null) {
            if (SB_ROOT_INCIDENT.equals("t")) {
                return "Да";
            } else if (SB_ROOT_INCIDENT.equals("f")) {
                return "Нет";
            } else {return SB_ROOT_INCIDENT;}
        }
        return SB_ROOT_INCIDENT = "";
    }

    public String getACTION() {
        if (ACTION != null) {
            return ACTION;
        }
        return ACTION = "";
    }

    public String getPROM() {
        if (PROM != null) {
            if (PROM.equals("true")) {
                return "Пром";
            } else if (PROM.equals("false")) {
                return "Тест";
            } else {return PROM;}
        }
        return PROM = "";
    }
}



