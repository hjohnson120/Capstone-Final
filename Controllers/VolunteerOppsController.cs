using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone_Final.Models.cs;
using capstone_final;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class VolunteerOppsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public VolunteerOppsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/VolunteerOpps
    [HttpGet]
    public async Task<ActionResult<IEnumerable<VolunteerOpps>>> GetVolunteerOpp()
    {
      var currentUser = _context.Users.FirstOrDefault(f => f.EMail == User.Identity.Name);

      return await _context.VolunteerOpp.Include(i => i.User).Where(w => w.UserId == currentUser.Id).ToListAsync();
    }

    // GET: api/VolunteerOpps/5
    [HttpGet("{zipCode}")]
    public async Task<ActionResult<List<VolunteerOpps>>> GetVolunteerOpps([FromRoute] string zipCode)
    {
      var zipCodes = new List<string>();
      var API_KEY = "99PTSNbwNZOgAo6H9vgiRtB7vOoFnTvO5GFbmc8MXJq8P9BEazBQBSi5BB0H3XUm";
      var API = $"https://www.zipcodeapi.com/rest/{API_KEY}/radius.csv/{zipCode}/5/miles?minimal";
      // make GET request here


      var volunteerOpps = _context.VolunteerOpp.Where(w => zipCodes.Contains(w.ZipCode));
      return await volunteerOpps.ToListAsync();
    }

    // PUT: api/VolunteerOpps/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutVolunteerOpps(int id, VolunteerOpps volunteerOpps)
    {
      if (id != volunteerOpps.Id)
      {
        return BadRequest();
      }

      _context.Entry(volunteerOpps).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!VolunteerOppsExists(id))
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

    // POST: api/VolunteerOpps
    [HttpPost]
    public async Task<ActionResult<VolunteerOpps>> PostVolunteerOpps(VolunteerOpps volunteerOpps)
    {
      var currentUser = _context.Users.FirstOrDefault(f => f.EMail == User.Identity.Name);
      volunteerOpps.UserId = currentUser.Id;
      _context.VolunteerOpp.Add(volunteerOpps);
      await _context.SaveChangesAsync();

      return Ok(volunteerOpps);
    }

    // DELETE: api/VolunteerOpps/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<VolunteerOpps>> DeleteVolunteerOpps(int id)
    {
      var volunteerOpps = await _context.VolunteerOpp.FindAsync(id);
      if (volunteerOpps == null)
      {
        return NotFound();
      }

      _context.VolunteerOpp.Remove(volunteerOpps);
      await _context.SaveChangesAsync();

      return volunteerOpps;
    }

    private bool VolunteerOppsExists(int id)
    {
      return _context.VolunteerOpp.Any(e => e.Id == id);
    }
  }
}
