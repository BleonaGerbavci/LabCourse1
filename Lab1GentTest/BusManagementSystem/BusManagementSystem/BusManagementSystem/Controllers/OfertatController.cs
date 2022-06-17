using Microsoft.AspNetCore.Mvc;
using BusManagementSystem.Data;
using BusManagementSystem.Models;


namespace BusManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfertatController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public OfertatController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetOfertat")]
        public async Task<ActionResult<List<Oferta>>> Get()
        {
            return Ok(await _context.Oferta.ToListAsync());
        }



        //Get a single Bus by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Oferta>>> Get(int id)
        {
            var oferta = await _context.Oferta.FindAsync(id);
            if (oferta == null)
                return BadRequest("Oferta not found.");
            return Ok(oferta);
        }


        //Create Oferta
        [HttpPost("ShtoOferta")]
        public async Task<ActionResult<List<Oferta>>> AddOferta(Oferta oferta)
        {
            _context.Oferta.Add(oferta);
            await _context.SaveChangesAsync();

            return Ok(await _context.Oferta.ToListAsync());
        }

        //Update Oferta
        [HttpPut("UpdateOferta")]
        public async Task<ActionResult<Oferta>> UpdateOferta(Oferta request)
        {
            var dboferta = await _context.Oferta.FindAsync(request.OfertaId);
            if (dboferta == null)
                return BadRequest("Oferta not found");


            if (!request.Description.Equals(""))
                dboferta.Description = request.Description;
            if (!request.Price.Equals(""))
                dboferta.Price = request.Price;
            if (!request.KompaniaId.Equals(""))
                dboferta.KompaniaId = request.KompaniaId;
            if (!request.LinjaId.Equals(""))
                dboferta.LinjaId = request.LinjaId;



            await _context.SaveChangesAsync();

            return Ok(await _context.Oferta.ToListAsync());
        }

        //Delete a Bus
        [HttpDelete("FshijOferta")]
        public async Task<ActionResult<List<Oferta>>> DeleteOferta(int ofertaId)
        {
            var dboferta = await _context.Oferta.FindAsync(ofertaId);
            if (dboferta == null)
                return BadRequest("Oferta not found");

            _context.Oferta.Remove(dboferta);
            await _context.SaveChangesAsync();

            return Ok(await _context.Oferta.ToListAsync());
        }
    }
}