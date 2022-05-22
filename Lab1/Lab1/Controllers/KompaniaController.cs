#nullable disable
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
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Kompania>>> Get(int id)
        {
            var kompania = await _context.Kompania.FindAsync(id);
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
            var dbkompania = await _context.Kompania.FindAsync(request.Id);
            if (dbkompania == null)
                return BadRequest("Kompania nuk u gjet."); 

            if(!request.Name.Equals(""))
            dbkompania.Name = request.Name;
            if(!request.Adress.Equals(""))
            dbkompania.Adress = request.Adress;
            if(!request.City.Equals(""))
            dbkompania.City = request.City;
            if(!request.Email.Equals(""))
            dbkompania.Email = request.Email;
            if(!request.ContactNumber.Equals(""))
            dbkompania.ContactNumber = request.ContactNumber;

            await _context.SaveChangesAsync();

            return Ok(await _context.Kompania.ToListAsync());
        }

        //Delete a Company
        [HttpDelete("FshijKompanine")]
        public async Task<ActionResult<List<Kompania>>> FshijKompanine(int id)
        {
            var dbkompania = await _context.Kompania.FindAsync(id);
            if (dbkompania == null)
                return BadRequest("Kompania not found");

            _context.Kompania.Remove(dbkompania);
            await _context.SaveChangesAsync();

            return Ok(await _context.Kompania.ToListAsync());
        }
    }
}




