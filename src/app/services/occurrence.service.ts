import { Paginator } from './../models/paginator.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Occurrence } from '../models/occurrence.model';
import { OccurrenceTypes } from '../models/occurrenceTypes.models';
import { OccurrenceByPeriod } from '../models/occurrenceByPeriod.model';
import { OccurrenceByPeriod2 } from '../models/occurrenceByPeriod2.model';
import { Observable, from } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { OccurrenceFilter } from '../models/occurrenceFilter.model';
import { OccurrenceCoordinates } from '../components/map/occurrence.coordinates';

@Injectable()
export class OccurrenceService {
    constructor(private http: HttpClient) { }

    public registerOccurrence(occurrence: Occurrence) {
        return this.http.post(`${environment.API_URL}/api/occurrence-reports`, occurrence);
    }
    public getOccurrences() {
        return this.http.get(`${environment.API_URL}/api/occurrence-reports`);
    }

    public getOccurrencesType() {
        return this.http.get(`${environment.API_URL}/api/occurrence-types`);
    }

    public getOccurrencesID(id: number) {
        return this.http.get(`${environment.API_URL}/api/occurrence-reports/${id}`);
    }

    public getOccurrencesPage(paginator: Paginator) {
        return this.http.get(`${environment.API_URL}/api/occurrence-reports?page=${paginator.current_page}`);
    }

    public statusOccurrences(id: number, status: string) {
        return this.http.put(`${environment.API_URL}/api/occurrence-reports/${id}?status=${status}`, status);
    }

    public editarOccurrences(occurrence: Occurrence, id: number) {
        return this.http.put(`${environment.API_URL}/api/occurrence-reports/${id}`, occurrence);
    }
    public getZones() {
        return this.http.get(`${environment.API_URL}/api/zones?limit=9999`);
    }
    public occurrenceisChartFilter(occurrenceFilter: OccurrenceFilter) {
        if (occurrenceFilter.month == null && occurrenceFilter.occurrenceTypesId == null) {
            if (occurrenceFilter.year == null) {
                occurrenceFilter.year = 2019;
            }

            return this.http.get(`${environment.API_URL}/api/occurrence-reports/getAllOfTheYear?year=${occurrenceFilter.year}`);
        }
        else if (occurrenceFilter.month != null && occurrenceFilter.occurrenceTypesId == null) {
            if (occurrenceFilter.year == null) {
                occurrenceFilter.year = 2019;
            }

            return this.http.get(`${environment.API_URL}/api/occurrence-reports/getAllOfTheYear?year=${occurrenceFilter.year}&month=${occurrenceFilter.month}`);
        
        } else if (occurrenceFilter.month != null && occurrenceFilter.occurrenceTypesId != null) {
            if (occurrenceFilter.year == null) {
                occurrenceFilter.year = 2019;
            }
            return this.http.get(`${environment.API_URL}/api/occurrence-reports/getAllOfTheYear?year=${occurrenceFilter.year}&month=${occurrenceFilter.month}&idOccurrenceType=${occurrenceFilter.occurrenceTypesId}`);
        }
    }
    public listOccurrenceOfAYearAgo(){
        return this.http.get<OccurrenceCoordinates>(`${environment.API_URL}/api/occurrence-reports/listOccurrenceOfAYearAgo`)
    }

    public countOccurrenceOfEachType(occurrenceByPeriod: OccurrenceByPeriod){
        return this.http.get(`${environment.API_URL}/api/occurrence-reports/countOccurrenceOfEachType?date_start=${occurrenceByPeriod.date_start}&date_end=${occurrenceByPeriod.date_end}`)
    }

    public countOccurrenceOfEachType2( occurrenceByPeriod2: OccurrenceByPeriod2){
        return this.http.get(`${environment.API_URL}/api/occurrence-reports/countOccurrenceOfEachType?date_start=${occurrenceByPeriod2.date_start2}&date_end=${occurrenceByPeriod2.date_end2}`)
    }
}
