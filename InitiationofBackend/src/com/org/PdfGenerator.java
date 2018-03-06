package com.org;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;

import com.itextpdf.text.Anchor;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chapter;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.List;
import com.itextpdf.text.ListItem;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.Section;
import com.itextpdf.text.html.WebColors;
import com.itextpdf.text.pdf.CMYKColor;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;


public class PdfGenerator 
{
	

	/**
	 * @param args
	 * @throws DocumentException
	 * @throws IOException
	 * @throws MalformedURLException
	 */
	public static void main(String[] args) throws DocumentException,
			MalformedURLException, IOException {
		// TODO Auto-generated method stub

		// Listing 1. Instantiation of document object
		Document document = new Document(PageSize.A4, 50, 50, 50, 50);

		// Listing 2. Creation of PdfWriter object
		PdfWriter writer = PdfWriter.getInstance(document,
				new FileOutputStream("D:\\ITextTest1.pdf"));
		
		document.open();

		// Listing 3. Creation of paragraph object
		Anchor anchorTarget = new Anchor("First page of the document.");
		anchorTarget.setName("BackToTop");
		Paragraph paragraph1 = new Paragraph();

		paragraph1.setSpacingBefore(50);

		paragraph1.add(anchorTarget);
		document.add(paragraph1);

		document
				.add(new Paragraph(
						"Some more text on the first page with different color and font type.",
						FontFactory.getFont(FontFactory.COURIER, 14, Font.BOLD,
								new CMYKColor(0, 255, 0, 0))));

		// Listing 4. Creation of chapter object
		Paragraph title1 = new Paragraph("Chapter 1", FontFactory.getFont(
				FontFactory.HELVETICA, 18, Font.BOLDITALIC, new CMYKColor(0,
						255, 255, 17)));
		Chapter chapter1 = new Chapter(title1, 1);
		chapter1.setNumberDepth(0);

		// Listing 5. Creation of section object
		Paragraph title11 = new Paragraph("This is Section 1 in Chapter 1",
				FontFactory.getFont(FontFactory.HELVETICA, 16, Font.BOLD,
						new CMYKColor(0, 255, 255, 17)));
		Section section1 = chapter1.addSection(title11);
		Paragraph someSectionText = new Paragraph(
				"This text comes as part of section 1 of chapter 1.");
		section1.add(someSectionText);
		someSectionText = new Paragraph("Following is a 4 X 3 table.");
		section1.add(someSectionText);

		// Listing 6. Creation of table object
		PdfPTable t = new PdfPTable(4);
		
		
	
	//	t.setBackgroundColor(myColor);
	
		t.setSpacingBefore(25);
		t.setSpacingAfter(25);
		PdfPCell c1 = new PdfPCell(new Phrase("Name"));
		c1.setBackgroundColor(BaseColor.RED);
		t.addCell(c1);
		
		PdfPCell c2 = new PdfPCell(new Phrase("Company"));
		c2.setBackgroundColor(BaseColor.GREEN);
		t.addCell(c2);
		PdfPCell c3 = new PdfPCell(new Phrase("ID"));
		c3.setBackgroundColor(BaseColor.YELLOW);
		t.addCell(c3);
		PdfPCell c4 = new PdfPCell(new Phrase("Nature of Service"));
		c4.setBackgroundColor(BaseColor.ORANGE);
	
		t.addCell(c4);
		t.addCell("Anish");
		t.addCell("Intellect");
		t.addCell("QS4");
		t.addCell("Permanent");
		t.addCell("Kundan");
		t.addCell("Intellect");
		t.addCell("PS4");
		t.addCell("Permanent");
		t.addCell("Abhishek Goyal");
		t.addCell("Intellect");
		t.addCell("RS4");
		t.addCell("Permanent");
		section1.add(t);

		// Listing 7. Creation of list object
		List l = new List(true, false, 10);
		l.add(new ListItem("First item of list"));
		l.add(new ListItem("Second item of list"));
		section1.add(l);

		// Listing 8. Adding image to the main document

		Image image2 = Image.getInstance("IBMLogo.bmp");
		image2.scaleAbsolute(120f, 120f);
		section1.add(image2);

		// Listing 9. Adding Anchor to the main document.
		Paragraph title2 = new Paragraph("Using Anchor", FontFactory.getFont(
				FontFactory.HELVETICA, 16, Font.BOLD, new CMYKColor(0, 255, 0,
						0)));
		section1.add(title2);

		title2.setSpacingBefore(5000);
		Anchor anchor2 = new Anchor("Back To Top");
		anchor2.setReference("#BackToTop");

		section1.add(anchor2);


		// Listing 10. Addition of a chapter to the main document
		document.add(chapter1);
		document.close();

	}
}