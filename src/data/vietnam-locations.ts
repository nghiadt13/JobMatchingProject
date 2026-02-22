export interface District {
  name: string;
  code: string;
}

export interface City {
  name: string;
  code: string;
  districts: District[];
}

export const vietnamLocations: City[] = [
  {
    name: "Hà Nội",
    code: "HN",
    districts: [
      { name: "Ba Đình", code: "BD" },
      { name: "Hoàn Kiếm", code: "HK" },
      { name: "Tây Hồ", code: "TH" },
      { name: "Long Biên", code: "LB" },
      { name: "Cầu Giấy", code: "CG" },
      { name: "Đống Đa", code: "DD" },
      { name: "Hai Bà Trưng", code: "HBT" },
      { name: "Hoàng Mai", code: "HM" },
      { name: "Thanh Xuân", code: "TX" },
      { name: "Nam Từ Liêm", code: "NTL" },
      { name: "Bắc Từ Liêm", code: "BTL" },
      { name: "Hà Đông", code: "HD" },
    ],
  },
  {
    name: "Hồ Chí Minh",
    code: "HCM",
    districts: [
      { name: "Quận 1", code: "Q1" },
      { name: "Quận 2", code: "Q2" },
      { name: "Quận 3", code: "Q3" },
      { name: "Quận 4", code: "Q4" },
      { name: "Quận 5", code: "Q5" },
      { name: "Quận 6", code: "Q6" },
      { name: "Quận 7", code: "Q7" },
      { name: "Quận 8", code: "Q8" },
      { name: "Quận 9", code: "Q9" },
      { name: "Quận 10", code: "Q10" },
      { name: "Quận 11", code: "Q11" },
      { name: "Quận 12", code: "Q12" },
      { name: "Bình Thạnh", code: "BT" },
      { name: "Gò Vấp", code: "GV" },
      { name: "Phú Nhuận", code: "PN" },
      { name: "Tân Bình", code: "TB" },
      { name: "Tân Phú", code: "TP" },
      { name: "Thủ Đức", code: "TD" },
    ],
  },
  {
    name: "Đà Nẵng",
    code: "DN",
    districts: [
      { name: "Hải Châu", code: "HC" },
      { name: "Thanh Khê", code: "TK" },
      { name: "Sơn Trà", code: "ST" },
      { name: "Ngũ Hành Sơn", code: "NHS" },
      { name: "Liên Chiểu", code: "LC" },
      { name: "Cẩm Lệ", code: "CL" },
    ],
  },
  {
    name: "Hải Phòng",
    code: "HP",
    districts: [
      { name: "Hồng Bàng", code: "HB" },
      { name: "Ngô Quyền", code: "NQ" },
      { name: "Lê Chân", code: "LC" },
      { name: "Hải An", code: "HA" },
      { name: "Kiến An", code: "KA" },
      { name: "Đồ Sơn", code: "DS" },
      { name: "Dương Kinh", code: "DK" },
    ],
  },
  {
    name: "Cần Thơ",
    code: "CT",
    districts: [
      { name: "Ninh Kiều", code: "NK" },
      { name: "Ô Môn", code: "OM" },
      { name: "Bình Thuỷ", code: "BT" },
      { name: "Cái Răng", code: "CR" },
      { name: "Thốt Nốt", code: "TN" },
    ],
  },
  {
    name: "Bình Dương",
    code: "BD",
    districts: [
      { name: "Thủ Dầu Một", code: "TDM" },
      { name: "Dĩ An", code: "DA" },
      { name: "Thuận An", code: "TA" },
      { name: "Tân Uyên", code: "TU" },
      { name: "Bến Cát", code: "BC" },
    ],
  },
  {
    name: "Đồng Nai",
    code: "DNI",
    districts: [
      { name: "Biên Hòa", code: "BH" },
      { name: "Long Khánh", code: "LK" },
      { name: "Nhơn Trạch", code: "NT" },
      { name: "Trảng Bom", code: "TB" },
      { name: "Thống Nhất", code: "TN" },
    ],
  },
  {
    name: "Khánh Hòa",
    code: "KH",
    districts: [
      { name: "Nha Trang", code: "NT" },
      { name: "Cam Ranh", code: "CR" },
      { name: "Ninh Hòa", code: "NH" },
      { name: "Vạn Ninh", code: "VN" },
    ],
  },
];
