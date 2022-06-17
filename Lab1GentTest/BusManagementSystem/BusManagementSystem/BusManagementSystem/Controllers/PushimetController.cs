using Microsoft.AspNetCore.Mvc;
using BusManagementSystem.Data;
using BusManagementSystem.Models;


namespace BusManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PushimetController : ControllerBase
    {
        private readonly DB_Bus_SystemContext _context;

        public PushimetController(DB_Bus_SystemContext context)
        {
            _context = context;
        }


        [HttpGet("GetPushimet")]
        public async Task<ActionResult<List<Pushimi>>> Get()
        {
            return Ok(await _context.Pushimi.ToListAsync());
        }



        //Get a single Pushim by id
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Pushimi>>> Get(int id)
        {
            var pushimi = await _context.Pushimi.FindAsync(id);
            if (pushimi == null)
                return BadRequest("Pushimet not found.");
            return Ok(pushimi);
        }


        //Create Pushime
        [HttpPost("ShtoPushime")]
        public async Task<ActionResult<List<Pushimi>>> AddPushimi(Pushimi pushimi)
        {
            _context.Pushimi.Add(pushimi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pushimi.ToListAsync());
        }

        //Update Pushime
        [HttpPut("UpdatePushimet")]
        public async Task<ActionResult<Pushimi>> UpdatePushimi(Pushimi request)
        {
            var dbpushimi = await _context.Pushimi.FindAsync(request.PushimiId);
            if (dbpushimi == null)
                return BadRequest("Pushimet not found");

            
            if (!request.DataFilimit.Equals(""))
                dbpushimi.DataFilimit = request.DataFilimit;
            if (!request.DataMbarimit.Equals(""))
                dbpushimi.DataMbarimit = request.DataMbarimit;
            if (!request.UserId.Equals(""))
                dbpushimi.UserId = request.UserId;
           


            await _context.SaveChangesAsync();

            return Ok(await _context.Pushimi.ToListAsync());
        }

        //Delete Pushime
        [HttpDelete("FshijePushimin")]
        public async Task<ActionResult<List<Pushimi>>> DeletePushimi(int pushimiId)
        {
            var dbpushimi = await _context.Pushimi.FindAsync(pushimiId);
            if (dbpushimi == null)
                return BadRequest("Pushimet not found");

            _context.Pushimi.Remove(dbpushimi);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pushimi.ToListAsync());
        }
    }
}