using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone_Final.Models;
using capstone_final;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RegisteredOppsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public RegisteredOppsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/RegisteredOpps
    [HttpGet]
    public async Task<ActionResult<IEnumerable<RegisteredOpps>>> GetRegisteredOpp()
    {
      var currentUser = _context.Users.FirstOrDefault(f => f.EMail == User.Identity.Name);

      return await _context.RegisteredOpp.Include(i => i.VolunteerOpps).Where(w => w.UserId == currentUser.Id).ToListAsync();
    }

    // GET: api/RegisteredOpps/5
    [HttpGet("{id}")]
    public async Task<ActionResult<RegisteredOpps>> GetRegisteredOpps(int id)
    {
      var registeredOpps = await _context.RegisteredOpp.FindAsync(id);

      if (registeredOpps == null)
      {
        return NotFound();
      }

      return registeredOpps;
    }

    // PUT: api/RegisteredOpps/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutRegisteredOpps(int id, RegisteredOpps registeredOpps)
    {
      if (id != registeredOpps.Id)
      {
        return BadRequest();
      }

      _context.Entry(registeredOpps).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!RegisteredOppsExists(id))
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

    // POST: api/RegisteredOpps
    [HttpPost]
    public async Task<ActionResult<RegisteredOpps>> PostRegisteredOpps(RegisteredOpps registeredOpps)
    {
      // add the user Id
      var currentUser = _context.Users.FirstOrDefault(f => f.EMail == User.Identity.Name);
      registeredOpps.UserId = currentUser.Id;
      _context.RegisteredOpp.Add(registeredOpps);
      await _context.SaveChangesAsync();

      return registeredOpps;
    }

    // DELETE: api/RegisteredOpps/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<RegisteredOpps>> DeleteRegisteredOpps(int id)
    {
      var registeredOpps = await _context.RegisteredOpp.FindAsync(id);
      if (registeredOpps == null)
      {
        return NotFound();
      }

      _context.RegisteredOpp.Remove(registeredOpps);
      await _context.SaveChangesAsync();

      return registeredOpps;
    }

    private bool RegisteredOppsExists(int id)
    {
      return _context.RegisteredOpp.Any(e => e.Id == id);
    }
  }
}
