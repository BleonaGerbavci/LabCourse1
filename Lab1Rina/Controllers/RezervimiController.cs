using Microsoft.AspNetCore.Mvc;
using Lab1Rina.Data;
using Lab1Rina.Models;


namespace Lab1Rina.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RezervimiController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public RezervimiController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetRezervimi")]
        public async Task<ActionResult<List<Rezervimi>>> Get()
        {
            return Ok(await _context.Rezervimi.ToListAsync());
        }



        //Get a single Bus by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Rezervimi>>> Get(int id)
        {
            var rezervimi = await _context.Rezervimi.FindAsync(id);
            if (rezervimi == null)
                return BadRequest("Rezervimi not found.");
            return Ok(rezervimi);
        }


        //Create Rezervimi
        [HttpPost("ShtoRezervimi")]
        public async Task<ActionResult<List<Rezervimi>>> AddRezervimi(Rezervimi rezervimi)
        {
            _context.Rezervimi.Add(rezervimi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Rezervimi.ToListAsync());
        }

        //Update Rezervimi
        [HttpPut("UpdateRezervimi")]
        public async Task<ActionResult<Rezervimi>> UpdateRezervimi(Rezervimi request)
        {
            var dbrezervimi = await _context.Rezervimi.FindAsync(request.RezervimiId);
            if (dbrezervimi == null)
                return BadRequest("Rezervimi not found");


            if (!request.Emri.Equals(""))
                dbrezervimi.Emri = request.Emri;
            if (!request.Mbiemri.Equals(""))
                dbrezervimi.Mbiemri = request.Mbiemri;
            if (!request.Emaili.Equals(""))
                dbrezervimi.Emaili = request.Emaili;
            if (!request.NrTelefonit.Equals(""))
                dbrezervimi.NrTelefonit = request.NrTelefonit;
            if (!request.UserId.Equals(""))
                dbrezervimi.UserId = request.UserId;
            if (!request.LinjaId.Equals(""))
                dbrezervimi.LinjaId = request.LinjaId;

            await _context.SaveChangesAsync();

            return Ok(await _context.Rezervimi.ToListAsync());
        }

        //Delete a Bus
        [HttpDelete("FshijRezervimi")]
        public async Task<ActionResult<List<Rezervimi>>> DeleteRezervimi(int rezervimiId)
        {
            var dbrezervimi = await _context.Rezervimi.FindAsync(rezervimiId);
            if (dbrezervimi == null)
                return BadRequest("Rezervimi not found");

            _context.Rezervimi.Remove(dbrezervimi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Rezervimi.ToListAsync());
        }
    }
}