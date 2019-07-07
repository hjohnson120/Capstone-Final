using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedFKToUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "VolunteerOpp",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_VolunteerOpp_UserId",
                table: "VolunteerOpp",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_VolunteerOpp_Users_UserId",
                table: "VolunteerOpp",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VolunteerOpp_Users_UserId",
                table: "VolunteerOpp");

            migrationBuilder.DropIndex(
                name: "IX_VolunteerOpp_UserId",
                table: "VolunteerOpp");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "VolunteerOpp");
        }
    }
}
