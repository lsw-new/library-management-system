#!/usr/bin/env dotnet-script
#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using WpPageSize = DocumentFormat.OpenXml.Wordprocessing.PageSize;

var outputPath = @"C:\Users\34352\Desktop\图书馆管理系统_软件设计说明书.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
var body = mainPart.Document.Body!;

// ============================================================
// STYLES PART
// ============================================================
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles;

// DocDefaults - CJK optimized
styles.Append(new DocDefaults(
    new RunPropertiesDefault(
        new RunPropertiesBaseStyle(
            new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "宋体", ComplexScript = "Times New Roman" },
            new FontSize { Val = "24" },  // 小四 = 12pt 正文
            new FontSizeComplexScript { Val = "24" },
            new Color { Val = "000000" },
            new Languages { Val = "en-US", EastAsia = "zh-CN" }
        )
    ),
    new ParagraphPropertiesDefault(
        new ParagraphPropertiesBaseStyle(
            new SpacingBetweenLines { Line = "360", LineRule = LineSpacingRuleValues.Auto, After = "0" }
        )
    )
));

// Helper: Create paragraph style
Style MakeParaStyle(string id, string name, bool isDefault = false, int priority = 0, string basedOn = null, string nextStyle = null)
{
    var s = new Style { Type = StyleValues.Paragraph, StyleId = id, Default = isDefault ? OnOffOnlyValues.On : null };
    s.Append(new StyleName { Val = name });
    if (priority > 0) s.Append(new UIPriority { Val = priority });
    if (basedOn != null) s.Append(new BasedOn { Val = basedOn });
    if (nextStyle != null) s.Append(new NextParagraphStyle { Val = nextStyle });
    return s;
}

void AddStyleParaPr(Style s, Action<StyleParagraphProperties> configure)
{
    var ppr = new StyleParagraphProperties();
    configure(ppr);
    s.Append(ppr);
}

void AddStyleRunPr(Style s, Action<StyleRunProperties> configure)
{
    var rpr = new StyleRunProperties();
    configure(rpr);
    s.Append(rpr);
}

// Normal style
var normalStyle = MakeParaStyle("Normal", "Normal", true, 0);
AddStyleRunPr(normalStyle, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "宋体" });
    r.Append(new FontSize { Val = "24" });
    r.Append(new FontSizeComplexScript { Val = "24" });
});
AddStyleParaPr(normalStyle, p => {
    p.Append(new SpacingBetweenLines { Line = "360", LineRule = LineSpacingRuleValues.Auto, After = "0" });
    p.Append(new Justification { Val = JustificationValues.Both });
});
styles.Append(normalStyle);

// Title style - 小二黑体居中
var titleStyle = MakeParaStyle("Title", "Title", false, 10);
AddStyleRunPr(titleStyle, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "黑体" });
    r.Append(new FontSize { Val = "36" });  // 小二 = 18pt
    r.Append(new FontSizeComplexScript { Val = "36" });
    r.Append(new Bold());
});
AddStyleParaPr(titleStyle, p => {
    p.Append(new Justification { Val = JustificationValues.Center });
    p.Append(new SpacingBetweenLines { Line = "480", LineRule = LineSpacingRuleValues.Auto, Before = "240", After = "240" });
});
styles.Append(titleStyle);

// Subtitle style
var subtitleStyle = MakeParaStyle("Subtitle", "Subtitle", false, 11);
AddStyleRunPr(subtitleStyle, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "楷体" });
    r.Append(new FontSize { Val = "28" });  // 四号 = 14pt
    r.Append(new FontSizeComplexScript { Val = "28" });
});
AddStyleParaPr(subtitleStyle, p => {
    p.Append(new Justification { Val = JustificationValues.Center });
    p.Append(new SpacingBetweenLines { Line = "400", LineRule = LineSpacingRuleValues.Auto, Before = "120", After = "360" });
});
styles.Append(subtitleStyle);

