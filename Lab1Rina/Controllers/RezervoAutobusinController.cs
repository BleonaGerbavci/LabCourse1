using Microsoft.AspNetCore.Mvc;
using Lab1Rina.Data;
using Lab1Rina.Models;


namespace Lab1Rina.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RezervoAutobusinController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public RezervoAutobusinController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetRezervoAutobusin")]
        public async Task<ActionResult<List<RezervoAutobusin>>> Get()
        {
            return Ok(await _context.RezervoAutobusin.ToListAsync());
        }



        //Get a single Bus by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<RezervoAutobusin>>> Get(int id)
        {
            var rezervoAutobusin = await _context.RezervoAutobusin.FindAsync(id);
            if (rezervoAutobusin == null)
                return BadRequest("RezervoAutobusin not found.");
            return Ok(rezervoAutobusin);
        }


        //Create RezervoAutobusin
        [HttpPost("ShtoRezervoAutobusin")]
        public async Task<ActionResult<List<RezervoAutobusin>>> AddRezervoAutobusin(RezervoAutobusin rezervoAutobusin)
        {
            _context.RezervoAutobusin.Add(rezervoAutobusin);
            await _context.SaveChangesAsync();

            return Ok(await _context.RezervoAutobusin.ToListAsync());
        }

        //Update RezervoAutobusin
        [HttpPut("UpdateRezervoAutobusin")]
        public async Task<ActionResult<List<RezervoAutobusin>>> UpdateRezervoAutobusin(RezervoAutobusin request)
        {
            var dbrezervoAutobusin = await _context.RezervoAutobusin.FindAsync(request.RezervimiId);
            if (dbrezervoAutobusin == null)
                return BadRequest("RezervoAutobusin not found");


            if (!request.DataRezervimit.Equals(""))
                dbrezervoAutobusin.DataRezervimit = request.DataRezervimit;
            if (!request.DataKthimit.Equals(""))
                dbrezervoAutobusin.DataKthimit = request.DataKthimit;
            if (!request.UserId.Equals(""))
                dbrezervoAutobusin.UserId = request.UserId;
            if (!request.AutobusiId.Equals(""))
                dbrezervoAutobusin.AutobusiId = request.AutobusiId;

            await _context.SaveChangesAsync();

            return Ok(await _context.RezervoAutobusin.ToListAsync());
        }

        //Delete a Bus
        [HttpDelete("FshijRezervoAutobusin")]
        public async Task<ActionResult<List<RezervoAutobusin>>> DeleteRezervoAutobusin(int id)
        {
            var dbrezervoAutobusin = await _context.RezervoAutobusin.FindAsync(id);
            if (dbrezervoAutobusin == null)
                return BadRequest("RezervoAutobusin not found");

            _context.RezervoAutobusin.Remove(dbrezervoAutobusin);
            await _context.SaveChangesAsync();

            return Ok(await _context.RezervoAutobusin.ToListAsync());
        }
    }
}