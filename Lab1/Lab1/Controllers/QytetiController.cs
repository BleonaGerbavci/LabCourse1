using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Lab1.Data;
using Lab1.Models;

namespace Lab1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QytetiController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public QytetiController(DB_Bus_SystemContext context)
        {
            _context = context;
        }
        [HttpGet("GetQytetet")]
        public async Task<ActionResult<List<Qyteti>>> Get()
        {
            return Ok(await _context.Qyteti.ToListAsync());
        }

        //get qyteti by zipcode
        [HttpGet("{QytetiZipCode}")]
        public async Task<ActionResult<List<Qyteti>>> Get(int QytetiZipCode)
        {
            var qyteti = await _context.Qyteti.FindAsync(QytetiZipCode);
            if (qyteti == null)
                return BadRequest("Qyteti nuk u gjet");
            return Ok(qyteti);
        }

        //shto qytetin
        [HttpPost("ShtoQytet")]
        public async Task<ActionResult<List<Qyteti>>> ShtoQytet(Qyteti qyteti)
        {
            _context.Qyteti.Add(qyteti);
            await _context.SaveChangesAsync();

            return Ok(await _context.Qyteti.ToListAsync());
        }

        //perditeso qytetin
        [HttpPut("UpdateQytetin")]
        public async Task<ActionResult<Qyteti>> UpdateQytetin(Qyteti request)
        {
            var dbqyteti = await _context.Qyteti.FindAsync(request.QytetiZipCode);
            if (dbqyteti == null)
                return BadRequest("Qyteti nuk u gjet.");

            if (!request.EmriQytetit.Equals(""))
                dbqyteti.EmriQytetit = request.EmriQytetit;

            await _context.SaveChangesAsync();

            return Ok(await _context.Qyteti.ToListAsync());
        }

        //Fshij qytetin
        [HttpDelete("FshijQytetin")]
        public async Task<ActionResult<List<Qyteti>>> FshijQytetin(int zipcode)
        {
            var dbqyteti = await _context.Qyteti.FindAsync(zipcode);
            if (dbqyteti == null)
                return BadRequest("Qyteti nuk u gjet");

            _context.Qyteti.Remove(dbqyteti);
            await _context.SaveChangesAsync();

            return Ok(await _context.Qyteti.ToListAsync());
        }
    }
}
