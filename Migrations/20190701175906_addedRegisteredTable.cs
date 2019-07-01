using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class addedRegisteredTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RegisteredOpp",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    UserId = table.Column<int>(nullable: true),
                    VolunteerOppsId = table.Column<int>(nullable: true),
                    TimeSignedUp = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegisteredOpp", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RegisteredOpp_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RegisteredOpp_VolunteerOpp_VolunteerOppsId",
                        column: x => x.VolunteerOppsId,
                        principalTable: "VolunteerOpp",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RegisteredOpp_UserId",
                table: "RegisteredOpp",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_RegisteredOpp_VolunteerOppsId",
                table: "RegisteredOpp",
                column: "VolunteerOppsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RegisteredOpp");
        }
    }
}
