package ru.sberbank.dspincidenthandle.domain;

public interface IDSPIncidentDataCountPerMonth {

    String getHPC_Assignment();
    String getAffected_Item();
    String getMonth();
    String getMonth_Number();
    String getYear();
    Integer getCount_Inc();

}
