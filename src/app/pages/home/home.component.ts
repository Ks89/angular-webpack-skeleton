/*
 * MIT License
 *
 * Copyright (c) 2017 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component } from '@angular/core';
import { PageHeader } from '../../shared/components/components';

import * as jsPDF from 'jspdf';
import * as jspdfAutotable from 'jspdf-autotable'

@Component({
  selector: 'mmw-home-page',
  styleUrls: ['home.scss'],
  templateUrl: 'home.html'
})
export class HomeComponent {
  pageHeader: PageHeader;
  message: string;

  constructor() {
    this.pageHeader = new PageHeader('KS', 'Welcome');
    this.message = 'Welcome to my website';
  }

  downloadJsPdf() {
    let doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Test.pdf');
  }

  // downloadJsPdfWithTablePlugin() {
  //   let columns = ["ID", "Name", "Country"];
  //   let rows = [
  //     [1, "Shaw", "Tanzania"],
  //     [2, "Nelson", "Kazakhstan"],
  //     [3, "Garcia", "Madagascar"]
  //   ];
  //
  //   var doc = new jsPDF('p', 'pt');
  //   doc.autoTable(columns, rows);
  //   doc.save("table.pdf");
  // }
}
