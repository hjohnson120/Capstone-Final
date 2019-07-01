namespace capstone_final.Models.cs
{
  public class User
  {
    public int Id { get; set; }
    public string FullName { get; set; }
    public string EMail { get; set; }
    public string PasswordHash { get; set; }
    public string ZipCode { get; set; }
  }
}