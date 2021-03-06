using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using capstone_final;
using capstone_final.Models.cs;
using Microsoft.AspNetCore.Authorization;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class UserController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public UserController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/User
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
      return await _context.Users.ToListAsync();
    }

    // GET: api/User/5
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
      var user = await _context.Users.FindAsync(id);

      if (user == null)
      {
        return NotFound();
      }

      return user;
    }

    // PUT: api/User/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(int id, User user)
    {
      if (id != user.Id)
      {
        return BadRequest();
      }

      _context.Entry(user).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UserExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/User
    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
      var exists = await _context.Users.AnyAsync(u => u.EMail == user.EMail || u.EMail == user.EMail);
      if (exists)
      {
        return BadRequest(new { message = "User with the email already exists" });
      }
      _context.Users.Add(user);
      await _context.SaveChangesAsync();
      // if (user.IsSchool)
      // {
      //   _context.Users.Add(new School
      //   {
      //     UserId = user.Id
      //   });
      // }
      // else
      // {
      //   _context.Users.Add(new User
      //   {
      //     Id = user.Id
      //   });
      // }
      // await _context.SaveChangesAsync();

      // var rv = new UserService().CreateUserData(user);
      // return Ok(rv);

      return CreatedAtAction("GetUser", new { id = user.Id }, user);
    }

    // DELETE: api/User/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<User>> DeleteUser(int id)
    {
      var user = await _context.Users.FindAsync(id);
      if (user == null)
      {
        return NotFound();
      }

      _context.Users.Remove(user);
      await _context.SaveChangesAsync();

      return user;
    }

    private bool UserExists(int id)
    {
      return _context.Users.Any(e => e.Id == id);
    }
  }
}
