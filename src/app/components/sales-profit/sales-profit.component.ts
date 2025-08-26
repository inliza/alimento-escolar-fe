import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';

import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexAxisChartSeries,
    ApexPlotOptions,
    NgApexchartsModule,
    ApexFill,
    ApexGrid,
    ApexXAxis,
    ApexYAxis,
} from 'ng-apexcharts';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ConduceDesayunoService } from 'src/app/services/conduce.service';

export interface salesprofitChart {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    fill: ApexFill;
    grid: ApexGrid;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
}


interface month {
    value: string;
    viewValue: string;
}


@Component({
    selector: 'app-sales-profit',
    imports: [MaterialModule, TablerIconsModule, NgApexchartsModule, MatButtonModule, CommonModule],
    templateUrl: './sales-profit.component.html',
})
export class AppSalesProfitComponent implements OnInit {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public salesprofitChart!: Partial<salesprofitChart> | any;

    months: month[] = [
        { value: 'mar', viewValue: 'Sep 2025' },
        { value: 'apr', viewValue: 'Oct 2025' },
        { value: 'june', viewValue: 'Nov 2025' },
    ];
    constructor(private service: ConduceDesayunoService) {

    }

    ngOnInit(): void {
        this.getData();
    }



    getData() {
        this.service.getData().subscribe((data: any) => {

            const serieData = data.content.map((d: any) => ({
                x: this.toYYYYMMDD(new Date(d.fecha)),
                y: d.total
            }));

            this.salesprofitChart = {
                series: [
                    {
                        type: "area",
                        name: "This Year",
                        chart: {
                            foreColor: "#111c2d99",
                            fontSize: 12,
                            fontWeight: 500,
                            dropShadow: {
                                enabled: true,
                                enabledOnSeries: undefined,
                                top: 5,
                                left: 0,
                                blur: 3,
                                color: "#000",
                                opacity: 0.1,
                            },
                        },
                        data: serieData,
                    },

                ],
                chart: {
                    height: 320,
                    type: 'area',
                    fontFamily: "inherit",
                    foreColor: "#adb0bb",
                    fontSize: "12px",
                    offsetX: -15,
                    offsetY: 10,
                    animations: {
                        speed: 500,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: ["#00A1FF", "#8965E5"],
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    colors: undefined,
                    opacity: 0.1,
                    type: 'solid',
                },
                grid: {
                    show: true,
                    strokeDashArray: 3,
                    borderColor: "#90A4AE50",
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                xaxis: {
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    tickAmount: 3,
                },
                legend: {
                    show: false,
                },
                tooltip: {
                    theme: "dark",
                },
            };

            console.log(this.salesprofitChart);
        });
    }

    private toYYYYMMDD(d: Date): string {
        const pad = (n: number) => n.toString().padStart(2, '0');
        const y = d.getFullYear();
        const m = pad(d.getMonth() + 1);
        const day = pad(d.getDate());
        return `${y}-${m}-${day}`;
    }

}
