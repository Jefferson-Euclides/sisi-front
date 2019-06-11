import { Paginator } from './../models/paginator.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Irregularity } from '../models/irregularity.model';
import { IrregularityFilter } from '../models/irregularityFilter.model';
import { IrregularityByPeriod } from '../models/irregularityByPeriod.model';
import { IrregularityByPeriod2 } from '../models/irregularityByPeriod2.model';
import { IrregularityMonthYear } from '../models/irregularityMonthYearFilter.model';
import { IrregularityType } from '../components/form-irregularity/irregularitytype.model';

@Injectable()
export class IrregularityService {
    constructor(private http: HttpClient) { }

    registerIrregularity(irregularity: Irregularity) {
        return this.http.post(`${environment.API_URL}/api/irregularity-reports`, irregularity);
    }
    public getIrregularities() {
        return this.http.get(`${environment.API_URL}/api/irregularity-reports`);
    }

    public getIrregularitiesType() {
        return this.http.get(`${environment.API_URL}/api/irregularity-types`);
    }

    public getIrregularitiesPage(paginator: Paginator) {
      return this.http.get(`${environment.API_URL}/api/irregularity-reports?page=${paginator.current_page}`);
    }

    public getIrregularitiesID(id: number) {
        return this.http.get(`${environment.API_URL}/api/irregularity-reports/${id}`);
    }

    public statusOccurrences(id: number, status: string) {
        return this.http.put(`${environment.API_URL}/api/irregularity-reports/${id}?status=${status}`, status);
    }

    public editarIrregularities(irregularity: Irregularity, id: number) {
        return this.http.put(`${environment.API_URL}/api/irregularity-reports/${id}`, irregularity);
    }

    public irregularitiesChartFilter(irregularityFilter: IrregularityFilter) {
        if (irregularityFilter.irregularityTypesId == null) {
            if (irregularityFilter.year == null) {
                irregularityFilter.year = 2019;
            }

            return this.http.get(`${environment.API_URL}/api/irregularity-reports/getAllOfTheYear?year=${irregularityFilter.year}`);
        }
        else if (irregularityFilter.irregularityTypesId != null) {
            if (irregularityFilter.year == null) {
                irregularityFilter.year = 2019;
            }
            return this.http.get(`${environment.API_URL}/api/irregularity-reports/getAllOfTheYear?year=${irregularityFilter.year}&idIrregularityType=${irregularityFilter.irregularityTypesId}`);
        }
    }

    public countIrregularityOfEachType(irregularityByPeriod: IrregularityByPeriod){
        return this.http.get(`${environment.API_URL}/api/irregularity-reports/countIrregularityOfOneType?irregularity_id=${irregularityByPeriod.irregularityTypes}&date_start=${irregularityByPeriod.date_start}&date_end=${irregularityByPeriod.date_end}`)
    }

    public countIrregularityOfEachType2( irregularityByPeriod2: IrregularityByPeriod2, irregularityByPeriod: IrregularityByPeriod){
        return this.http.get(`${environment.API_URL}/api/irregularity-reports/countIrregularityOfOneType?irregularity_id=${irregularityByPeriod.irregularityTypes}&date_start=${irregularityByPeriod2.date_start2}&date_end=${irregularityByPeriod2.date_end2}`)
    }

    public irregularitiesMonthYearFilter(irregularityMonthYear: IrregularityMonthYear) {
        if (irregularityMonthYear.month == null && irregularityMonthYear == null) {
            if (irregularityMonthYear.year == null) {
                irregularityMonthYear.year = 2019;
                irregularityMonthYear.month = 1;
            }
        }
        return this.http.get(`${environment.API_URL}/api/irregularity-reports/countAllIrregularityOfMonthOfTheYear?year=${irregularityMonthYear.year}&month=${irregularityMonthYear.month}`);
    }

    public listAllIrregularityType(){
        return this.http.get<IrregularityType[]>(`${environment.API_URL}/api/irregularity-types/listAll`)
    }
}
