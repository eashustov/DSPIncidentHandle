package ru.sberbank.dspincidenthandle.view;

import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;
import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.contextmenu.ContextMenu;
import com.vaadin.flow.component.contextmenu.MenuItem;
import com.vaadin.flow.component.contextmenu.SubMenu;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.grid.HeaderRow;
import com.vaadin.flow.component.grid.contextmenu.GridContextMenu;
import com.vaadin.flow.component.grid.dataview.GridListDataView;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.menubar.MenuBar;
import com.vaadin.flow.component.menubar.MenuBarVariant;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.textfield.TextFieldVariant;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import org.springframework.beans.factory.annotation.Autowired;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;
import ru.sberbank.dspincidenthandle.repo.DSPIncidentRepo;
import ru.sberbank.dspincidenthandle.security.SecurityService;

import javax.annotation.security.PermitAll;
import java.io.ByteArrayInputStream;
import java.io.StringWriter;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.function.Consumer;
import java.util.stream.Stream;

@PermitAll
@Route
@PageTitle("Инциденты ДСП зарегистрированные вручную")
//Сохранение состояния таблицы при обновлении
//@PreserveOnRefresh
public class MainView extends VerticalLayout {
    private final SecurityService securityService;

    private H4 header;
    @Autowired
    private DSPIncidentRepo repo;
    private Grid<DSPIncidentData> grid;
    private GridListDataView<DSPIncidentData> dataView;
    IncFilter incFilter;
    String startDate;
    String endDate;
    DatePicker start_Date;
    DatePicker end_Date;
    DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    private Span incCount = new Span();
    private Span filteredCount = new Span();

    //Создание панели инструментов
    MenuBar menuBar = new MenuBar();


