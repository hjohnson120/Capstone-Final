using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using capstone_final.Models.cs;
using Capstone_Final.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;



namespace Capstone_Final.Services
{
  public class AuthService
  {


    private double jwtLifespan = 2592000;
    private string jwtSecret = "some really big random string";

    public object CreateAuthData(capstone_final.Models.cs.User user)
    {
      var expirationTime = DateTime.UtcNow.AddSeconds(jwtLifespan);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim(ClaimTypes.Name, user.EMail),
            new Claim("id", user.Id.ToString())
        }),
        Expires = expirationTime,
        // new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256Signature)
        SigningCredentials = new SigningCredentials(
              new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
              SecurityAlgorithms.HmacSha256Signature
          )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

      return new AuthData
      {
        Token = token,
        TokenExpirationTime = ((DateTimeOffset)expirationTime).ToUnixTimeSeconds(),
        Id = user.Id,
        User = user
      };
    }
    public string HashPassword(User user, string passwordToHash)
    {
      return new PasswordHasher<User>().HashPassword(user, passwordToHash);
    }

    public bool VerifyPassword(User user, string providedPassword)
    {
      return new PasswordHasher<User>().VerifyHashedPassword(user, user.PasswordHash, providedPassword) == PasswordVerificationResult.Success;
    }
  }
}
