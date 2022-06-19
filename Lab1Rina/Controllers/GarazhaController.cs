using Microsoft.AspNetCore.Mvc;
using Lab1Rina.Data;
using Lab1Rina.Models;


namespace Lab1Rina.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GarazhaController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public GarazhaController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetGarazha")]
        public async Task<ActionResult<List<Garazha>>> Get()
        {
            return Ok(await _context.Garazha.ToListAsync());
        }



        //Get a single Bus by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Garazha>>> Get(int id)
        {
            var garazha = await _context.Garazha.FindAsync(id);
            if (garazha == null)
                return BadRequest("Garazha not found.");
            return Ok(garazha);
        }


        //Create Garazha
        [HttpPost("ShtoGarazha")]
        public async Task<ActionResult<List<Garazha>>> AddGarazha(Garazha garazha)
        {
            _context.Garazha.Add(garazha);
            await _context.SaveChangesAsync();

            return Ok(await _context.Garazha.ToListAsync());
        }

        //Update Garazha
        [HttpPut("UpdateGarazha")]
        public async Task<ActionResult<Garazha>> UpdateGarazha(Garazha request)
        {
            var dbgarazha = await _context.Garazha.FindAsync(request.GarazhaId);
            if (dbgarazha == null)
                return BadRequest("Garazha not found");


            if (!request.EmriRruges.Equals(""))
                dbgarazha.EmriRruges = request.EmriRruges;
            if (!(request.ZipCode <= 0) )
                dbgarazha.ZipCode = request.ZipCode;
            if (!(request.KompaniaId <= 0))
                dbgarazha.KompaniaId = request.KompaniaId;


            await _context.SaveChangesAsync();

            return Ok(await _context.Garazha.ToListAsync());
        }

        //Delete a Bus
        [HttpDelete("FshijGarazha")]
        public async Task<ActionResult<List<Garazha>>> DeleteGarazha(int garazhaId)
        {
            var dbgarazha = await _context.Garazha.FindAsync(garazhaId);
            if (dbgarazha == null)
                return BadRequest("Garazha not found");

            _context.Garazha.Remove(dbgarazha);
            await _context.SaveChangesAsync();

            return Ok(await _context.Garazha.ToListAsync());
        }
    }
}