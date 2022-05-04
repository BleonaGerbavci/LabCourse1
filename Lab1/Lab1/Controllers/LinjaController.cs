using Microsoft.AspNetCore.Mvc;
using Lab1.Data;
using Lab1.Models;


namespace Lab1.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class LinjaController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public LinjaController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetLinjat")]
        public async Task<ActionResult<List<Linja>>> Get()
        {
            return Ok(await _context.Linja.ToListAsync());
        }



        //Get a single Line by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Linja>>> Get(int id)    
        {
            var linja = await _context.Linja.FindAsync(id);
            if (linja == null)
                return BadRequest("Linja nuk u gjet.");
            return Ok(linja);
        }


        //Create
        [HttpPost("ShtoLinje")]
        public async Task<ActionResult<List<Linja>>> ShtoLinje(Linja linja)
        {
            _context.Linja.Add(linja);
            await _context.SaveChangesAsync();

            return Ok(await _context.Linja.ToListAsync());
        }

        //Update nje linje
        [HttpPut("UpdateLinje")]
        public async Task<ActionResult<Linja>> UpdateLinje(Linja request)
        {
            var dblinja = await _context.Linja.FindAsync(request.Id);
            if (dblinja == null)
                return BadRequest("Linja nuk u gjet.");

            if (!request.PickupLocation.Equals(""))
                dblinja.PickupLocation = request.PickupLocation;
            if (!request.DestinationLocaion.Equals(""))
                dblinja.DestinationLocaion = request.DestinationLocaion;
            if (!request.Price.Equals(""))
                dblinja.Price = request.Price;
            if (!request.Duration.Equals(""))
                dblinja.Duration = request.Duration;
          
            await _context.SaveChangesAsync();

            return Ok(await _context.Linja.ToListAsync());
        }

        //Delete
        [HttpDelete("FshijLinje")]
        public async Task<ActionResult<List<Linja>>> FshijLinje(int id)
        {
            var dblinja = await _context.Linja.FindAsync(id);
            if (dblinja == null)
                return BadRequest("Linja not found");

            _context.Linja.Remove(dblinja);
            await _context.SaveChangesAsync();

            return Ok(await _context.Linja.ToListAsync());
        }

    }
}
