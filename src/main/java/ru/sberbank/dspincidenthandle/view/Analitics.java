package ru.sberbank.dspincidenthandle.view;
import com.github.appreciated.apexcharts.ApexCharts;
import com.github.appreciated.apexcharts.ApexChartsBuilder;
import com.github.appreciated.apexcharts.config.builder.*;
import com.github.appreciated.apexcharts.config.chart.StackType;
import com.github.appreciated.apexcharts.config.chart.Type;
import com.github.appreciated.apexcharts.config.chart.builder.ToolbarBuilder;
import com.github.appreciated.apexcharts.config.chart.builder.ZoomBuilder;
import com.github.appreciated.apexcharts.config.chart.toolbar.Tools;
import com.github.appreciated.apexcharts.config.grid.builder.RowBuilder;
import com.github.appreciated.apexcharts.config.legend.HorizontalAlign;
import com.github.appreciated.apexcharts.config.legend.Position;
import com.github.appreciated.apexcharts.config.markers.builder.HoverBuilder;
import com.github.appreciated.apexcharts.config.plotoptions.builder.BarBuilder;
import com.github.appreciated.apexcharts.config.plotoptions.builder.PieBuilder;
import com.github.appreciated.apexcharts.config.plotoptions.pie.builder.*;
import com.github.appreciated.apexcharts.config.responsive.builder.OptionsBuilder;
import com.github.appreciated.apexcharts.config.stroke.Curve;
import com.github.appreciated.apexcharts.config.stroke.LineCap;
import com.github.appreciated.apexcharts.config.subtitle.Align;
import com.github.appreciated.apexcharts.config.yaxis.builder.TitleBuilder;
import com.github.appreciated.apexcharts.helper.Series;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.combobox.ComboBoxVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.ColumnTextAlign;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.grid.HeaderRow;
import com.vaadin.flow.component.grid.dataview.GridListDataView;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.html.H5;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.radiobutton.RadioGroupVariant;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import com.vaadin.flow.component.combobox.MultiSelectComboBox;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentAffectedDataCount;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentDataCountPerMonth;
import ru.sberbank.dspincidenthandle.domain.IDSPIncidentDataTop10;
import ru.sberbank.dspincidenthandle.domain.DSPIncidentData;
import ru.sberbank.dspincidenthandle.repo.*;
import ru.sberbank.dspincidenthandle.service.ExporToCSV;
import ru.sberbank.dspincidenthandle.security.SecurityService;

import javax.annotation.security.PermitAll;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;

import static ru.sberbank.dspincidenthandle.service.ExporToCSV.exportToCSV;

@PermitAll
@Route(value = "analitics")
@PageTitle("Аналитика инцидентов ДСП зарегистрированных вручную")

public class Analitics extends VerticalLayout {
    private final SecurityService securityService;
    private H4 header;
    ApexCharts donutChart;
    ApexCharts lineChart;
    ApexCharts VerticalBarChartIncCompare;
    ApexCharts donutChartIncCompare;
    String startDate;
    String endDate;
    DatePicker start_Date;
    DatePicker end_Date;
    TreeSet<String>labels = new TreeSet<>();
    private Grid<DSPIncidentData> grid_analitics;
    private GridListDataView<DSPIncidentData> dataView_analitics;

    DateTimeFormatter europeanDateFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    //Данные для количество инцидентов за период donut chart
    List<String> labelsDataDonut;
    List<Double> seriesDataDonut;

    List<Double> incHandleSeriesDataBar;
    List<Double> incAutoSeriesDataBar;
    List<Double> incHandleSeriesDataBarTotal = new ArrayList<>();
    List<Double> incHandleSeriesDataBarProm = new ArrayList<>();
    List<Double> incHandleSeriesDataBarTest = new ArrayList<>();
    List<Double> incAutoSeriesDataBarTotal = new ArrayList<>();
    List<Double> incAutoSeriesDataBarProm = new ArrayList<>();
    List<Double> incAutoSeriesDataBarTest = new ArrayList<>();

    //Данные для donut Chart по суммарным данным
    //Получение легенды
    List<String> incLabelsDataDonut;

    //Получение количества по инцидентам для суммарных данных по процентам Donut Chart
    double incAutomaticCountDonutTotal;
    double incAutomaticCountDonutProm;
    double incAutomaticCountDonutTest;
    double incHandleCountDonutTotal;
    double incHandleCountDonutProm;
    double incHandleCountDonutTest;
    double incAutomaticDonutCount;
    double incHandleDonutCount;


    @Autowired
    private DSPIncidentAffectedCountRepo incidentAffectedDataTotalCountRepo;
    @Autowired
    private DSPIncidentCountPerMonthRepo incidentDataCountPerMonthRepo;
    @Autowired
    private DSPIncidentAnaliticsRepo incidentAnaliticsRepo;
    @Autowired
    private DSPIncidentTop10Repo incidentDataTop10Repo;
    @Autowired
    private DSPIncidentRepo incidentRepo;
    @Autowired
    private DSPIncidentPrcCountRepo incidentPrcCountRepo;


    //Обьявления уровня всей формы
    FormLayout formLayout;

    private Map<String,Map<String, Integer>> assignmentGroupMapToMonthData;

    IncTop10Filter incTop10Filter;

    ComboBox<String> typeStatisticsComboBox;

    //Обьявление MultiComboBox выбора типа ИТ услуги для прорисовки
    MultiSelectComboBox<String> typeAffectedItemMultiComboBox;

    //Обьявление ComboBox выбора списка типа ИТ услуги для прорисовки
    List <String> selectedAffectedItemList;

    Anchor downloadToCSV;

    //Обьявление выбора типа данных для аналитики
    private RadioButtonGroup<String> typeAnaliticsDataSelect;

    //Обьявление уровня процентного сравнения инцидентов
    private VerticalLayout IncComparelayout;

    //Данные для BarChart по ИТ услугам
    List<String> incLabelsDataBar = Arrays.asList("«Platform V Corax» (CI04085569)", "Apache Kafka (CI02192117)", "SOWA (CI02192118)",
            "IBM WebSphere MQ (CI02021291)", "IBM DataPower (CI02021290)", "IBM Websphere MB (CI02192119)",
            "Интеграционные платформы серверов приложений (CI00737140)",
            "IBM WebSphere Application Server (CI02021299)",
            "Nginx (CI02021302)","SynGX (CI04178739)",
            "WildFly (CI02021292)", "Платформа управления контейнерами (Terra) (CI01563053)");

    //Список ИТ услуг для обработки - будут добавляться элементы - Элемент "Все"
    List<String> typeAffectedItemList = new ArrayList<>(incLabelsDataBar);

    //top 10 исполнителей вертикальная сетка
    VerticalLayout top10Inclayout;


