using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Lab1.Data;
using Lab1.Models;

namespace Lab1.Controllers
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



        //Get a single Pompe by id
        [HttpGet("{PompaId}")]
        public async Task<ActionResult<List<Pompa>>> Get(int PompaId)
        {
            var pompa = await _context.Pompa.FindAsync(PompaId);
            if (pompa == null)
                return BadRequest("Pompa not found.");
            return Ok(pompa);
        }


        //Create a Pompa
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
                return BadRequest("pompa nuk u gjet");

            if (request.Emri == null || !request.Emri.Equals(""))
                dbpompa.Emri = request.Emri;

            if (request.EmriRruges == null || !request.EmriRruges.Equals(""))
                dbpompa.EmriRruges = request.EmriRruges;

            if (!(request.ZipCode <= 0))
                dbpompa.ZipCode = request.ZipCode;


            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }

        //Delete a Pompa
        [HttpDelete("DeletePompa")]
        public async Task<ActionResult<List<Pompa>>> DeletePompa(int PompaId)
        {
            var dbpompa = await _context.Pompa.FindAsync(PompaId);
            if (dbpompa == null)
                return BadRequest("Pompa not found");

            _context.Pompa.Remove(dbpompa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }
    }
}