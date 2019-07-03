using capstone_final.Models.cs;

namespace Capstone_Final.ViewModels
{
  public class AuthData
  {
    public string Token { get; set; }
    public long TokenExpirationTime { get; set; }
    public int Id { get; set; }
    public User User { get; set; }
  }
}

