#nullable disable
using Microsoft.AspNetCore.Mvc;
using BusManagementSystem.Data;
using BusManagementSystem.Models;


namespace BusManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutobusiController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public AutobusiController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetAutobusat")]
        public async Task<ActionResult<List<Autobusi>>> Get()
        {
            return Ok(await _context.Autobusi.ToListAsync());
        }



        //Get a single Bus by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Autobusi>>> Get(int id)
        {
            var autobusi = await _context.Autobusi.FindAsync(id);
            if (autobusi == null)
                return BadRequest("Autobusi not found.");
            return Ok(autobusi);
        }


        //Create a Bus 
        [HttpPost("ShtoAutobusa")]
        public async Task<ActionResult<List<Autobusi>>> ShtoAutobusa(Autobusi autobusi)
        {
            _context.Autobusi.Add(autobusi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Autobusi.ToListAsync());
        }

        //Update Bus
        [HttpPut("UpdateAutobusa")]
        public async Task<ActionResult<Autobusi>> UpdateAutobusi(Autobusi request)
        {
            var dbautobusi = await _context.Autobusi.FindAsync(request.Id);
            if (dbautobusi == null)
                return BadRequest("autobusi not found");
     
            dbautobusi.Number = request.Number;
            dbautobusi.Capacity = request.Capacity;
            dbautobusi.FuelCapacity = request.FuelCapacity;
            dbautobusi.GarazhaId = request.GarazhaId;
            dbautobusi.KompaniaId = request.KompaniaId;
            dbautobusi.PompaId = request.PompaId;



            await _context.SaveChangesAsync();

            return Ok(await _context.Autobusi.ToListAsync());
        }
 
        //Delete a Bus
        [HttpDelete("FshijeAutobusa")]
        public async Task<ActionResult<List<Autobusi>>> DeleteAutobusi(int id)
        {
            var dbautobusi = await _context.Autobusi.FindAsync(id);
            if (dbautobusi == null)
                return BadRequest("Autobusi not found");

            _context.Autobusi.Remove(dbautobusi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Autobusi.ToListAsync());
        }
    }
}
   