    public MainView(DSPIncidentRepo repo, SecurityService securityService) {
        this.securityService = securityService;

        LocalDate now = LocalDate.now(ZoneId.systemDefault());
        start_Date = new DatePicker("Начало");
        end_Date = new DatePicker("Конец");
        end_Date.setMax(now);
        end_Date.setValue(now);
        start_Date.setMax(now);
        start_Date.setValue(now.minusMonths(3));
        start_Date.addValueChangeListener(e -> end_Date.setMin(e.getValue()));
        end_Date.addValueChangeListener(e -> start_Date.setMax(e.getValue()));
        end_Date.setMin(start_Date.getValue());
        start_Date.setMax(end_Date.getValue());
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        Button buttonGetData = new Button();
        buttonGetData.setText("Получить список инцидентов");
        buttonGetData.setEnabled(true);


        this.repo = repo;
        createLogoutButton();
        this.header = new H4("Инциденты ДСП зарегистрированные вручную за период");

        //        Export to CSV list of kafka servers
        var streamResource = new StreamResource("DSPIncidentHandleList.csv",
                () -> {
                    Stream<DSPIncidentData> DSPIncidentDataList = incFilter.dataViewFiltered.getItems();
                    StringWriter output = new StringWriter();
                    StatefulBeanToCsv<DSPIncidentData> beanToCSV = null;
                    try {
                        beanToCSV = new StatefulBeanToCsvBuilder<DSPIncidentData>(output)
                                .withIgnoreField(DSPIncidentData.class, DSPIncidentData.class.getDeclaredField("ACTION"))
                                .build();
                    } catch (NoSuchFieldException exception) {
                        exception.printStackTrace();
                    }
                    try {
                        beanToCSV.write(DSPIncidentDataList);
                        var contents = output.toString();
                        return new ByteArrayInputStream(contents.getBytes());
                    } catch (CsvDataTypeMismatchException | CsvRequiredFieldEmptyException e) {
                        e.printStackTrace();
                        return null;
                    }
                }
        );

        //Link to Analitics
        Anchor analiticsChart = new Anchor("analitics", "Аналитика");
        analiticsChart.setTarget("_blank");

        //Сохранить в csv
        Anchor downloadToCSV = new Anchor(streamResource, "Сохранить в CSV");
        Button buttonDownloadCSV = new Button(new Icon(VaadinIcon.DOWNLOAD));
        buttonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
        downloadToCSV.removeAll();
        downloadToCSV.add(buttonDownloadCSV);

        menuBar.addThemeVariants(MenuBarVariant.LUMO_TERTIARY, MenuBarVariant.LUMO_SMALL, MenuBarVariant.LUMO_ICON);

        MenuItem style = menuBar.addItem("Вид");
        SubMenu styleSubMenu = style.getSubMenu();
        MenuItem normal = styleSubMenu.addItem("Нормальный");
        normal.setCheckable(true);
        normal.setChecked(false);
        MenuItem compact = styleSubMenu.addItem("Компактный");
        compact.setCheckable(true);
        compact.setChecked(true);

        ComponentEventListener<ClickEvent<MenuItem>> NormalStylelistener = e -> {
            if (e.getSource().isChecked()) {
                grid.removeThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
                grid.addThemeVariants(GridVariant.LUMO_WRAP_CELL_CONTENT, GridVariant.LUMO_ROW_STRIPES);
                compact.setChecked(false);
            }
        };

        ComponentEventListener<ClickEvent<MenuItem>> CompactStylelistener = e -> {
            if (e.getSource().isChecked()) {
                grid.removeThemeVariants(GridVariant.LUMO_WRAP_CELL_CONTENT, GridVariant.LUMO_ROW_STRIPES);
                grid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
                normal.setChecked(false);
            }
        };

        normal.addClickListener(NormalStylelistener);
        compact.addClickListener(CompactStylelistener);

        menuBar.addItem(downloadToCSV);
        menuBar.addItem("Столбцы");

        // build top HorizontalLayout
        HorizontalLayout actions = new HorizontalLayout(analiticsChart,menuBar);
        actions.setVerticalComponentAlignment(Alignment.END, menuBar);
        actions.setVerticalComponentAlignment(Alignment.CENTER, analiticsChart);
        setHorizontalComponentAlignment(Alignment.END, actions);

        //Build DataLayout
        HorizontalLayout dateLayout = new HorizontalLayout(start_Date, end_Date, buttonGetData);
        dateLayout.setVerticalComponentAlignment(Alignment.STRETCH, start_Date, end_Date);
        dateLayout.setVerticalComponentAlignment(Alignment.END, buttonGetData);
        setHorizontalComponentAlignment(Alignment.CENTER, dateLayout);

        //Инициализация таблицы
        gridInit();

        incCount.setText("Всего инцидентов: " + dataView.getItemCount());
        filteredCount.setText("Отфильтровано: " + incFilter.dataViewFiltered.getItemCount());


        //        Добавление компонентов в основной layout
        add(header, dateLayout, actions, grid, incCount, filteredCount);


        //      Обработчик копки получения списка серверов
        buttonGetData.addClickListener(event -> {
            remove(grid, incCount, filteredCount);
            gridInit();
            incCount.setText("Всего инцидентов: " + dataView.getItemCount());
            filteredCount.setText("Отфильтровано: " + incFilter.dataViewFiltered.getItemCount());
//            clusterNameDownloadToCSV.setHref(CreateKafkaClusterName.getKafkaClusterName());
            add(grid, incCount, filteredCount);
        });

    }

//    Метод инициализации заголовка и кнопки выхода и вертикального меню
private void createLogoutButton() {
    H4 logout_space = new H4(" ");
//    Работает с vaadin 24.2.4
//    logo.addClassNames(
//            Lumo.FontSize.LARGE,
//            LumoUtility.Margin.MEDIUM);

    String u = securityService.getAuthenticatedUser().getUsername();
    Button logout = new Button("Выход " + u, e -> securityService.logout());

//    var header = new HorizontalLayout(new DrawerToggle(), logo, logout); Здесь заголовок с меню DrawerToggle().
    var logoutLayout = new HorizontalLayout(logout_space,logout);
    logoutLayout.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
    logoutLayout.setWidthFull();
    logoutLayout.expand(logout_space); //Сдвинуть кнопку Выход далеко вправо

    //    Работает с vaadin 24.2.4
//    header.addClassNames(
//            LumoUtility.Padding.Vertical.NONE,
//            LumoUtility.Padding.Horizontal.MEDIUM);

    add(logoutLayout);

}
//Метод прорисовки бокового меню.
//    private void createDrawer() {
//        addToDrawer(new VerticalLayout(
//                new RouterLink("List", ListView.class),
//                new RouterLink("Dashboard", DashboardView.class)
//        ));
//    }

//Метод инициализации таблицы
    void gridInit() {
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        this.grid = new Grid<>(DSPIncidentData.class, false);
        GridListDataView<DSPIncidentData>dataView = grid.setItems(repo.findIncAllByDate(startDate, endDate));
        this.dataView = dataView;
        setHorizontalComponentAlignment(Alignment.CENTER, header);
        setJustifyContentMode(JustifyContentMode.START);

//Grid View
        grid.setHeight("500px");
        grid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
        grid.setColumnReorderingAllowed(true);
        grid.setSelectionMode(Grid.SelectionMode.SINGLE);


        ItemContextMenu itemContextMenu = new ItemContextMenu(grid);
        Grid.Column<DSPIncidentData> NUMBER = grid
                .addColumn(DSPIncidentData::getNUMBER).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Номер инцидента");
        Grid.Column<DSPIncidentData> PRIORITY_CODE = grid
                .addColumn(DSPIncidentData::getPRIORITY_CODE).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Важность");
        Grid.Column<DSPIncidentData> HPC_ASSIGNEE_NAME = grid
                .addColumn(DSPIncidentData::getHPC_ASSIGNEE_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Исполнитель");
        Grid.Column<DSPIncidentData> HPC_AFFECTED_ITEM_NAME = grid
                .addColumn(DSPIncidentData::getHPC_AFFECTED_ITEM_NAME).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Услуга");
        Grid.Column<DSPIncidentData> PLAN_OPEN = grid
                .addColumn(DSPIncidentData::getPLAN_OPEN).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Плановое начало");
        Grid.Column<DSPIncidentData> PLAN_END = grid
                .addColumn(DSPIncidentData::getPLAN_END).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Плановое окончание");
        Grid.Column<DSPIncidentData> HPC_STATUS = grid
                .addColumn(DSPIncidentData::getHPC_STATUS).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Статус");
        Grid.Column<DSPIncidentData> HPC_IS_MASS = grid
                .addColumn(DSPIncidentData::getHPC_IS_MASS).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("ИУУ");
        Grid.Column<DSPIncidentData> SB_ROOT_INCIDENT = grid
                .addColumn(DSPIncidentData::getSB_ROOT_INCIDENT).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Корневой");
        Grid.Column<DSPIncidentData> ACTION = grid
                .addColumn(DSPIncidentData::getACTION).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Подробное описание");
                ACTION.setVisible(false);
        Grid.Column<DSPIncidentData> PROM = grid
                .addColumn(DSPIncidentData::getPROM).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START)
                .setHeader("Тип среды");


        incFilter = new IncFilter(dataView);

        //Create headers for Grid

        grid.getHeaderRows().clear();
        HeaderRow headerRow = grid.appendHeaderRow();

        headerRow.getCell(NUMBER)
                .setComponent(createFilterHeader("Номер инцидента", incFilter::setNumber));
        headerRow.getCell(PRIORITY_CODE)
                .setComponent(createFilterHeader("Важность", incFilter::setPriorityCode));
        headerRow.getCell(HPC_ASSIGNEE_NAME)
                .setComponent(createFilterHeader("Исполнитель", incFilter::setHPCAssigneeName));
        headerRow.getCell(HPC_AFFECTED_ITEM_NAME)
                .setComponent(FilterActiveIncident.createFilterHeader("Услуга",
                        incFilter::setHPCAffectedItemName, dataView));
        headerRow.getCell(PLAN_OPEN)
                .setComponent(createFilterHeader("Плановое начало", incFilter::setPlanOpen));
        headerRow.getCell(PLAN_END)
                .setComponent(createFilterHeader("Плановое окончание", incFilter::setPlanEnd));
        headerRow.getCell(HPC_STATUS)
                .setComponent(createFilterHeader("Статус", incFilter::setHPCStatus));
        headerRow.getCell(HPC_IS_MASS)
                .setComponent(FilterActiveIncident.createFilterHeader("Да; Нет",
                        incFilter::setHPCIsMass, new HashSet<>(Arrays.asList("Да", "Нет")), "Да; Нет"));
        headerRow.getCell(SB_ROOT_INCIDENT)
                .setComponent(FilterActiveIncident.createFilterHeader("Да; Нет",
                        incFilter::setSBRootIncident, new HashSet<>(Arrays.asList("Да", "Нет")), "Да; Нет"));
        headerRow.getCell(ACTION)
                .setComponent(createFilterHeader("Подробное описание", incFilter::setAction));
        headerRow.getCell(PROM)
                .setComponent(FilterActiveIncident.createFilterHeader("Да; Нет",
                        incFilter::setProm, new HashSet<>(Arrays.asList("Пром", "Тест")), "Пром; Тест"));

        //Column Visibility
//        Так можно прикрутить кнопку к меню выбора видимости столбцов. В данном приложении используется MenuBar
//        Button menuButton = new Button(new Icon(VaadinIcon.LIST_SELECT));
//        menuButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY);
        ColumnToggleContextMenu columnToggleContextMenu = new ColumnToggleContextMenu(menuBar.getItems().get(2));
        columnToggleContextMenu.addColumnToggleItem("Номер инцидента", NUMBER);
        columnToggleContextMenu.addColumnToggleItem("Важность", PRIORITY_CODE);
        columnToggleContextMenu.addColumnToggleItem("Исполнитель", HPC_ASSIGNEE_NAME);
        columnToggleContextMenu.addColumnToggleItem("Услуга", HPC_AFFECTED_ITEM_NAME);
        columnToggleContextMenu.addColumnToggleItem("Плановое начало", PLAN_OPEN);
        columnToggleContextMenu.addColumnToggleItem("Плановое окончание", PLAN_END);
        columnToggleContextMenu.addColumnToggleItem("Статус", HPC_STATUS);
        columnToggleContextMenu.addColumnToggleItem("Массовый", HPC_IS_MASS);
        columnToggleContextMenu.addColumnToggleItem("Корневой", SB_ROOT_INCIDENT);
        columnToggleContextMenu.addColumnToggleItem("Подр. описание", ACTION);
        columnToggleContextMenu.addColumnToggleItem("Тип среды", PROM);

        // Вывод подробной информации по инциденту по выделению строки таблицы
        grid.setItemDetailsRenderer(new ComponentRenderer<>(incident -> {
            VerticalLayout layout = new VerticalLayout();
            layout.add(new Label(incident.getACTION()));
            return layout;
        }));

        // Обновление данных счетчика по отфильтрованным элементам
        incFilter.dataViewFiltered.addItemCountChangeListener(event->{
            remove(filteredCount);
            filteredCount.setText("Отфильтровано: " + incFilter.dataViewFiltered.getItemCount());
            add(filteredCount);
            System.out.println("Отфильтровано: " + incFilter.dataViewFiltered.getItemCount());
        });

    }


