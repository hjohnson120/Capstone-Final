using System;
using capstone_final.Models.cs;
using Capstone_Final.Models.cs;

namespace Capstone_Final.Models
{
  public class RegisteredOpps
  {
    public int Id { get; set; }

    public int? UserId { get; set; }
    public User User { get; set; }

    public int? VolunteerOppsId { get; set; }
    public VolunteerOpps VolunteerOpps { get; set; }

    public DateTime TimeSignedUp { get; set; } = DateTime.Now;
  }
}