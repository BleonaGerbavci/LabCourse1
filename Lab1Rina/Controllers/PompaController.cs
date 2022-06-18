using Microsoft.AspNetCore.Mvc;
using Lab1Rina.Data;
using Lab1Rina.Models;


namespace Lab1Rina.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PompaController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public PompaController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetPompa")]
        public async Task<ActionResult<List<Pompa>>> Get()
        {
            return Ok(await _context.Pompa.ToListAsync());
        }



        //Get a single Bus by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Pompa>>> Get(int id)
        {
            var pompa = await _context.Pompa.FindAsync(id);
            if (pompa == null)
                return BadRequest("Pompa not found.");
            return Ok(pompa);
        }


        //Create Pompa
        [HttpPost("ShtoPompa")]
        public async Task<ActionResult<List<Pompa>>> AddPompa(Pompa pompa)
        {
            _context.Pompa.Add(pompa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }

        //Update Pompa
        [HttpPut("UpdatePompa")]
        public async Task<ActionResult<Pompa>> UpdatePompa(Pompa request)
        {
            var dbpompa = await _context.Pompa.FindAsync(request.PompaId);
            if (dbpompa == null)
                return BadRequest("Pompa not found");


            if (!request.Emri.Equals(""))
                dbpompa.Emri = request.Emri;
            if (!request.EmriRruges.Equals(""))
                dbpompa.EmriRruges = request.EmriRruges;
            if (!request.ZipCode.Equals(""))
                dbpompa.ZipCode = request.ZipCode;


            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }

        //Delete a Bus
        [HttpDelete("FshijPompa")]
        public async Task<ActionResult<List<Pompa>>> DeletePompa(int pompaId)
        {
            var dbpompa = await _context.Pompa.FindAsync(pompaId);
            if (dbpompa == null)
                return BadRequest("Pompa not found");

            _context.Pompa.Remove(dbpompa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }
    }
}