    public Analitics(SecurityService securityService, DSPIncidentAffectedCountRepo incidentAffectedDataTotalCountRepo,
                     DSPIncidentCountPerMonthRepo incidentDataCountPerMonthRepo,
                     DSPIncidentAnaliticsRepo incidentAnaliticsRepo,
                     DSPIncidentTop10Repo incidentDataTop10Repo, DSPIncidentPrcCountRepo incidentPrcCountRepo,
                     DSPIncidentRepo incidentRepo) {
        this.securityService = securityService;
        this.header = new H4("Аналитика инцидентов ДСП зарегистрированных вручную за период");
        setHorizontalComponentAlignment(Alignment.CENTER, header);
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
        this.incidentAffectedDataTotalCountRepo = incidentAffectedDataTotalCountRepo;
        this.incidentDataCountPerMonthRepo = incidentDataCountPerMonthRepo;
        this.incidentAnaliticsRepo = incidentAnaliticsRepo;
        this.incidentDataTop10Repo = incidentDataTop10Repo;
        this.incidentPrcCountRepo = incidentPrcCountRepo;
        this.incidentRepo = incidentRepo;

        //    Метод инициализации заголовка и кнопки выхода
        createLogoutButton();

        //Кнопка поиска
        TextField searchField = new TextField();
        searchField.getElement().setAttribute("aria-label", "search");
        searchField.setPlaceholder("Найти инцидент");
        searchField.setClearButtonVisible(true);
        searchField.setPrefixComponent(VaadinIcon.SEARCH.create());
//        searchField.setHelperText("Любое значение: Имя хоста, исполнитель, группа сопрровждения, ИТ-услуга");


        //Кнопка запроса аналитики
        Button buttonQuery = new Button();
        buttonQuery.setText("Запрос данных");

        //Anchor block
        downloadToCSV = new Anchor(exportToCSV(initGridIncData (start_Date,end_Date)), "Сохранить в CSV" );
        Button buttonDownloadCSV = new Button(new Icon(VaadinIcon.DOWNLOAD));
        buttonDownloadCSV.setText("Сохранить в CSV");
        buttonDownloadCSV.setEnabled(false);
//        buttonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
        downloadToCSV.removeAll();
        downloadToCSV.add(buttonDownloadCSV);

        //Выбор типа ИТ услуги - Мультивыбор
        typeAffectedItemMultiComboBox = new MultiSelectComboBox();
        typeAffectedItemList.add(0, "Все");
        typeAffectedItemMultiComboBox.setItems(typeAffectedItemList);
        typeAffectedItemMultiComboBox.setPlaceholder("Выбор ИТ услуги");


        //Отображение. Добавление компонентов

        HorizontalLayout dateLayout = new HorizontalLayout(start_Date, end_Date, buttonQuery, downloadToCSV, searchField);
        dateLayout.setVerticalComponentAlignment(Alignment.END, start_Date, end_Date, buttonQuery, downloadToCSV, searchField);
        setHorizontalComponentAlignment(Alignment.CENTER, dateLayout);
        setHorizontalComponentAlignment(Alignment.CENTER, typeAffectedItemMultiComboBox);

        formLayout = new FormLayout();
        formLayout.setResponsiveSteps(new FormLayout.ResponsiveStep("0", 2));
        formLayout.setSizeUndefined();

        add(header, dateLayout);

        //Обработчик поиска
        searchField.setValueChangeMode(ValueChangeMode.LAZY);
        searchField.setValueChangeTimeout(3000);
        searchField.addValueChangeListener(changeListener->{
            if (!searchField.getValue().equals(""))
            {
                search(start_Date,end_Date, searchField.getValue());
            }
        });
        searchField.addKeyPressListener(Key.ENTER, keyPressEvent -> search(start_Date,end_Date, searchField.getValue()));

        //Обработчик кнопки
        buttonQuery.addClickListener(clickEvent -> {
            typeAffectedItemMultiComboBox.clear();
            selectedAffectedItemList = typeAffectedItemMultiComboBox.getValue().stream()
                    .collect(Collectors.toList());
            remove(typeAffectedItemMultiComboBox);
            formLayout.removeAll();
            remove(formLayout);
            downloadToCSV.setHref(exportToCSV(initGridIncData (start_Date,end_Date)));
            assignmentGroupMapToMonthData = getTotalCounPerMonthAnaliticsData(start_Date,end_Date);
            lineChart = LineChartInit();
            donutChart = donutChartInit();
            donutChart.setMaxWidth("100%");
            donutChart.setWidth("900px");
            donutChart.setMaxHeight("100%");
            donutChart.setHeight("600px");
            try {
                formLayout.add(donutChart, lineChart, top10IncGridInit(), IncComparelayout());
            } catch (Exception e) {
                e.printStackTrace();
            }
            add(typeAffectedItemMultiComboBox, formLayout);
            buttonDownloadCSV.setEnabled(true);
        });

        //Блок прорисовки при измении количества типа ИТ услуги
        typeAffectedItemMultiComboBox.addValueChangeListener(e -> {
            //Получение выделенных элементов ИТ услуг
            selectedAffectedItemList = e.getValue().stream()
                    .collect(Collectors.toList());

            formLayout.removeAll();
            remove(formLayout);
            lineChart = LineChartInit();
            donutChart = donutChartInit();
            renderChartsAnaliticsPrc();
            donutChart.setMaxWidth("100%");
            donutChart.setWidth("900px");
            donutChart.setMaxHeight("100%");
            donutChart.setHeight("600px");
            try {
                formLayout.add(donutChart, lineChart, top10Inclayout, IncComparelayout);
            } catch (Exception E) {
                E.printStackTrace();
            }
            add(formLayout);

        });

    }

    //    Метод инициализации заголовка и кнопки выхода
    private void createLogoutButton() {
        H4 logout_space = new H4(" ");
//    Работает с vaadin 24.2.4
//    logo.addClassNames(
//            Lumo.FontSize.LARGE,
//            LumoUtility.Margin.MEDIUM);

        String u = securityService.getAuthenticatedUser().getUsername();
        Button logout = new Button("Выход " + u, e -> securityService.logout());

        var logoutLayout = new HorizontalLayout(logout_space,logout);
        logoutLayout.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);
        logoutLayout.setWidthFull();
        logoutLayout.expand(logout_space);
//    header.setWidthFull();

        //    Работает с vaadin 24.2.4
//    header.addClassNames(
//            LumoUtility.Padding.Vertical.NONE,
//            LumoUtility.Padding.Horizontal.MEDIUM);

