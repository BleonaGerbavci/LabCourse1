using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Lab1.Data;
using Lab1.Models;

namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoliController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public RoliController(DB_Bus_SystemContext context)
        {
            _context = context;
        }
        [HttpGet("GetRolet")]
        public async Task<ActionResult<List<Roli>>> Get()
        {
            return Ok(await _context.Roli.ToListAsync());
        }

        
        [HttpGet("{RoliId}")]
        public async Task<ActionResult<List<Roli>>> Get(int RoliId)
        {
            var roli = await _context.Roli.FindAsync(RoliId);
            if (roli == null)
                return BadRequest("roli nuk u gjet");
            return Ok(roli);
        }

      
        [HttpPost("ShtoRol")]
        public async Task<ActionResult<List<Roli>>> ShtoRol(Roli roli)
        {
            _context.Roli.Add(roli);
            await _context.SaveChangesAsync();

            return Ok(await _context.Roli.ToListAsync());
        }

       

       
        [HttpDelete("FshijRol")]
        public async Task<ActionResult<List<Roli>>> FshijRol(int RoliId)
        {
            var dbroli = await _context.Roli.FindAsync(RoliId);
            if (dbroli == null)
                return BadRequest("Roli nuk u gjet");

            _context.Roli.Remove(dbroli);
            await _context.SaveChangesAsync();

            return Ok(await _context.Roli.ToListAsync());
        }
    }
}
