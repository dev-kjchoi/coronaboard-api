const { DataTypes } = require("sequelize"); // 시퀄라이즈 불러오기

module.exports = (sequelize) => {
  return sequelize.define(
    // 매개변수 1 : 모델 이름
    "GlobalStat",
    // 매개변수 2 : 속성 목록
    {
      // ID
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      // 국가 코드(country code)
      cc: {
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      // 날짜
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      // 확진자 수
      confirmed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // 사망자 수
      death: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 완치자 수
      released: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 총 검사자 수
      tested: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 검사중 수
      testing: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 결과 음성 수
      negative: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    // 매개변수 3 : 추가 옵션
    {
      sequelize, // 시퀄라이즈 인스턴스
      tableName: "GlobalStat", // 데이터베이스에서 테이블의 이름
      // 테이블 인덱스
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          fields: [{ name: "id" }],
        },
        {
          name: "ccWithDate",
          unique: true,
          fileds: [{ name: "cc" }, { name: "date" }],
        },
      ],
      timestamps: false, // 타임스탬프 속성 자동 생성 X
    }
  );
};
