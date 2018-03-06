package com.org;

import java.io.FileInputStream;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import org.hsqldb.lib.Iterator;

import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
public class Excelreader


{
	public static void main(String args[]) throws BiffException, IOException
	{
		Excelreader DT = new Excelreader();
		DT.readExcel();
	}
	public static ArrayList<String> readExcel() throws BiffException, IOException {
	
	String FilePath = "D:\\employeinfo.xls";
	System.out.println("hi inside readexcel method");
	FileInputStream fs = new FileInputStream(FilePath);
	System.out.println("after file input stream");
	Workbook wb = Workbook.getWorkbook(fs);
	
	// TO get the access to the sheet
			Sheet sh = wb.getSheet("Sheet1");

			// To get the number of rows present in sheet
			int totalNoOfRows = sh.getRows();
			System.out.println(totalNoOfRows);
			
			// To get the number of columns present in sheet
			int totalNoOfCols = sh.getColumns();

			ArrayList<String> al = new ArrayList<String>();
			
			ArrayList<String> al2 =new ArrayList<String>();
			ArrayList<String> al3 =new ArrayList<String>();
			String s[]=new String[15];
			for (int row = 0; row < totalNoOfRows; row++) 
			{
				  Collections.addAll(al,s);
                      
				for (int col = 0; col < totalNoOfCols; col++)
				{
					ArrayList<String> al1 = new ArrayList<String>();
					System.out.print(sh.getCell(col, row).getContents()+ "\t");
					al1.add(sh.getCell(col, row).getContents());
					s[col] = sh.getCell(col, row).getContents();
					al2.addAll(al1);
					
				}
				
				 
				 System.out.println(row);
			
				
			}
			// System.out.println(al);
		/*	System.out.println(al1);
		java.util.Iterator<String> itr= al1.iterator();
			
			while(itr.hasNext())
			{
				
				System.out.println(itr.next());
				
			}*/
			
			
			 System.out.println(al2);
			return al2;
	}

}