    static Component createFilterHeader(String labelText, Consumer<String> filterChangeConsumer) {
        Label label = new Label(labelText);
        label.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");
        TextField filterField = new TextField();
        filterField.setValueChangeMode(ValueChangeMode.EAGER);
        filterField.setClearButtonVisible(true);
        filterField.addThemeVariants(TextFieldVariant.LUMO_SMALL);
        filterField.setWidthFull();
        filterField.getStyle().set("max-width", "100%");
//        filterField.setPlaceholder("Поиск");
        filterField.setPrefixComponent(new Icon(VaadinIcon.SEARCH));
        filterField.addValueChangeListener(
                e -> filterChangeConsumer.accept(e.getValue()));
        VerticalLayout layout = new VerticalLayout(filterField);
        layout.getThemeList().clear();
        layout.getThemeList().add("spacing-xs");
        layout.setJustifyContentMode(JustifyContentMode.START);
        return layout;
    }

    static class IncFilter {


        private GridListDataView<DSPIncidentData> dataViewFiltered;
        private String Number;
        private String PriorityCode;
        private String HPCAssigneeName;
        private String HPCAffectedItemName;
        private String PlanOpen;
        private String PlanEnd;
        private String HPCStatus;
        private String HPCIsMass;
        private String SBRootIncident;
        private String Action;
        private String Prom;

