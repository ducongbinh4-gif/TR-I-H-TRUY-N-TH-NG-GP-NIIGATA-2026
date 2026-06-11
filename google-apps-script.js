const SHEET_NAME = "Danh sách đăng ký";

function doGet(e) {
  return ContentService.createTextOutput("WEB APP OK");
}

function doPost(e) {
  const sheet = getSheet();
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.hoVaTen || "",
    data.tenThuongGoi || "",
    data.tuoi || "",
    data.giaoXu || "",
    data.soDienThoai || "",
    data.facebook || "",
    data.chiPhi || "5000円",
    data.diChuyen || "",
    data.soluongnguoi || "",
    data.nguoidaidien || ""
  ]);

  return ContentService.createTextOutput("OK");
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Thời gian đăng ký",
      "Họ và tên",
      "Tên thường gọi",
      "Tuổi",
      "Giáo xứ",
      "Số điện thoại",
      "Facebook",
      "Chi phí",
      "Xác nhận di chuyển",
     "số lượng người tham gia",
      "người đại diện"
    ]);
  }

  return sheet;
}
