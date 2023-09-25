package ru.sberbank.dspincidenthandle.view;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.combobox.ComboBoxVariant;
import com.vaadin.flow.component.grid.dataview.GridListDataView;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import java.util.stream.Collectors;

public class FilterActiveIncident {

    static Set<String> affectedItem;
    static ComboBox<String> filterAffectedItemComboBox;


    //Меттод создания динамического фильтра

    static Component createFilterHeader(String labelText, Consumer<String> filterChangeConsumer,
                                        GridListDataView<DSPIncidentData> AffectedItemDataViewFiltered) {
        Label label = new Label(labelText);
        label.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");


        affectedItem = new HashSet<>(AffectedItemDataViewFiltered.getItems()
                .map(item -> item.getHPC_AFFECTED_ITEM_NAME())
                .collect(Collectors.toSet()));

        Label acceptedItemLabel = new Label("ИТ-услуга");
        acceptedItemLabel.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");
        filterAffectedItemComboBox = new ComboBox<>();
        filterAffectedItemComboBox.setPlaceholder("Выберите ИТ-услугу");
        filterAffectedItemComboBox.setItems(affectedItem);
        filterAffectedItemComboBox.setClearButtonVisible(true);
        filterAffectedItemComboBox.addThemeVariants(ComboBoxVariant.LUMO_SMALL);
        filterAffectedItemComboBox.setWidthFull();
        filterAffectedItemComboBox.getStyle().set("max-width", "100%");

        filterAffectedItemComboBox.addValueChangeListener(e -> filterChangeConsumer.accept(e.getValue()));

        VerticalLayout layout = new VerticalLayout(filterAffectedItemComboBox);
        layout.getThemeList().clear();
        layout.getThemeList().add("spacing-xs");
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.START);

        return layout;
    }

    static Component createFilterHeader(String labelText, Consumer<String> filterChangeConsumer,
                                        HashSet<String> ComboBoxItem,
                                        String ComboBoxPlaceholder) {
        Label label = new Label(labelText);
        label.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");

        Label acceptedItemLabel = new Label("ИТ-услуга");
        acceptedItemLabel.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");
        ComboBox filterItemComboBox = new ComboBox<>();
        filterItemComboBox.setPlaceholder(ComboBoxPlaceholder);
        filterItemComboBox.setItems(ComboBoxItem);
        filterItemComboBox.setClearButtonVisible(true);
        filterItemComboBox.addThemeVariants(ComboBoxVariant.LUMO_SMALL);
        filterItemComboBox.setWidthFull();
        filterItemComboBox.getStyle().set("max-width", "100%");

        filterItemComboBox.addValueChangeListener(e -> filterChangeConsumer.accept((String) e.getValue()));

        VerticalLayout layout = new VerticalLayout(filterItemComboBox);
        layout.getThemeList().clear();
        layout.getThemeList().add("spacing-xs");
        layout.setJustifyContentMode(FlexComponent.JustifyContentMode.START);

        return layout;
    }


}