        public IncFilter(GridListDataView<DSPIncidentData> dataView) {
            this.dataViewFiltered = dataView;
            this.dataViewFiltered.addFilter(this::incFiltering);

        }

        public void setNumber(String number) {
            this.Number = number;
            this.dataViewFiltered.refreshAll();
        }

        public void setPriorityCode(String priorityCode) {
            this.PriorityCode = priorityCode;
            this.dataViewFiltered.refreshAll();
        }

        public void setHPCAssigneeName(String HPCAssigneeName) {
            this.HPCAssigneeName = HPCAssigneeName;
            this.dataViewFiltered.refreshAll();
        }

        public void setHPCAffectedItemName(String HPCAffectedItemName) {
            this.HPCAffectedItemName = HPCAffectedItemName;
            this.dataViewFiltered.refreshAll();
        }

        public void setPlanOpen(String planOpen) {
            this.PlanOpen = planOpen;
            this.dataViewFiltered.refreshAll();
        }

        public void setPlanEnd(String planEnd) {
            this.PlanEnd = planEnd;
            this.dataViewFiltered.refreshAll();
        }

        public void setHPCStatus(String HPCStatus) {
            this.HPCStatus = HPCStatus;
            this.dataViewFiltered.refreshAll();
        }

        public void setHPCIsMass(String HPCIsMass) {
            this.HPCIsMass = HPCIsMass;
            this.dataViewFiltered.refreshAll();
        }