        add(logoutLayout);

    }

    //Метод диалога поиска инцидента
    private void search(DatePicker start_date, DatePicker end_date, String searchValue) {
        VerticalLayout searchLayout = new VerticalLayout();
        startDate = start_date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_date.getValue().format(europeanDateFormatter) + " 23:59:59";
        String periodDate = start_date.getValue().format(europeanDateFormatter) + " - " + end_date.getValue().format(europeanDateFormatter);

        //Создание диалога поиска
        Dialog dialog = new Dialog();
        dialog.setWidth("80%");
        dialog.setHeight("80%");
        //        dialog.setHeightFull();
        //        dialog.setWidthFull();
        dialog.setDraggable(true);
        dialog.setResizable(true);
        //Кнопка закрытия диалога поиска
        Button closeButton = new Button(new Icon("lumo", "cross"), (e) -> dialog.close());
        closeButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY);
        setHorizontalComponentAlignment(Alignment.END, closeButton);

        Grid<DSPIncidentData> searchGrid = new Grid<>(DSPIncidentData.class, false);
        GridListDataView<DSPIncidentData> searchDataView = searchGrid.setItems(incidentAnaliticsRepo.findIncBySearchFilter(startDate,endDate,searchValue));

//        searchGrid.setAllRowsVisible(true); //Автоматическая высота таблицы в зависимости от количества строк
        searchGrid.setHeight("77%");
        searchGrid.setWidth("100%");
        searchGrid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
        searchGrid.setColumnReorderingAllowed(true);
        //Create column for Grid

        Grid.Column<DSPIncidentData> NUMBER = searchGrid
                .addColumn(DSPIncidentData::getNUMBER).setSortable(true).setResizable(true).
                        setTextAlign(ColumnTextAlign.START).setHeader("Номер инцидента");
        Grid.Column<DSPIncidentData> PRIORITY_CODE = searchGrid
                .addColumn(DSPIncidentData::getPRIORITY_CODE).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Важность");
        Grid.Column<DSPIncidentData> HPC_ASSIGNEE_NAME = searchGrid
                .addColumn(DSPIncidentData::getPRIORITY_CODE).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Исполнитель");
        Grid.Column<DSPIncidentData> HPC_AFFECTED_ITEM_NAME = searchGrid
                .addColumn(DSPIncidentData::getHPC_AFFECTED_ITEM_NAME).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("ИТ-услуга");
        Grid.Column<DSPIncidentData> PLAN_OPEN = searchGrid
                .addColumn(DSPIncidentData::getPLAN_OPEN).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Плановое начало");
        Grid.Column<DSPIncidentData> PLAN_END = searchGrid
                .addColumn(DSPIncidentData::getPLAN_OPEN).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Плановое окончание");
        Grid.Column<DSPIncidentData> ASSIGNEE_NAME = searchGrid
                .addColumn(DSPIncidentData::getHPC_ASSIGNEE_NAME).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Исполнитель");
        Grid.Column<DSPIncidentData> HPC_STATUS = searchGrid
                .addColumn(DSPIncidentData::getHPC_STATUS).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Статус");
        Grid.Column<DSPIncidentData> HPC_IS_MASS = searchGrid
                .addColumn(DSPIncidentData::getHPC_IS_MASS).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("ИУУ");
        Grid.Column<DSPIncidentData> SB_ROOT_INCIDENT = searchGrid
                .addColumn(DSPIncidentData::getSB_ROOT_INCIDENT).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Корневой");
        Grid.Column<DSPIncidentData> PROM = searchGrid
                .addColumn(DSPIncidentData::getPROM).setSortable(true).setResizable(true)
                .setTextAlign(ColumnTextAlign.START).setHeader("Тип среды");



        // Вывод подробной информации по инциденту по выделению строки таблицы
        searchGrid.setItemDetailsRenderer(new ComponentRenderer<>(incident -> {
            VerticalLayout layout = new VerticalLayout();
            layout.add(new Label(incident.getACTION()));
            return layout;
        }));
        MainView.ItemContextMenu searchGridContextMenu = new MainView.ItemContextMenu(searchGrid);

        //Anchor block
        Anchor searchDownloadToCSV = new Anchor(exportToCSV(searchDataView), "Сохранить в CSV" );
        Button searchButtonDownloadCSV = new Button(new Icon(VaadinIcon.DOWNLOAD));
        searchButtonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
        searchDownloadToCSV.removeAll();
        searchDownloadToCSV.add(searchButtonDownloadCSV);
        setHorizontalComponentAlignment(Alignment.END, searchDownloadToCSV);

        Label searchHeader = new Label("Инциденты за период " + periodDate + " (" + searchDataView.getItemCount() + " шт.)");
        setHorizontalComponentAlignment(Alignment.CENTER, searchHeader);

        searchLayout.add(closeButton, searchHeader, searchDownloadToCSV);