// Heading1 - 三号黑体加粗
var h1Style = MakeParaStyle("Heading1", "heading 1", false, 9);
AddStyleRunPr(h1Style, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "黑体" });
    r.Append(new FontSize { Val = "32" });  // 三号 = 16pt
    r.Append(new FontSizeComplexScript { Val = "32" });
    r.Append(new Bold());
});
AddStyleParaPr(h1Style, p => {
    p.Append(new KeepNext());
    p.Append(new KeepLines());
    p.Append(new SpacingBetweenLines { Line = "400", LineRule = LineSpacingRuleValues.Auto, Before = "360", After = "200" });
    p.Append(new Justification { Val = JustificationValues.Center });
    p.Append(new OutlineLevel { Val = 0 });
});
styles.Append(h1Style);

// Heading2 - 四号黑体
var h2Style = MakeParaStyle("Heading2", "heading 2", false, 9, "Normal", "Normal");
AddStyleRunPr(h2Style, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "黑体" });
    r.Append(new FontSize { Val = "28" });  // 四号 = 14pt
    r.Append(new FontSizeComplexScript { Val = "28" });
    r.Append(new Bold());
});
AddStyleParaPr(h2Style, p => {
    p.Append(new KeepNext());
    p.Append(new KeepLines());
    p.Append(new SpacingBetweenLines { Line = "360", LineRule = LineSpacingRuleValues.Auto, Before = "240", After = "120" });
    p.Append(new Justification { Val = JustificationValues.Left });
    p.Append(new OutlineLevel { Val = 1 });
});
styles.Append(h2Style);

// Heading3 - 小四宋体加粗
var h3Style = MakeParaStyle("Heading3", "heading 3", false, 9, "Normal", "Normal");
AddStyleRunPr(h3Style, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "宋体" });
    r.Append(new FontSize { Val = "24" });  // 小四 = 12pt
    r.Append(new FontSizeComplexScript { Val = "24" });
    r.Append(new Bold());
});
AddStyleParaPr(h3Style, p => {
    p.Append(new KeepNext());
    p.Append(new KeepLines());
    p.Append(new SpacingBetweenLines { Line = "360", LineRule = LineSpacingRuleValues.Auto, Before = "160", After = "80" });
    p.Append(new Indentation { Left = "480" });
    p.Append(new Justification { Val = JustificationValues.Left });
    p.Append(new OutlineLevel { Val = 2 });
});
styles.Append(h3Style);

// Heading4 - 小四楷体
var h4Style = MakeParaStyle("Heading4", "heading 4", false, 9, "Normal", "Normal");
AddStyleRunPr(h4Style, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "楷体" });
    r.Append(new FontSize { Val = "24" });
    r.Append(new FontSizeComplexScript { Val = "24" });
    r.Append(new Bold());
});
AddStyleParaPr(h4Style, p => {
    p.Append(new KeepNext());
    p.Append(new KeepLines());
    p.Append(new SpacingBetweenLines { Line = "360", LineRule = LineSpacingRuleValues.Auto, Before = "120", After = "60" });
    p.Append(new Indentation { Left = "960" });
    p.Append(new Justification { Val = JustificationValues.Left });
    p.Append(new OutlineLevel { Val = 3 });
});
styles.Append(h4Style);

// TOC Heading
var tocHeadingStyle = MakeParaStyle("TOCHeading", "TOC Heading", false, 9);
AddStyleRunPr(tocHeadingStyle, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "黑体" });
    r.Append(new FontSize { Val = "32" });
    r.Append(new FontSizeComplexScript { Val = "32" });
    r.Append(new Bold());
});
AddStyleParaPr(tocHeadingStyle, p => {
    p.Append(new Justification { Val = JustificationValues.Center });
    p.Append(new SpacingBetweenLines { Line = "400", LineRule = LineSpacingRuleValues.Auto, Before = "360", After = "200" });
    p.Append(new OutlineLevel { Val = 9 });
});
styles.Append(tocHeadingStyle);

