using System.Linq;
using System.Threading.Tasks;
using capstone_final;
using capstone_final.Models.cs;
using Capstone_Final.Services;
using Capstone_Final.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Capstone_Final.Controllers
{
  [ApiController]
  [Route("auth")]
  public class AuthController : ControllerBase
  {

    private DatabaseContext _context;
    public AuthController(DatabaseContext context)
    {
      this._context = context;
    }

    [HttpPost("login")]
    public async Task<ActionResult> LoginIn([FromBody] RegisterViewModel loginInfo)
    {
      // does the user exists
      var user = await _context.Users.FirstOrDefaultAsync(u => u.EMail == loginInfo.EMail);
      if (user == null)
      {
        return Unauthorized(new { message = "This user doesn't exist, sign up with the link below!" });
      }
      else
      {
        // validate the password
        if (new AuthService().VerifyPassword(user, loginInfo.Password))
        {
          // create a new token
          var rv = new AuthService().CreateAuthData(user);
          return Ok(rv);
        }
        else
        {
          return Unauthorized();
        }
      }
    }

    [HttpPost("register")]
    public async Task<ActionResult> Register([FromBody] RegisterViewModel registerInformation)
    {
      // check if the user exists
      var exists = await _context.Users.AnyAsync(u => u.EMail == registerInformation.EMail);
      // if exists, return an error
      if (exists)
      {
        return BadRequest(new { message = "User with the email already exists" });
      }
      // else create a user
      var user = new User
      {
        EMail = registerInformation.EMail,
        FullName = registerInformation.FullName,
        IsSchool = registerInformation.IsSchool
      };
      // hash password
      var hashed = new AuthService().HashPassword(user, registerInformation.Password);
      user.PasswordHash = hashed;
      _context.Users.Add(user);
      await _context.SaveChangesAsync();
      // return a token so the user can do user things
      var rv = new AuthService().CreateAuthData(user);
      return Ok(rv);
    }


  }
}
