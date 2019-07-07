﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using capstone_final;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Capstone_Final.Models.RegisteredOpps", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("TimeSignedUp");

                    b.Property<int?>("UserId");

                    b.Property<int?>("VolunteerOppsId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.HasIndex("VolunteerOppsId");

                    b.ToTable("RegisteredOpp");
                });

            modelBuilder.Entity("Capstone_Final.Models.cs.VolunteerOpps", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<string>("Department");

                    b.Property<string>("LongDescription");

                    b.Property<int>("PeopleNeeded");

                    b.Property<string>("SchoolAddress");

                    b.Property<string>("SchoolDistrict");

                    b.Property<string>("SchoolName");

                    b.Property<string>("ShortDescription");

                    b.Property<string>("TimeSlot");

                    b.Property<int?>("UserId");

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("VolunteerOpp");
                });

            modelBuilder.Entity("capstone_final.Models.cs.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EMail");

                    b.Property<string>("FullName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Capstone_Final.Models.RegisteredOpps", b =>
                {
                    b.HasOne("capstone_final.Models.cs.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.HasOne("Capstone_Final.Models.cs.VolunteerOpps", "VolunteerOpps")
                        .WithMany()
                        .HasForeignKey("VolunteerOppsId");
                });

            modelBuilder.Entity("Capstone_Final.Models.cs.VolunteerOpps", b =>
                {
                    b.HasOne("capstone_final.Models.cs.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
