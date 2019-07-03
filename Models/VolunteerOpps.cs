
using System;

namespace Capstone_Final.Models.cs
{
  public class VolunteerOpps
  {
    public int Id { get; set; }
    public string SchoolName { get; set; }
    public string SchoolAddress { get; set; }
    public string ZipCode { get; set; }
    public string Department { get; set; }
    public string TimeSlot { get; set; }
    public DateTime Date { get; set; }
    public string SchoolDistrict { get; set; }
    public int PeopleNeeded { get; set; }
    public string ShortDescription { get; set; }
    public string LongDescription { get; set; }
  }
}