//        dialog.add(searchLayout, searchGrid, searchGridContextMenu, new Label("Найдено автоинцидентов: "
//                + searchDataView.getItemCount()));
        dialog.add(searchLayout, searchGrid, new Label("Найдено инцидентов: "
                + searchDataView.getItemCount()));
        dialog.open();

    }

    private ApexCharts donutChartInit(){
        String periodDate = start_Date.getValue().format(europeanDateFormatter) + " - " + end_Date.getValue().format(europeanDateFormatter);
        if (typeAffectedItemMultiComboBox.getValue().isEmpty()) getTotalCountIncAnaliticsData(start_Date, end_Date);

        ApexCharts donutChart = ApexChartsBuilder.get()
                .withChart(ChartBuilder.get()
                        .withType(Type.DONUT)
                        .withZoom(ZoomBuilder.get()
                                .withEnabled(true)
                                .withAutoScaleYaxis(true)
                                .build())
                        .withToolbar(ToolbarBuilder.get()
                                .withShow(true)
                                .withTools(new Tools())
                                .build())
//                        .withOffsetX(-100.0)
                        .withOffsetY(-30.0) //-30 Это смешение вверх
                        .build())
                .withTitle(TitleSubtitleBuilder.get()
                        .withText("Количество инцидентов за период " + periodDate)
                        .withAlign(Align.CENTER)
                        .build())
                .withPlotOptions(PlotOptionsBuilder.get().withPie(PieBuilder.get()
                        .withDonut(DonutBuilder.get()
                                .withLabels(LabelsBuilder.get()
                                        .withShow(true)
                                        .withName(NameBuilder.get().withShow(true).build())
                                        .withTotal(TotalBuilder.get().withShow(true).withLabel("Всего").build())
                                        .build())
                                .build())
                        .build())
                        .build())
                .withLegend(LegendBuilder.get()
                        .withPosition(Position.BOTTOM)
                        .withHorizontalAlign(HorizontalAlign.CENTER)
//                        .withHeight(10.0)
//                        .withFloating(true)
//                        .withFontSize("15")
//                        .withOffsetX(0.0)
                        .withOffsetY(5.0)
                        .build())
//                .withSeries(seriesDataDonut.stream().toArray(Double[]::new))
//                .withLabels(labelsDataDonut.stream().toArray(String[]::new))
                .withResponsive(ResponsiveBuilder.get()
                        .withBreakpoint(480.0)
                        .withOptions(OptionsBuilder.get()
                                .withLegend(LegendBuilder.get()
                                        .withPosition(Position.BOTTOM)
                                        .build())
                                .build())
                        .build())
                .build();

        donutChart.setColors("#FF0000", "#800000", "#FF8C00", "#808000", "#00FF00", "#008000",
                "#00FFFF", "#008080", "#0000FF", "#000080", "#800080", "#FF00FF", "#808080", "#000000");
        donutChart.setMaxWidth("100%");
        donutChart.setWidth("900px");
        donutChart.setMaxHeight("100%");
        donutChart.setHeight("600px");

        selectedAffectedItemList = typeAffectedItemMultiComboBox.getValue().stream()
                .collect(Collectors.toList());

        if (selectedAffectedItemList.contains("Все") || selectedAffectedItemList.isEmpty()) {
            donutChart.setSeries(seriesDataDonut.stream().toArray(Double[]::new));
            donutChart.setLabels(labelsDataDonut.stream().toArray(String[]::new));
        } else
        {
            try {
                donutChart.setSeries(selectedAffectedItemList.stream()
                        .filter(e->labelsDataDonut.contains(e))
                        .map(e->seriesDataDonut.get(labelsDataDonut.indexOf(e)))
                        .collect(Collectors.toList())
                        .toArray(Double[]::new));
                donutChart.setLabels(selectedAffectedItemList.stream()
                        .filter(e->labelsDataDonut.contains(e))
                        .map(e->labelsDataDonut.get(labelsDataDonut.indexOf(e)))
                        .collect(Collectors.toList())
                        .toArray(String[]::new));
            } catch (Exception E) {
                E.printStackTrace();
            }
        }
        return donutChart;
    }

    private ApexCharts LineChartInit (){
        String periodDate = start_Date.getValue().format(europeanDateFormatter) + " - " + end_Date.getValue().format(europeanDateFormatter);
        ApexCharts lineChart = ApexChartsBuilder.get()
                .withChart(ChartBuilder.get()
                        .withType(Type.LINE)
                        .withZoom(ZoomBuilder.get()
                                .withEnabled(true)
                                .build())
                        .build())
                .withStroke(StrokeBuilder.get()
                        .withCurve(Curve.SMOOTH)
                        .build())
                .withMarkers(MarkersBuilder.get()
                        .withSize(1.0, 1.0)
                        .withHover(HoverBuilder.get().build())
                        .build())
                .withTitle(TitleSubtitleBuilder.get()
                        .withText("Динамика инцидентов по месяцам за период " + periodDate)
                        .withAlign(Align.CENTER)
                        .build())
                .withGrid(GridBuilder.get()
                        .withRow(RowBuilder.get()
                                .withColors("#f3f3f3", "transparent")
                                .withOpacity(0.5).build()
                        ).build())
//                .withXaxis(XAxisBuilder.get()
//                        .withCategories(new ArrayList<String>(labels))
////                    .withCategories("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep")
//                        .build())
//                .withSeries(SetSeries(assignmentGroupMapToMonthData).stream().toArray(Series[]::new))
                .build();
        lineChart.setColors("#FF0000", "#800000", "#FF8C00", "#808000", "#00FF00", "#008000",
                "#00FFFF", "#008080", "#0000FF", "#000080", "#800080", "#FF00FF", "#808080", "#000000");
        lineChart.setMaxWidth("100%");
        lineChart.setWidth("900px");
        lineChart.setMaxHeight("100%");
        lineChart.setHeight("600px");

        selectedAffectedItemList = typeAffectedItemMultiComboBox.getValue().stream()
                .collect(Collectors.toList());

        if (selectedAffectedItemList.contains("Все") || selectedAffectedItemList.isEmpty()) {
            lineChart.setSeries(SetSeries(assignmentGroupMapToMonthData).stream().toArray(Series[]::new));
            lineChart.setXaxis(XAxisBuilder.get()
                    .withCategories(new ArrayList<String>(labels)).build());
        }
        else
        {
            lineChart.setSeries(SetSeries(selectedAffectedItemList.stream()
                    .filter(e->assignmentGroupMapToMonthData.containsKey(e))
//                    .map(e->assignmentGroupMapToMonthData.get(e))
                    .collect(Collectors.toMap(e->e,e->assignmentGroupMapToMonthData.get(e)))).stream().toArray(Series[]::new));
            lineChart.setXaxis(XAxisBuilder.get()
                    .withCategories(new ArrayList<String>(labels)).build());
        }

        return lineChart;
    }

    //Построение таблицы top 10 исполнителей
    private VerticalLayout top10IncGridInit() {
        String startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        String endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        //top 10 исполнителей вертикальная сетка
        top10Inclayout = new VerticalLayout();
        H5 top10Header = new H5("Топ 10 исполнителей по количеству инцидентов за период " + start_Date.getValue().format(europeanDateFormatter) + " - " + end_Date.getValue().format(europeanDateFormatter));
        Grid<IDSPIncidentDataTop10> top10IncGrid = new Grid<>(IDSPIncidentDataTop10.class, false);

//        GridListDataView<IDSPIncidentDataTop10> top10IncDataView = top10IncGrid.setItems(
//                dataTop10IncRepo.findTop10IncCount(startDate,endDate));
        GridListDataView<IDSPIncidentDataTop10> top10IncDataView = top10IncGrid.setItems(
                incidentDataTop10Repo.findTop10IncCount(startDate, endDate));

        top10IncGrid.addThemeVariants(GridVariant.LUMO_COMPACT, GridVariant.LUMO_ROW_STRIPES);
        top10IncGrid.setColumnReorderingAllowed(true);
        //Вывод списка инцидентов по исполнителю
        top10IncGrid.addItemDoubleClickListener(inc->search(start_Date, end_Date, inc.getItem().getAssignee_Name()));

        //Create column for Grid

        Grid.Column<IDSPIncidentDataTop10> AFFECTED_ITEM = top10IncGrid
                .addColumn(IDSPIncidentDataTop10::getAffected_Item).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("ИТ-услуга");
        Grid.Column<IDSPIncidentDataTop10> HOST = top10IncGrid
                .addColumn(IDSPIncidentDataTop10::getAssignee_Name).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Исполнитель");
        Grid.Column<IDSPIncidentDataTop10> COUNT_INC = top10IncGrid
                .addColumn(IDSPIncidentDataTop10::getCount_Inc).setSortable(true).setResizable(true).setTextAlign(ColumnTextAlign.START).setHeader("Количество");

        top10IncGrid.setMaxWidth("100%");
        top10IncGrid.setWidth("900px");
        top10IncGrid.setMaxHeight("100%");
        top10IncGrid.setHeight("650px");

        //Создание фильтра для ИТ услуги
        incTop10Filter = new Analitics.IncTop10Filter(top10IncDataView);
        top10IncGrid.getHeaderRows().clear();
        HeaderRow headerRow = top10IncGrid.appendHeaderRow();
        headerRow.getCell(AFFECTED_ITEM)
                .setComponent(createFilterHeader("ИТ-услуга", incTop10Filter::setAffectedItem, top10IncDataView));


        //Anchor block

        Anchor top10IncDownloadToCSV = new Anchor(ExporToCSV.exportTop10ToCSV(incidentDataTop10Repo, startDate,endDate), "Сохранить в CSV");
        Button top10IncButtonDownloadCSV = new Button(new Icon(VaadinIcon.DOWNLOAD));
        top10IncButtonDownloadCSV.addThemeVariants(ButtonVariant.LUMO_TERTIARY, ButtonVariant.LUMO_SMALL, ButtonVariant.LUMO_ICON);
        top10IncDownloadToCSV.removeAll();
        top10IncDownloadToCSV.add(top10IncButtonDownloadCSV);
        HorizontalLayout top10HeaderLayout = new HorizontalLayout(top10Header,top10IncDownloadToCSV);

        top10HeaderLayout.setVerticalComponentAlignment(Alignment.END, top10Header,top10IncDownloadToCSV);
        setHorizontalComponentAlignment(Alignment.CENTER, top10HeaderLayout);
        top10Inclayout.add(top10HeaderLayout, top10IncGrid);

        return top10Inclayout;
    }

    @SneakyThrows
    private void getIncHandlePrcCountAnaliticsData(DatePicker start_Date, DatePicker end_Date) {
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";

        incHandleSeriesDataBarTotal.clear();
        incHandleSeriesDataBarProm.clear();
        incHandleSeriesDataBarTest.clear();
        List<IDSPIncidentAffectedDataCount> incidentHandleAffectedDataCountTotalList = incidentAffectedDataTotalCountRepo
                .findIncHandleByAffectedItemCountBarTotal(startDate, endDate);
        List<IDSPIncidentAffectedDataCount> incidentHandleAffectedDataCountPromList = incidentAffectedDataTotalCountRepo
                .findIncHandleByAffectedItemCountBarProm(startDate, endDate);
        List<IDSPIncidentAffectedDataCount> incidentHandleAffectedDataCountTestList = incidentAffectedDataTotalCountRepo
                .findIncHandleByAffectedItemCountBarTest(startDate, endDate);

        for (String label:incLabelsDataBar) {
            boolean affectedItemPresenceTotal = false;
            for (IDSPIncidentAffectedDataCount incidentAffectedDataCount : incidentHandleAffectedDataCountTotalList) {
                if (label.equals(incidentAffectedDataCount.getAffected_Item())) {
                    affectedItemPresenceTotal = true;
                    incHandleSeriesDataBarTotal.add(incidentAffectedDataCount.getCount_Inc().doubleValue());
                    break;
                }
            }

            if (!affectedItemPresenceTotal) {
                incHandleSeriesDataBarTotal.add(0.0);
            }


            boolean affectedItemPresenceProm = false;
            for (IDSPIncidentAffectedDataCount incidentAffectedDataCount : incidentHandleAffectedDataCountPromList) {
                if (label.equals(incidentAffectedDataCount.getAffected_Item())) {
                    affectedItemPresenceProm = true;
                    incHandleSeriesDataBarProm.add(incidentAffectedDataCount.getCount_Inc().doubleValue());
                    break;
                }
            }

            if (!affectedItemPresenceProm) {
                incHandleSeriesDataBarProm.add(0.0);
            }


            boolean affectedItemPresenceTest = false;
            for (IDSPIncidentAffectedDataCount incidentAffectedDataCount : incidentHandleAffectedDataCountTestList) {
                if (label.equals(incidentAffectedDataCount.getAffected_Item())) {
                    affectedItemPresenceTest = true;
                    incHandleSeriesDataBarTest.add(incidentAffectedDataCount.getCount_Inc().doubleValue());
                    break;
                }
            }

            if (!affectedItemPresenceTest) {
                incHandleSeriesDataBarTest.add(0.0);

            }
        }
    }

    @SneakyThrows
    private void getIncAutoPrcCountAnaliticsData(DatePicker start_Date, DatePicker end_Date){
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";

        incAutoSeriesDataBarTotal.clear();
        incAutoSeriesDataBarProm.clear();
        incAutoSeriesDataBarTest.clear();

        List<IDSPIncidentAffectedDataCount> incidentAutoAffectedDataCountTotalList = incidentAffectedDataTotalCountRepo
                .findIncAutoByAffectedItemCountBarTotal(startDate, endDate);
        List<IDSPIncidentAffectedDataCount> incidentAutoAffectedDataCountPromList = incidentAffectedDataTotalCountRepo
                .findIncAutoByAffectedItemCountBarProm(startDate, endDate);
        List<IDSPIncidentAffectedDataCount> incidentAutoAffectedDataCountTestList = incidentAffectedDataTotalCountRepo
                .findIncAutoByAffectedItemCountBarTest(startDate, endDate);

        for (String label:incLabelsDataBar) {
            boolean affectedItemPresenceTotal = false;
            for (IDSPIncidentAffectedDataCount incidentAffectedDataCount : incidentAutoAffectedDataCountTotalList) {
                if (label.equals(incidentAffectedDataCount.getAffected_Item())) {
                    affectedItemPresenceTotal = true;
                    incAutoSeriesDataBarTotal.add(incidentAffectedDataCount.getCount_Inc().doubleValue());
                    break;
                }
            }

            if (!affectedItemPresenceTotal) {
                incAutoSeriesDataBarTotal.add(0.0);
            }


            boolean affectedItemPresenceProm = false;
            for (IDSPIncidentAffectedDataCount incidentAffectedDataCount : incidentAutoAffectedDataCountPromList) {
                if (label.equals(incidentAffectedDataCount.getAffected_Item())) {
                    affectedItemPresenceProm = true;
                    incAutoSeriesDataBarProm.add(incidentAffectedDataCount.getCount_Inc().doubleValue());
                    break;
                }
            }

            if (!affectedItemPresenceProm) {
                incAutoSeriesDataBarProm.add(0.0);
            }


            boolean affectedItemPresenceTest = false;
            for (IDSPIncidentAffectedDataCount incidentAffectedDataCount : incidentAutoAffectedDataCountTestList) {
                if (label.equals(incidentAffectedDataCount.getAffected_Item())) {
                    affectedItemPresenceTest = true;
                    incAutoSeriesDataBarTest.add(incidentAffectedDataCount.getCount_Inc().doubleValue());
                    break;
                }
            }

            if (!affectedItemPresenceTest) {
                incAutoSeriesDataBarTest.add(0.0);

            }
        }
    }

    private Map<String,Map<String, Integer>> getTotalCounPerMonthAnaliticsData(DatePicker start_Date, DatePicker end_Date){

        Map<String,Map<String, Integer>> valueMapToMonthData = new HashMap<>();
        Map<String, Integer> monthYearCountInc = new HashMap<>();
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        List<String> itemExecute = new ArrayList<>();

        //По ИТ услуге
            List<IDSPIncidentDataCountPerMonth> TotalCounPerMonthAnaliticsData = incidentDataCountPerMonthRepo
                    .findIncAffectedItemCountPerMonth(startDate, endDate);
            ListIterator<IDSPIncidentDataCountPerMonth> totalCounPerMonthAnaliticsDataIter = TotalCounPerMonthAnaliticsData.listIterator();
            while (totalCounPerMonthAnaliticsDataIter.hasNext()) {
                monthYearCountInc.clear();
                String affectedItemName = totalCounPerMonthAnaliticsDataIter.next().getHPC_Affected_Item_Name();

                if (!itemExecute.contains(affectedItemName)) {

                    for (IDSPIncidentDataCountPerMonth e : TotalCounPerMonthAnaliticsData) {
                        if (e.getHPC_Affected_Item_Name().equals(affectedItemName)) {
                            String year = e.getYear();
                            String month = e.getMonth_Number();
                            Integer countInc = e.getCount_Inc();
                            monthYearCountInc.put(year + " " + month, countInc);
                        }
                    }

                    itemExecute.add(affectedItemName);


                valueMapToMonthData.put(affectedItemName, new TreeMap<String, Integer>(monthYearCountInc));
            }
        }

        //Определение временной шкаолы - Labels

        labels.clear();

        List<Set<String>> alllabels;

        alllabels = valueMapToMonthData.entrySet()
                .stream()
                .map(e-> e.getValue())
                .map(e->e.keySet())
                .collect(Collectors.toList());

        alllabels.stream()
                .forEach(l-> {
                    for (String dataLabel:l) {

                        labels.add(dataLabel);

                    }
                });


        //Определение и форматирование данных для назначенных групп


        valueMapToMonthData.entrySet()
                .stream()
                .map(e-> e.getValue())
                .forEach(e->{
                    for (String key:labels) {
                        if (!e.containsKey(key))
                            e.put(key, 0);
                    }
                });
//        System.out.println(valueMapToMonthData);
        return valueMapToMonthData;

    }

    private List<Series> SetSeries (Map<String,Map<String, Integer>> valueMapToMonthData) {
        // Получение Series для данных групп
        List<Series> setSeries = new ArrayList<>();
        valueMapToMonthData.entrySet()
                .stream()
                .forEach(e->{
                    String seriesName = e.getKey();
                    List<Double> seriesData = e.getValue().entrySet()
                            .stream()
                            .map(z->z.getValue().doubleValue())
                            .collect(Collectors.toList());
                    setSeries.add(new Series<>(seriesName, seriesData.stream().toArray(Double[]::new)));
                });
        return setSeries;
    }

    private GridListDataView<DSPIncidentData> initGridIncData (DatePicker start_Date, DatePicker end_Date){
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";
        grid_analitics = new Grid<>(DSPIncidentData.class, false);
        dataView_analitics = grid_analitics.setItems(incidentAnaliticsRepo.findAllIncAnaliticByDate(startDate, endDate));
        return dataView_analitics;
    };

    private Component createFilterHeader(String labelText, Consumer<String> filterChangeConsumer,
                                         GridListDataView<IDSPIncidentDataTop10> incTop10DataViewFiltered) {
        Label label = new Label(labelText);
        label.getStyle().set("padding-top", "var(--lumo-space-m)")
                .set("font-size", "var(--lumo-font-size-xs)");

        Set<String> affectedItem = new HashSet<>(incTop10DataViewFiltered.getItems()
                .map(item -> item.getAffected_Item())
                .collect(Collectors.toSet()));

        ComboBox<String> incTop10DilterComboBox = new ComboBox<>();
        incTop10DilterComboBox.setPlaceholder("Выберите ИТ-услугу");
        incTop10DilterComboBox.setItems(affectedItem);
        incTop10DilterComboBox.setClearButtonVisible(true);
        incTop10DilterComboBox.addThemeVariants(ComboBoxVariant.LUMO_SMALL);
        incTop10DilterComboBox.setWidthFull();
        incTop10DilterComboBox.getStyle().set("max-width", "100%");

        incTop10DilterComboBox.addValueChangeListener(
                e -> filterChangeConsumer.accept(e.getValue()));
        VerticalLayout layout = new VerticalLayout(incTop10DilterComboBox);
        layout.getThemeList().clear();
        layout.getThemeList().add("spacing-xs");
        layout.setJustifyContentMode(JustifyContentMode.START);
        return layout;


    }

    private static class IncTop10Filter {


        private GridListDataView<IDSPIncidentDataTop10> incTop10DataViewFiltered;

        private String affectedItem;

        public IncTop10Filter(GridListDataView<IDSPIncidentDataTop10> dataView) {
            this.incTop10DataViewFiltered = dataView;
            this.incTop10DataViewFiltered.addFilter(this::test);

        }


        public void setAffectedItem(String affectedItem) {
            this.affectedItem = affectedItem;
            this.incTop10DataViewFiltered.refreshAll();
        }


        public boolean test(IDSPIncidentDataTop10 uspIncidentData) {
            boolean matchesAffectedItem = matches(uspIncidentData.getAffected_Item(), affectedItem);
            return matchesAffectedItem;

        }

        private boolean matches(String value, String searchTerm) {
            return searchTerm == null || searchTerm.isEmpty() || value
                    .toLowerCase().contains(searchTerm.toLowerCase());
        }
    }

    @SneakyThrows
    private VerticalLayout IncComparelayout() {
        IncComparelayout = new VerticalLayout();
        String periodDate = start_Date.getValue().format(europeanDateFormatter) + " - " + end_Date.getValue().format(europeanDateFormatter);
        H5 VerticalBarChartIncCoverHeader = new H5("Процентное соотношение инцидентов (автоматические/зарег. вручную) за период " + periodDate);

        //Получение данных по количеству авто инцидентов для графика BarChart
        getIncAutoPrcCountAnaliticsData(start_Date,end_Date);

        //Получение данных по количеству ручных инцидентов для графика BarChart
        getIncHandlePrcCountAnaliticsData(start_Date,end_Date);

        //Получение данных по количеству суммарно авто и зарег. вручную инцидентов для графика Donut
        getIncPrcCountAnaliticsDataDonut(start_Date,end_Date);


        //ВЫбор типа данных - Общая (ПРОМ + ТЕСТ), ПРОМ, ТЕСТ
        typeAnaliticsDataSelect = new RadioButtonGroup<>();
        typeAnaliticsDataSelect.addThemeVariants(RadioGroupVariant.LUMO_VERTICAL);
        typeAnaliticsDataSelect.setLabel("Тип данных");
        typeAnaliticsDataSelect.setItems("Общая (ПРОМ + ТЕСТ)", "ПРОМ", "ТЕСТ");
        typeAnaliticsDataSelect.setValue("Общая (ПРОМ + ТЕСТ)");


        //Выбор типа статистики
        typeStatisticsComboBox = new ComboBox<>();
        typeStatisticsComboBox.setLabel("Выбор типа статистики");
        typeStatisticsComboBox.setPlaceholder("Выбор типа статистики");
        typeStatisticsComboBox.setItems(
                "Суммарно",
                "По ИТ услугам"
        );
        typeStatisticsComboBox.setValue("Суммарно");
        typeStatisticsComboBox.setClearButtonVisible(false);
        typeStatisticsComboBox.setAllowCustomValue(false);
        typeStatisticsComboBox.addThemeVariants(ComboBoxVariant.LUMO_SMALL);


        typeAnaliticsDataSelect.addValueChangeListener(e-> {
            renderChartsAnaliticsPrc();
        });

        //Блок прорисовки при измении тпа аналитики - Суммарно, По ИТ услугам
        typeStatisticsComboBox.addValueChangeListener(e-> {
            renderChartsAnaliticsPrc();
        });


        //Инициализация donut Chart сравнения инцидетов
        donutChartIncCompare = donutChartIncCompareInit(typeAnaliticsDataSelect.getValue());

        //Инициализация BarChart сравнения инцидентов
        VerticalBarChartIncCompare = VerticalBarChartIncCompareInit(typeAnaliticsDataSelect.getValue());



        HorizontalLayout IncCompareHeaderLayout = new HorizontalLayout(VerticalBarChartIncCoverHeader);
        HorizontalLayout comboBoxLayout = new HorizontalLayout(typeAnaliticsDataSelect, typeStatisticsComboBox);
        comboBoxLayout.setVerticalComponentAlignment(Alignment.START, typeStatisticsComboBox);
        setHorizontalComponentAlignment(Alignment.CENTER, comboBoxLayout);
        IncCompareHeaderLayout.setVerticalComponentAlignment(Alignment.END, VerticalBarChartIncCoverHeader);
        setHorizontalComponentAlignment(Alignment.CENTER, IncCompareHeaderLayout);
        IncComparelayout.add(IncCompareHeaderLayout, comboBoxLayout, donutChartIncCompare);
        return IncComparelayout;
    }

    @SneakyThrows
    private void renderChartsAnaliticsPrc(){

        if(!typeStatisticsComboBox.getValue().equals("Суммарно")) {
//            System.out.println("По ИТ услугам");
            IncComparelayout.remove(donutChartIncCompare, VerticalBarChartIncCompare);
            IncComparelayout.add(VerticalBarChartIncCompareInit(typeAnaliticsDataSelect.getValue()));
        }else {
//            System.out.println("Суммарно");
            IncComparelayout.remove(VerticalBarChartIncCompare, donutChartIncCompare);
            //Ниже функция инициализации BarChart вызывается для получения значений по каждой ИТ услуге
            // для прорисовки бублика (donutChart)при смене типа данных Аналитики (ПРОМ, ТЕСТ)
            VerticalBarChartIncCompareInit(typeAnaliticsDataSelect.getValue());
            //Инициализация бублика (donutChart) аналитики
            IncComparelayout.add(donutChartIncCompareInit(typeAnaliticsDataSelect.getValue()));
        };
    }

    private ApexCharts VerticalBarChartIncCompareInit(String typeDataAnalitic) {

        switch (typeDataAnalitic) {
            case ("Общая (ПРОМ + ТЕСТ)"):
//                System.out.println("Общая (ПРОМ + ТЕСТ)");
                incHandleSeriesDataBar = incHandleSeriesDataBarTotal;
                incAutoSeriesDataBar = incAutoSeriesDataBarTotal;
                break;
            case ("ПРОМ"):
//                System.out.println("ПРОМ");
                incHandleSeriesDataBar = incHandleSeriesDataBarProm;
                incAutoSeriesDataBar = incAutoSeriesDataBarProm;
                break;
            case ("ТЕСТ"):
//                System.out.println("ТЕСТ");
                incHandleSeriesDataBar = incHandleSeriesDataBarTest;
                incAutoSeriesDataBar = incAutoSeriesDataBarTest;
                break;
        }

        VerticalBarChartIncCompare = ApexChartsBuilder.get()
                .withChart(ChartBuilder.get()
                        .withType(Type.BAR)
                        .withStacked(true)
                        .withStackType(StackType.FULL)
                        .build())
                .withPlotOptions(PlotOptionsBuilder.get()
                        .withBar(BarBuilder.get()
                                .withHorizontal(false)
                                .withColumnWidth("55%")
                                .build())
                        .build())
                .withDataLabels(DataLabelsBuilder.get()
                        .withEnabled(true).build())
                .withStroke(StrokeBuilder.get()
                        .withLineCap(LineCap.BUTT)
                        .withCurve(Curve.SMOOTH)
                        .withShow(true)
                        .withWidth(2.0)
                        .withColors("transparent")
                        .build())
//                    .withSeries(
//                            // Столбцы продуктов ДСП
//                            new Series<>("Автоматические", incAutoSeriesDataBar.stream().toArray(Double[]::new)),
//                            new Series<>("Зар. вручную", incHandleSeriesDataBar.stream().toArray(Double[]::new)))
                .withYaxis(YAxisBuilder.get()
                        .withTitle(TitleBuilder.get()
                                .withText("%")
                                .build())
                        .build())
//                    .withXaxis(XAxisBuilder.get().withCategories(incLabelsDataBar.stream().toArray(String[]::new)).build())
                .withFill(FillBuilder.get()
                        .withOpacity(1.0).build())
                .withTooltip(TooltipBuilder.get()
                        .build())
                .build();
        VerticalBarChartIncCompare.setColors("#006400", "#FF0000");
        VerticalBarChartIncCompare.setMaxWidth("100%");
        VerticalBarChartIncCompare.setWidth("900px");
        VerticalBarChartIncCompare.setMaxHeight("100%");
        VerticalBarChartIncCompare.setHeight("550px");

        if (selectedAffectedItemList.contains("Все") || selectedAffectedItemList.isEmpty()) {
            // Столбцы продуктов ДСП
            VerticalBarChartIncCompare.setSeries(
                    new Series<>("Автоматические", incAutoSeriesDataBar.stream().toArray(Double[]::new)),
                    new Series<>("Зар. вручную", incHandleSeriesDataBar.stream().toArray(Double[]::new)));
            VerticalBarChartIncCompare.setXaxis(XAxisBuilder.get().withCategories(incLabelsDataBar.stream().toArray(String[]::new)).build());
        }
        else {
            // Столбцы продуктов ДСП
            VerticalBarChartIncCompare.setSeries(
                    new Series("Автоматические", selectedAffectedItemList.stream()
                            .map(e->incAutoSeriesDataBar.get(incLabelsDataBar.indexOf(e)))
                            .collect(Collectors.toList())
                            .toArray(Double[]::new)),
                    new Series<>("Зар. вручную", selectedAffectedItemList.stream()
                            .map(e->incHandleSeriesDataBar.get(incLabelsDataBar.indexOf(e)))
                            .collect(Collectors.toList())
                            .toArray(Double[]::new)));
            VerticalBarChartIncCompare.setXaxis(XAxisBuilder.get().withCategories(selectedAffectedItemList.stream().toArray(String[]::new)).build());
        }

        return VerticalBarChartIncCompare;
    }

    private ApexCharts donutChartIncCompareInit(String typeDataAnalitic){
//        String periodDate = start_Date.getValue().format(europeanDateFormatter) + " - " + end_Date.getValue().format(europeanDateFormatter);

        switch (typeDataAnalitic){
            case  ("Общая (ПРОМ + ТЕСТ)"):
//                System.out.println("Общая (ПРОМ + ТЕСТ)");
                incAutomaticDonutCount = incAutomaticCountDonutTotal;
                incHandleDonutCount = incHandleCountDonutTotal;

                break;

            case  ("ПРОМ"):
//                System.out.println("ПРОМ");
                incAutomaticDonutCount = incAutomaticCountDonutProm;
                incHandleDonutCount = incHandleCountDonutProm;
                break;

            case  ("ТЕСТ"):
//                System.out.println("ТЕСТ");
                incAutomaticDonutCount = incAutomaticCountDonutTest;
                incHandleDonutCount = incHandleCountDonutTest;
                break;
        }

        donutChartIncCompare = ApexChartsBuilder.get()
                .withChart(ChartBuilder.get().withType(Type.DONUT)
                        .withZoom(ZoomBuilder.get()
                                .withEnabled(true)
                                .withAutoScaleYaxis(true)
                                .build())
                        .withToolbar(ToolbarBuilder.get()
                                .withShow(true)
                                .withTools(new Tools())
                                .build())
//                        .withOffsetX(-100.0)
                        .withOffsetY(0.0) //-30 Это смешение вверх
                        .build())
//                    .withTitle(TitleSubtitleBuilder.get()
//                        .withText("Все ИТ услуги")
//                        .withAlign(Align.CENTER)
//                        .build())
                .withPlotOptions(PlotOptionsBuilder.get().withPie(PieBuilder.get()
                        .withDonut(DonutBuilder.get()
                                .withLabels(LabelsBuilder.get()
                                        .withShow(true)
                                        .withName(NameBuilder.get().withShow(true).build())
                                        .withTotal(TotalBuilder.get().withShow(true).withLabel("Всего")
                                                .withColor("#000000").build())
                                        .build())
                                .build())
                        .build())
                        .build())
                .withLegend(LegendBuilder.get()
                        .withPosition(Position.BOTTOM)
                        .withHorizontalAlign(HorizontalAlign.CENTER)
//                        .withHeight(10.0)
//                        .withFloating(true)
//                        .withFontSize("15")
//                        .withOffsetX(0.0)
                        .withOffsetY(5.0)
                        .build())
//                    .withSeries(new ArrayList<Double>(Arrays.asList(incAutomaticDonutCount, incHandleDonutCount)).stream()
//                            .toArray(Double[]::new))
//                    .withLabels(incLabelsDataDonut.stream().toArray(String[]::new))
                .withResponsive(ResponsiveBuilder.get()
                        .withBreakpoint(480.0)
                        .withOptions(OptionsBuilder.get()
                                .withLegend(LegendBuilder.get()
                                        .withPosition(Position.BOTTOM)
                                        .build())
                                .build())
                        .build())
                .build();

        donutChartIncCompare.setColors("#006400", "#FF0000");
        donutChartIncCompare.setMaxWidth("100%");
        donutChartIncCompare.setWidth("900px");
        donutChartIncCompare.setMaxHeight("100%");
        donutChartIncCompare.setHeight("550px");

        if (selectedAffectedItemList.contains("Все") || selectedAffectedItemList.isEmpty()) {
            donutChartIncCompare.setTitle(TitleSubtitleBuilder.get().withText("Все ИТ услуги").withAlign(Align.CENTER).build());
            donutChartIncCompare.setSeries(new ArrayList<Double>(Arrays.asList(incAutomaticDonutCount, incHandleDonutCount)).stream()
                    .toArray(Double[]::new));
            donutChartIncCompare.setLabels(incLabelsDataDonut.stream().toArray(String[]::new));
        }
        else {
            donutChartIncCompare.setTitle(TitleSubtitleBuilder.get().withText(selectedAffectedItemList.toString()).withAlign(Align.CENTER).build());
            donutChartIncCompare.setSeries(new ArrayList<Double>(Arrays.asList(selectedAffectedItemList.stream()
                            .map(e->incAutoSeriesDataBar.get(incLabelsDataBar.indexOf(e)))
                            .collect(Collectors.toList())
                            .stream()
                            .collect(Collectors.summingDouble(Double::doubleValue)),
                    selectedAffectedItemList.stream()
                            .map(e->incHandleSeriesDataBar.get(incLabelsDataBar.indexOf(e)))
                            .collect(Collectors.toList())
                            .stream()
                            .collect(Collectors.summingDouble(Double::doubleValue))))
                    .stream().toArray(Double[]::new));
            donutChartIncCompare.setLabels(incLabelsDataDonut.stream().toArray(String[]::new));
        }

        return donutChartIncCompare;
    }

    @SneakyThrows
    private void getIncPrcCountAnaliticsDataDonut(DatePicker start_Date, DatePicker end_Date) {
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";

        incLabelsDataDonut = new ArrayList<String>(Arrays.asList("Автоматические", "Зарег. вручную"));
        incAutomaticCountDonutTotal = incidentPrcCountRepo.findIncAutoCountDonutTotal(startDate, endDate);
        incHandleCountDonutTotal = incidentPrcCountRepo.findIncHandleCountDonutTotal(startDate, endDate);
        incAutomaticCountDonutProm = incidentPrcCountRepo.findIncAutoCountDonutProm(startDate, endDate);
        incHandleCountDonutProm = incidentPrcCountRepo.findIncHandleCountDonutProm(startDate, endDate);
        incAutomaticCountDonutTest = incidentPrcCountRepo.findIncAutoCountDonutTest(startDate, endDate);
        incHandleCountDonutTest = incidentPrcCountRepo.findIncHandleCountDonutTest(startDate, endDate);

    }

    @SneakyThrows
    private void getTotalCountIncAnaliticsData(DatePicker start_Date, DatePicker end_Date) {
        startDate = start_Date.getValue().format(europeanDateFormatter) + " 00:00:00";
        endDate = end_Date.getValue().format(europeanDateFormatter) + " 23:59:59";

        seriesDataDonut = incidentAffectedDataTotalCountRepo.findIncHandleByAffectedItemCount(startDate, endDate)
                .stream()
                .map(t -> t.getCount_Inc().doubleValue())
                .collect(Collectors.toList());

        labelsDataDonut = incidentAffectedDataTotalCountRepo.findIncHandleByAffectedItemCount(startDate, endDate)
                .stream()
                .map(t -> t.getAffected_Item())
                .collect(Collectors.toList());
    }


}




