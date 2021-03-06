﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using capstone_final;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20190701174653_addedMigrationsTableForRealz")]
    partial class addedMigrationsTableForRealz
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Capstone_Final.Models.cs.VolunteerOpps", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<string>("Department");

                    b.Property<int>("PeopleNeeded");

                    b.Property<string>("SchoolAddress");

                    b.Property<string>("SchoolDistrict");

                    b.Property<string>("SchoolName");

                    b.Property<string>("TimeSlot");

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

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
#pragma warning restore 612, 618
        }
    }
}
