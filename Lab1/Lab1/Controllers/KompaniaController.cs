using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Lab1.Data;
using Lab1.Models;
namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KompaniaController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;
        public KompaniaController(DB_Bus_SystemContext context)
        {
            _context = context;
        }
        [HttpGet("GetKompanite")]
        public async Task<ActionResult<List<Kompania>>> Get()
        {
            return Ok(await _context.Kompania.ToListAsync());
        }
        //Get a single Company by id
        [HttpGet("{KompaniaId}")]
        public async Task<ActionResult<List<Kompania>>> Get(int KompaniaId)
        {
            var kompania = await _context.Kompania.FindAsync(KompaniaId);
            if (kompania == null)
                return BadRequest("Kompania nuk u gjet.");
            return Ok(kompania);
        }
        //Create a Company 
        [HttpPost("ShtoKompani")]
        public async Task<ActionResult<List<Kompania>>> ShtoKompani(Kompania kompania)
        {
            _context.Kompania.Add(kompania);
            await _context.SaveChangesAsync();
            return Ok(await _context.Kompania.ToListAsync());
        }
        //Update a Company
        [HttpPut("UpdateKompanine")]
        public async Task<ActionResult<Kompania>> UpdateKompanine(Kompania request)
        {
            var dbkompania = await _context.Kompania.FindAsync(request.KompaniaId);
            if (dbkompania == null)
                return BadRequest("Kompania nuk u gjet.");
            

            if (!request.Emri.Equals(""))
                dbkompania.Emri = request.Emri;

            if (!request.Emaili.Equals(""))
                dbkompania.Emaili = request.Emaili;

            if (!request.NrTelefonit.Equals(""))
                dbkompania.NrTelefonit = request.NrTelefonit;

            if (!request.NrAdreses.Equals(""))
                dbkompania.NrAdreses = request.NrAdreses;

            if (!request.EmriRruges.Equals(""))
                dbkompania.EmriRruges = request.EmriRruges;

            if (!(request.ZipCode <= 0))
                dbkompania.ZipCode = request.ZipCode;

            if (!(request.PompaId <= 0))
                dbkompania.PompaId = request.PompaId;


            await _context.SaveChangesAsync();
            return Ok(await _context.Kompania.ToListAsync());
        }
        //Delete a Company
        [HttpDelete("FshijKompanine")]
        public async Task<ActionResult<List<Kompania>>> FshijKompanine(int KompaniaId)
        {
            var dbkompania = await _context.Kompania.FindAsync(KompaniaId);
            if (dbkompania == null)
                return BadRequest("Kompania not found");
            _context.Kompania.Remove(dbkompania);
            await _context.SaveChangesAsync();
            return Ok(await _context.Kompania.ToListAsync());
        }
    }
}
