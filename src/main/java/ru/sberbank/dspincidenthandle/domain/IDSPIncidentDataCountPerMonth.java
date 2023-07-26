package ru.sberbank.dspincidenthandle.domain;

public interface IDSPIncidentDataCountPerMonth {

    String getHPC_Assignment();
    String getHPC_Affected_Item_Name();
    String getMonth();
    String getMonth_Number();
    String getYear();
    Integer getCount_Inc();

}
