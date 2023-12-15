import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TablePaginationExample implements AfterViewInit {
  displayedColumns: string[] = [
    'QuoteType',
    'QuoteID',
    'QuoteName',
    'CFU',
    'CustomerName',
    'weight',
    'symbol',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  QuoteType: string;
  QuoteID: number;
  QuoteName: string;
  CFU: string;
  CustomerName: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    QuoteType: 'New',
    QuoteID: 1,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
  },
  {
    QuoteType: 'New',
    QuoteID: 2,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Helium',
    weight: 4.0026,
    symbol: 'He',
  },
  {
    QuoteType: 'New',
    QuoteID: 3,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
  },
  {
    QuoteType: 'New',
    QuoteID: 4,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
  },
  {
    QuoteType: 'New',
    QuoteID: 5,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Boron',
    weight: 10.811,
    symbol: 'B',
  },
  {
    QuoteType: 'New',
    QuoteID: 6,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
  },
  {
    QuoteType: 'New',
    QuoteID: 7,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
  },
  {
    QuoteType: 'New',
    QuoteID: 8,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
  },
  {
    QuoteType: 'New',
    QuoteID: 9,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
  },
  {
    QuoteType: 'New',
    QuoteID: 10,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
  },
  {
    QuoteType: 'New',
    QuoteID: 11,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Sodium',
    weight: 22.9897,
    symbol: 'Na',
  },
  {
    QuoteType: 'New',
    QuoteID: 12,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Magnesium',
    weight: 24.305,
    symbol: 'Mg',
  },
  {
    QuoteType: 'New',
    QuoteID: 13,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Aluminum',
    weight: 26.9815,
    symbol: 'Al',
  },
  {
    QuoteType: 'New',
    QuoteID: 14,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Silicon',
    weight: 28.0855,
    symbol: 'Si',
  },
  {
    QuoteType: 'New',
    QuoteID: 15,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Phosphorus',
    weight: 30.9738,
    symbol: 'P',
  },
  {
    QuoteType: 'New',
    QuoteID: 16,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Sulfur',
    weight: 32.065,
    symbol: 'S',
  },
  {
    QuoteType: 'New',
    QuoteID: 17,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Chlorine',
    weight: 35.453,
    symbol: 'Cl',
  },
  {
    QuoteType: 'New',
    QuoteID: 18,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Argon',
    weight: 39.948,
    symbol: 'Ar',
  },
  {
    QuoteType: 'New',
    QuoteID: 19,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Potassium',
    weight: 39.0983,
    symbol: 'K',
  },
  {
    QuoteType: 'New',
    QuoteID: 20,
    QuoteName: ' name1',
    CFU: 'OB',
    CustomerName: 'Calcium',
    weight: 40.078,
    symbol: 'Ca',
  },
];

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
