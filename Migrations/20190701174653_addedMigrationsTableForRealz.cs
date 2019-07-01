using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class addedMigrationsTableForRealz : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VolunteerOpp",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    SchoolName = table.Column<string>(nullable: true),
                    SchoolAddress = table.Column<string>(nullable: true),
                    ZipCode = table.Column<string>(nullable: true),
                    Department = table.Column<string>(nullable: true),
                    TimeSlot = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    SchoolDistrict = table.Column<string>(nullable: true),
                    PeopleNeeded = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VolunteerOpp", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VolunteerOpp");
        }
    }
}