// TOC1 style
var toc1Style = MakeParaStyle("TOC1", "TOC 1", false, 9);
AddStyleRunPr(toc1Style, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "宋体" });
    r.Append(new FontSize { Val = "24" });
    r.Append(new FontSizeComplexScript { Val = "24" });
});
AddStyleParaPr(toc1Style, p => {
    p.Append(new SpacingBetweenLines { Line = "320", LineRule = LineSpacingRuleValues.Auto, Before = "60", After = "40" });
    p.Append(new Tabs(new TabStop { Val = TabStopValues.Right, Leader = LeaderCharValues.Dot, Position = 8510 }));
});
styles.Append(toc1Style);

// TOC2 style
var toc2Style = MakeParaStyle("TOC2", "TOC 2", false, 9);
AddStyleRunPr(toc2Style, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "宋体" });
    r.Append(new FontSize { Val = "24" });
    r.Append(new FontSizeComplexScript { Val = "24" });
});
AddStyleParaPr(toc2Style, p => {
    p.Append(new SpacingBetweenLines { Line = "300", LineRule = LineSpacingRuleValues.Auto, Before = "20", After = "20" });
    p.Append(new Indentation { Left = "480" });
    p.Append(new Tabs(new TabStop { Val = TabStopValues.Right, Leader = LeaderCharValues.Dot, Position = 8510 }));
});
styles.Append(toc2Style);

// TOC3 style
var toc3Style = MakeParaStyle("TOC3", "TOC 3", false, 9);
AddStyleRunPr(toc3Style, r => {
    r.Append(new RunFonts { Ascii = "Times New Roman", HighAnsi = "Times New Roman", EastAsia = "宋体" });
    r.Append(new FontSize { Val = "21" });  // 五号
    r.Append(new FontSizeComplexScript { Val = "21" });
});
AddStyleParaPr(toc3Style, p => {
    p.Append(new SpacingBetweenLines { Line = "280", LineRule = LineSpacingRuleValues.Auto, Before = "0", After = "0" });
    p.Append(new Indentation { Left = "960" });
    p.Append(new Tabs(new TabStop { Val = TabStopValues.Right, Leader = LeaderCharValues.Dot, Position = 8510 }));
});
styles.Append(toc3Style);

stylesPart.Styles.Save();

// ============================================================
// SETTINGS PART
// ============================================================
var settingsPart = mainPart.AddNewPart<DocumentSettingsPart>();
settingsPart.Settings = new Settings(
    new Compatibility(
        new CompatibilitySetting { Name = CompatSettingNameValues.CompatibilityMode, Uri = "http://schemas.microsoft.com/office/word", Val = "15" }
    ),
    new DefaultTabStop { Val = 720 }
);
settingsPart.Settings.Save();

Console.WriteLine("Styles and settings created.");

// ============================================================
// HELPER FUNCTIONS
// ============================================================

Paragraph MakeHeading(string text, string styleId)
{
    var p = new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = styleId }),
        new Run(new Text(text) { Space = SpaceProcessingModeValues.Preserve })
    );
    return p;
}

