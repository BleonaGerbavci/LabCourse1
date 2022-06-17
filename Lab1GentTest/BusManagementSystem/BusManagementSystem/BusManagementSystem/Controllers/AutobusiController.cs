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
        public async Task<ActionResult<List<Autobusi>>> AddAutobusi(Autobusi autobusi)
        {
            _context.Autobusi.Add(autobusi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Autobusi.ToListAsync());
        }

        //Update Bus
        [HttpPut("UpdateAutobusa")]
        public async Task<ActionResult<Autobusi>> UpdateAutobusi(Autobusi request)
        {
            var dbautobusi = await _context.Autobusi.FindAsync(request.AutobusiId);
            if (dbautobusi == null)
                return BadRequest("autobusi not found");

            if (!request.NrUleseve.Equals(""))
                dbautobusi.NrUleseve= request.NrUleseve;
            if (!request.FuelCapacity.Equals(""))
                dbautobusi.FuelCapacity = request.FuelCapacity;
            if (!request.GarazhaId.Equals(""))
                dbautobusi.GarazhaId = request.GarazhaId;
            if (!request.KompaniaId.Equals(""))
                dbautobusi.KompaniaId = request.KompaniaId;
            if (!request.StacioniId.Equals(""))
                dbautobusi.StacioniId = request.StacioniId;



            await _context.SaveChangesAsync();

            return Ok(await _context.Autobusi.ToListAsync());
        }

        //Delete a Bus
        [HttpDelete("FshijeAutobusin")]
        public async Task<ActionResult<List<Autobusi>>> DeleteAutobusi(int autobusiId)
        {
            var dbautobusi = await _context.Autobusi.FindAsync(autobusiId);
            if (dbautobusi == null)
                return BadRequest("Autobusi not found");

            _context.Autobusi.Remove(dbautobusi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Autobusi.ToListAsync());
        }
    }
}