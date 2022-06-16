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
        [HttpGet("{LinjaId}")]
        public async Task<ActionResult<List<Linja>>> Get(int LinjaId)
        {
            var linja = await _context.Linja.FindAsync(LinjaId);
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
            var dblinja = await _context.Linja.FindAsync(request.LinjaId);
            if (dblinja == null)
                return BadRequest("Linja nuk u gjet.");

          
                if (request.VendiInisjes == null || !request.VendiInisjes.Equals(""))
                    dblinja.VendiInisjes = request.VendiInisjes;
            
                if (request.Destinacioni == null || !request.Destinacioni.Equals(""))
                    dblinja.Destinacioni = request.Destinacioni;
           
                if (request.Cmimi > 0)
                    dblinja.Cmimi = request.Cmimi;
           
                if (request.KohaNisjes == null || !request.KohaNisjes.Equals(""))
                    dblinja.KohaNisjes = request.KohaNisjes;

                if (request.KohaMberritjes == null || !request.KohaMberritjes.Equals(""))
                    dblinja.KohaMberritjes = request.KohaMberritjes;

                if (request.Kohezgjatja == null || !request.Kohezgjatja.Equals(""))
                    dblinja.Kohezgjatja = request.Kohezgjatja;

               if (!(request.AutobusiId <= 0))
                    dblinja.AutobusiId = request.AutobusiId;

               if (!(request.KompaniaId <= 0))
                    dblinja.KompaniaId = request.KompaniaId;



            await _context.SaveChangesAsync();
            return Ok(await _context.Linja.ToListAsync());
        }
       
        //Delete
        [HttpDelete("FshijLinje")]
        public async Task<ActionResult<List<Linja>>> FshijLinje(int LinjaId)
        {
            var dblinja = await _context.Linja.FindAsync(LinjaId);
            if (dblinja == null)
                return BadRequest("Linja nuk u gjet");
            _context.Linja.Remove(dblinja);
            await _context.SaveChangesAsync();
            return Ok(await _context.Linja.ToListAsync());
        }
    }
}