Paragraph MakePara(string text, bool indent = true)
{
    var ppr = new ParagraphProperties(new ParagraphStyleId { Val = "Normal" });
    if (indent)
    {
        ppr.Append(new Indentation { FirstLineChars = 200 });
    }
    var p = new Paragraph(ppr, new Run(new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Paragraph MakeEmptyLine()
{
    return new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Normal" }));
}

// Table helper
Table MakeTable(string[] headers, string[][] rows, int[] colWidths = null)
{
    var table = new Table();
    var tblPr = new TableProperties(
        new TableStyle { Val = "TableGrid" },
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ),
        new TableLook { Val = "04A0" }
    );
    table.Append(tblPr);

    // Grid
    var tblGrid = new TableGrid();
    if (colWidths != null)
        foreach (var w in colWidths) tblGrid.Append(new GridColumn { Width = w.ToString() });
    else
        for (int i = 0; i < headers.Length; i++) tblGrid.Append(new GridColumn { Width = (8510 / headers.Length).ToString() });
    table.Append(tblGrid);

    // Header row
    var headerRow = new TableRow();
    foreach (var h in headers)
    {
        var tc = new TableCell(
            new TableCellProperties(
                new Shading { Val = ShadingPatternValues.Clear, Fill = "D9E2F3" },
                new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
            ),
            new Paragraph(
                new ParagraphProperties(
                    new Justification { Val = JustificationValues.Center },
                    new SpacingBetweenLines { Before = "40", After = "40", Line = "280", LineRule = LineSpacingRuleValues.Auto }
                ),
                new Run(
                    new RunProperties(new Bold(), new RunFonts { EastAsia = "宋体", Ascii = "Times New Roman", HighAnsi = "Times New Roman" }, new FontSize { Val = "21" }),
                    new Text(h) { Space = SpaceProcessingModeValues.Preserve }
                )
            )
        );
        headerRow.Append(tc);
    }
    table.Append(headerRow);

    // Data rows
    foreach (var row in rows)
    {
        var tr = new TableRow();
        for (int i = 0; i < headers.Length; i++)
        {
            var val = i < row.Length ? row[i] : "";
            var tc = new TableCell(
                new TableCellProperties(
                    new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
                ),
                new Paragraph(
                    new ParagraphProperties(
                        new Justification { Val = JustificationValues.Center },
                        new SpacingBetweenLines { Before = "30", After = "30", Line = "280", LineRule = LineSpacingRuleValues.Auto }
                    ),
                    new Run(
                        new RunProperties(new RunFonts { EastAsia = "宋体", Ascii = "Times New Roman", HighAnsi = "Times New Roman" }, new FontSize { Val = "21" }),
                        new Text(val) { Space = SpaceProcessingModeValues.Preserve }
                    )
                )
            );
            tr.Append(tc);
        }
        table.Append(tr);
    }
    return table;
}

void AddPageBreak()
{
    body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "Normal" }),
        new Run(new Break { Type = BreakValues.Page })
    ));
}

Console.WriteLine("Helper functions defined. Building content...");

// ============================================================
// COVER PAGE
// ============================================================

body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "2400", After = "0" })));

// Title
body.Append(MakeHeading("图书馆管理系统", "Title"));
body.Append(MakeHeading("软件设计说明书", "Title"));

// Separator line
body.Append(new Paragraph(
    new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "240", After = "480" }),
    new Run(
        new RunProperties(new FontSize { Val = "28" }, new Color { Val = "333333" }),
        new Text("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━") { Space = SpaceProcessingModeValues.Preserve }
    )
));

// Document info
string[] coverInfo = new string[] {
    "文件编号：LIB-DESIGN-2026-001",
    "文件版本：V1.0",
    "编制单位：景德镇艺术职业大学图书馆",
    "编制日期：2026年5月",
    "保密级别：内部资料"
};
foreach (var info in coverInfo)
{
    body.Append(new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "60", After = "60", Line = "360", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(
            new RunProperties(new RunFonts { EastAsia = "楷体", Ascii = "Times New Roman" }, new FontSize { Val = "28" }, new Color { Val = "333333" }),
            new Text(info) { Space = SpaceProcessingModeValues.Preserve }
        )
    ));
}

AddPageBreak();

Console.WriteLine("Cover page created.");

// ============================================================
// TOC PAGE
// ============================================================

body.Append(MakeHeading("目    录", "TOCHeading"));

// Insert TOC field
body.Append(new Paragraph(
    new ParagraphProperties(new ParagraphStyleId { Val = "TOCHeading" }),
    new Run(new FieldChar { FieldCharType = FieldCharValues.Begin }),
    new Run(new FieldCode(" TOC \\o \"1-4\" \\h \\z \\u ") { Space = SpaceProcessingModeValues.Preserve }),
    new Run(new FieldChar { FieldCharType = FieldCharValues.Separate }),
    new Run(new Text("请在Word中右键点击此处，选择"更新域"生成目录") { Space = SpaceProcessingModeValues.Preserve }),
    new Run(new FieldChar { FieldCharType = FieldCharValues.End })
));

AddPageBreak();

Console.WriteLine("TOC page created.");