        public void setSBRootIncident(String SBRootIncident) {
            this.SBRootIncident = SBRootIncident;
            this.dataViewFiltered.refreshAll();
        }
        public void setAction(String Action) {
            this.Action = Action;
            this.dataViewFiltered.refreshAll();
        }
        public void setProm(String Prom) {
            this.Prom = Prom;
            this.dataViewFiltered.refreshAll();
        }

        public boolean incFiltering(DSPIncidentData oipKafkaData) {
            boolean matchesNumber = matches(oipKafkaData.getNUMBER(), Number);
            boolean matchesPriorityCode = matches(oipKafkaData.getPRIORITY_CODE(), PriorityCode);
            boolean matchesHPCAssigneeName = matches(oipKafkaData.getHPC_ASSIGNEE_NAME(), HPCAssigneeName);
            boolean matchesHPCAffectedItemName = matches(oipKafkaData.getHPC_AFFECTED_ITEM_NAME(), HPCAffectedItemName);
            boolean matchesPlanOpen = matches(oipKafkaData.getPLAN_OPEN(), PlanOpen);
            boolean matchesPlanEnd = matches(oipKafkaData.getPLAN_END(), PlanEnd);
            boolean matchesHPCStatus = matches(oipKafkaData.getHPC_STATUS(), HPCStatus);
            boolean matchesHPCIsMass = matches(oipKafkaData.getHPC_IS_MASS(), HPCIsMass);
            boolean matchesSBRootIncident = matches(oipKafkaData.getSB_ROOT_INCIDENT(), SBRootIncident);
            boolean matchesAction = matches(oipKafkaData.getACTION(), Action);
            boolean matchesProm = matches(oipKafkaData.getPROM(), Prom);

            return matchesNumber && matchesPriorityCode && matchesHPCAssigneeName && matchesHPCAffectedItemName &&
                    matchesPlanOpen && matchesPlanEnd && matchesHPCStatus && matchesHPCIsMass && matchesSBRootIncident
                    && matchesAction && matchesProm;
        }

        private boolean matches(String value, String searchTerm) {
            return searchTerm == null || searchTerm.isEmpty() || value
                    .toLowerCase().contains(searchTerm.toLowerCase());
        }
    }

    private static class ColumnToggleContextMenu extends ContextMenu {
        public ColumnToggleContextMenu(Component target) {
            super(target);
            setOpenOnClick(true);
        }

        void addColumnToggleItem(String label, Grid.Column<DSPIncidentData> column) {
            MenuItem menuItem = this.addItem(label, e -> {
                column.setVisible(e.getSource().isChecked());
            });
            menuItem.setCheckable(true);
            menuItem.setChecked(column.isVisible());
        }
    }


    public static class ItemContextMenu extends GridContextMenu<DSPIncidentData> {
        public ItemContextMenu(Grid<DSPIncidentData> target) {
            super(target);

            addItem("Открыть в Service Manager", e -> e.getItem().ifPresent(incident -> {
                getUI().get().getPage().open(
                        "https://servicemanager.ca.sbrf.ru/hpsm/index.do?lang=ru&ctx=docEngine&file=probsummary&query=number%3D%22"
                                + incident.getNUMBER() + "%22&action=&title=",
                        "Открыть в Service Manager");
            }));
        }
    }
}
