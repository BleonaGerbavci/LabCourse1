using Lab1.Data;
using Lab1.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StacioniController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;
        public StacioniController(DB_Bus_SystemContext context)
        {
            _context = context;
        }
        [HttpGet("GetStacionet")]
        public async Task<ActionResult<List<Stacioni>>> Get()
        {
            return Ok(await _context.Stacioni.ToListAsync());
        }
        //Get a single Stacion by id
        [HttpGet("{StacioniId}")]
        public async Task<ActionResult<List<Stacioni>>> Get(int StacioniId)
        {
            var stacioni = await _context.Stacioni.FindAsync(StacioniId);
            if (stacioni == null)
                return BadRequest("Stacioni nuk u gjet.");
            return Ok(stacioni);
        }
        //Create
        [HttpPost("ShtoStacion")]
        public async Task<ActionResult<List<Stacioni>>> ShtoStacion(Stacioni stacioni)
        {
            _context.Stacioni.Add(stacioni);
            await _context.SaveChangesAsync();
            return Ok(await _context.Stacioni.ToListAsync());
        }
        //Update nje stacion
        [HttpPut("UpdateStacion")]
        public async Task<ActionResult<Stacioni>> UpdateStacion(Stacioni request)
        {
            var dbstacioni = await _context.Stacioni.FindAsync(request.StacioniId);
            if (dbstacioni == null)
                return BadRequest("Stacioni nuk u gjet.");

            if (request.EmriRruges == null || !request.EmriRruges.Equals(""))
                dbstacioni.EmriRruges = request.EmriRruges;

            if (!(request.ZipCode <= 0))
                dbstacioni.ZipCode = request.ZipCode;


            await _context.SaveChangesAsync();
            return Ok(await _context.Stacioni.ToListAsync());
        }

        //Delete
        [HttpDelete("FshijStacion")]
        public async Task<ActionResult<List<Stacioni>>> FshijStacion(int StacioniId)
        {
            var dbstacioni = await _context.Stacioni.FindAsync(StacioniId);
            if (dbstacioni == null)
                return BadRequest("Stacioni nuk u gjet");
            _context.Stacioni.Remove(dbstacioni);
            await _context.SaveChangesAsync();
            return Ok(await _context.Stacioni.ToListAsync());
        }
    }
}

