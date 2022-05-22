
using Microsoft.AspNetCore.Mvc;
using BusManagementSystem.Data;
using BusManagementSystem.Models;


namespace BusManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public KlientiController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetKlientat")]
        public async Task<ActionResult<List<Klienti>>> Get()
        {
            return Ok(await _context.Klienti.ToListAsync());
        }



        //Get a single client by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Klienti>>> Get(int id)
        {
            var klienti = await _context.Klienti.FindAsync(id);
            if (klienti == null)
                return BadRequest("klienti not found.");
            return Ok(klienti);
        }


        //Create a client 
        [HttpPost("ShtoKlienta")]
        public async Task<ActionResult<List<Klienti>>> ShtoKlienta(Klienti klienti)
        {
            _context.Klienti.Add(klienti);
            await _context.SaveChangesAsync();

            return Ok(await _context.Klienti.ToListAsync());
        }

        //Update client
        [HttpPut("UpdateKlienti")]
        public async Task<ActionResult<Klienti>> UpdateKlienti(Klienti request)
        {
            var dbklienti = await _context.Klienti.FindAsync(request.Id);
            if (dbklienti == null)
                return BadRequest("Klienti not found");

            dbklienti.Name = request.Name;
            dbklienti.Surname = request.Surname;
            dbklienti.PhoneNumber = request.PhoneNumber;
            dbklienti.Email = request.Email;
            dbklienti.Password = request.Password;


            await _context.SaveChangesAsync();

            return Ok(await _context.Klienti.ToListAsync());
        }

        //Delete a client
        [HttpDelete("FshijeKlientin")]
        public async Task<ActionResult<List<Klienti>>> DeleteKlienti(int id)
        {
            var dbklienti = await _context.Klienti.FindAsync(id);
            if (dbklienti == null)
                return BadRequest("Klienti not found");

            _context.Klienti.Remove(dbklienti);
            await _context.SaveChangesAsync();

            return Ok(await _context.Klienti.ToListAsync());
        }
    }
}
