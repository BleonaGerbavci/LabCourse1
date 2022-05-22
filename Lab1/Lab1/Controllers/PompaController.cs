
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


        [HttpGet ("GetPompa")]
        public async Task<ActionResult<List<Pompa>>> Get()
        {
            return Ok(await _context.Pompa.ToListAsync());
        }



        //Get a single Pompe by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Pompa>>> Get(int id)
        {
            var pompa = await _context.Pompa.FindAsync(id);
            if (pompa == null)
                return BadRequest("Pompa not found.");
            return Ok(pompa);
        }


        //Create a Pompa
        [HttpPost ("ShtoPompa")]
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
            var dbpompa = await _context.Pompa.FindAsync(request.Id);
            if (dbpompa == null)
                return BadRequest("pompa not found");

            if(request.Name == null ||!request.Name.Equals(""))
            dbpompa.Name = request.Name;

            if(request.Adress == null ||!request.Adress.Equals(""))
            dbpompa.Adress = request.Adress;




            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }

        //Delete a Pompa
        [HttpDelete("DeletePompa")]
        public async Task<ActionResult<List<Pompa>>> DeletePompa(int id)
        {
            var dbpompa = await _context.Pompa.FindAsync(id);
            if (dbpompa == null)
                return BadRequest("Pompa not found");

            _context.Pompa.Remove(dbpompa);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pompa.ToListAsync());
        }
    }
}